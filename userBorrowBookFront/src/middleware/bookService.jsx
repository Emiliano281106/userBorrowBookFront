// cretae the literal object with the independent axios functions

//  create the context, named it and create context

const BookServiceContext = createContext(BookService//this is the literal object previously created)

// create custom hook

export const useBookService = () => {

    useContext(BookServiceContext);
};

// create provider name it, add value, wrap it, do not forget the children

export const BookServiceProvider= ({children}) => (
    <BookServiceContext.Provider value = {BookService}>
        {children}
    </BookServiceContext.Provider>
);