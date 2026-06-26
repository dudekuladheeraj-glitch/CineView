import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import { CollectionStore } from './CollectionStore';
const collectionStore = new CollectionStore();
const CollectionStoreContext = createContext(collectionStore);
export const CollectionProvider = ({ children }) => {
    return _jsx(CollectionStoreContext.Provider, { value: collectionStore, children: children });
};
export const useCollectionStore = () => useContext(CollectionStoreContext);
