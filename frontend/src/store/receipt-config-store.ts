import { useStore } from "zustand";
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

export const defaultReceiptCategories = [
  "Groceries",
  "Equipment",
  "Furniture",
  "Utilities",
  "Hardware",
  "Personal Care",
  "Household",
  "Miscellaneous",
] as const;

export const receiptDataTypes = [
  "storeName",
  "category",
  "subcategory",
  "itemName",
  "quantity",
  "unitPrice",
  "lineTotal",
  "receiptDate",
  "receiptTotal",
] as const;

export type ReceiptDataType = (typeof receiptDataTypes)[number];

export type StoreSubcategories = Record<string, string[]>;

type ReceiptConfigState = {
  categories: string[];
  dataTypes: ReceiptDataType[];
  storeSubcategories: StoreSubcategories;
};

type ReceiptConfigActions = {
  addCategory: (categoryName: string) => void;
  removeCategory: (categoryName: string) => void;
  renameCategory: (currentName: string, nextName: string) => void;
  resetCategories: () => void;
  addStoreSubcategory: (storeName: string, subcategoryName: string) => void;
  removeStoreSubcategory: (storeName: string, subcategoryName: string) => void;
  setStoreSubcategories: (storeName: string, subcategories: string[]) => void;
  removeStore: (storeName: string) => void;
  resetReceiptConfig: () => void;
};

export type ReceiptConfigStore = ReceiptConfigState & ReceiptConfigActions;

const normalizeName = (name: string) => name.trim();

const addUniqueName = (names: string[], name: string) => {
  const normalizedName = normalizeName(name);

  if (!normalizedName) {
    return names;
  }

  const exists = names.some(
    (existingName) =>
      existingName.toLocaleLowerCase() === normalizedName.toLocaleLowerCase(),
  );

  return exists ? names : [...names, normalizedName];
};

const removeName = (names: string[], name: string) => {
  const normalizedName = normalizeName(name);

  return names.filter(
    (existingName) =>
      existingName.toLocaleLowerCase() !== normalizedName.toLocaleLowerCase(),
  );
};

const dedupeNames = (names: string[]) =>
  names.reduce<string[]>(
    (uniqueNames, name) => addUniqueName(uniqueNames, name),
    [],
  );

const defaultReceiptConfigState: ReceiptConfigState = {
  categories: [...defaultReceiptCategories],
  dataTypes: [...receiptDataTypes],
  storeSubcategories: {},
};

export const receiptConfigStore = createStore<ReceiptConfigStore>()(
  persist(
    (set) => ({
      ...defaultReceiptConfigState,
      addCategory: (categoryName) =>
        set((state) => ({
          categories: addUniqueName(state.categories, categoryName),
        })),
      removeCategory: (categoryName) =>
        set((state) => ({
          categories: removeName(state.categories, categoryName),
        })),
      renameCategory: (currentName, nextName) =>
        set((state) => {
          const normalizedCurrentName = normalizeName(currentName);
          const normalizedNextName = normalizeName(nextName);

          if (!normalizedCurrentName || !normalizedNextName) {
            return { categories: state.categories };
          }

          const nextNameExists = state.categories.some(
            (categoryName) =>
              categoryName.toLocaleLowerCase() ===
              normalizedNextName.toLocaleLowerCase(),
          );

          if (nextNameExists) {
            return { categories: state.categories };
          }

          return {
            categories: state.categories.map((categoryName) =>
              categoryName.toLocaleLowerCase() ===
              normalizedCurrentName.toLocaleLowerCase()
                ? normalizedNextName
                : categoryName,
            ),
          };
        }),
      resetCategories: () =>
        set({ categories: [...defaultReceiptCategories] }),
      addStoreSubcategory: (storeName, subcategoryName) =>
        set((state) => {
          const normalizedStoreName = normalizeName(storeName);

          if (!normalizedStoreName) {
            return { storeSubcategories: state.storeSubcategories };
          }

          const existingSubcategories =
            state.storeSubcategories[normalizedStoreName] ?? [];

          return {
            storeSubcategories: {
              ...state.storeSubcategories,
              [normalizedStoreName]: addUniqueName(
                existingSubcategories,
                subcategoryName,
              ),
            },
          };
        }),
      removeStoreSubcategory: (storeName, subcategoryName) =>
        set((state) => {
          const normalizedStoreName = normalizeName(storeName);
          const existingSubcategories =
            state.storeSubcategories[normalizedStoreName];

          if (!existingSubcategories) {
            return { storeSubcategories: state.storeSubcategories };
          }

          const nextSubcategories = removeName(
            existingSubcategories,
            subcategoryName,
          );
          const nextStoreSubcategories = { ...state.storeSubcategories };

          if (nextSubcategories.length === 0) {
            delete nextStoreSubcategories[normalizedStoreName];
          } else {
            nextStoreSubcategories[normalizedStoreName] = nextSubcategories;
          }

          return { storeSubcategories: nextStoreSubcategories };
        }),
      setStoreSubcategories: (storeName, subcategories) =>
        set((state) => {
          const normalizedStoreName = normalizeName(storeName);

          if (!normalizedStoreName) {
            return { storeSubcategories: state.storeSubcategories };
          }

          return {
            storeSubcategories: {
              ...state.storeSubcategories,
              [normalizedStoreName]: dedupeNames(subcategories),
            },
          };
        }),
      removeStore: (storeName) =>
        set((state) => {
          const normalizedStoreName = normalizeName(storeName);
          const nextStoreSubcategories = { ...state.storeSubcategories };

          delete nextStoreSubcategories[normalizedStoreName];

          return { storeSubcategories: nextStoreSubcategories };
        }),
      resetReceiptConfig: () => set({ ...defaultReceiptConfigState }),
    }),
    {
      name: "receipt-config",
      version: 1,
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...(persistedState as Partial<ReceiptConfigState>),
        dataTypes: [...receiptDataTypes],
      }),
    },
  ),
);

export const useReceiptConfigStore = <T>(
  selector: (state: ReceiptConfigStore) => T,
) => useStore(receiptConfigStore, selector);
