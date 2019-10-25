import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "../actions/actionTypes/cartActions";

const initState = {
  productItems: [
    {
      id: 1,
      brandId: 1,
      name: "Don Jon férfi melegítő együttes 1",
      oldPrice: 8900,
      price: 6900,
      inStock: null,
      image: {
        id: 15,
        fileId: "8ad5cb314f2946b2b06ec70575c9614f",
        fileName: null,
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Piros", "Kek"]
      },
      sizes: ["S", "M", "L"],
      colors: ["fekete", "sarga", "kek"],
      imageUrl: "product/best-5-1.jpg",
      imageUrlAlt: "product/best-5-2.jpg"
    },
    {
      id: 2,
      brandId: 2,
      name: "Obey noi gradiens melegítő együttes 1",
      oldPrice: 7900,
      price: 6500,
      inStock: null,
      image: {
        id: 15,
        fileId: "8ad5cb314f2946b2b06ec70575c9614f",
        fileName: null,
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Piros", "Kek"]
      },
      sizes: ["S", "M", "L"],
      colors: ["fekete", "sarga", "kek"],
      imageUrl: "product/best-5-1.jpg",
      imageUrlAlt: "product/best-5-2.jpg"
    },
    {
      id: 3,
      brandId: 1,
      name: "Don Jon férfi melegítő együttes 2",
      oldPrice: 8500,
      price: 5000,
      inStock: null,
      image: {
        id: 15,
        fileId: "8ad5cb314f2946b2b06ec70575c9614f",
        fileName: null,
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Piros", "Kek"]
      },
      sizes: ["S", "M", "L"],
      colors: ["fekete", "sarga", "kek"],
      imageUrl: "product/best-5-1.jpg",
      imageUrlAlt: "product/best-5-2.jpg"
    },
    {
      id: 4,
      brandId: 2,
      name: "Obey noi 3 reszes melegítő együttes",
      oldPrice: 6900,
      price: 5900,
      inStock: null,
      image: {
        id: 15,
        fileId: "8ad5cb314f2946b2b06ec70575c9614f",
        fileName: null,
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Piros", "Kek"]
      },
      sizes: ["S", "M", "L"],
      colors: ["fekete", "sarga", "kek"],
      imageUrl: "product/best-5-1.jpg",
      imageUrlAlt: "product/best-5-2.jpg"
    },
    {
      id: 5,
      brandId: 1,
      name: "Don Jon férfi melegítő együttes 3",
      oldPrice: 7500,
      price: 5500,
      inStock: null,
      image: {
        id: 15,
        fileId: "8ad5cb314f2946b2b06ec70575c9614f",
        fileName: null,
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Piros", "Kek"]
      },
      sizes: ["S", "M", "L"],
      colors: ["fekete", "sarga", "kek"],
      imageUrl: "product/best-5-1.jpg",
      imageUrlAlt: "product/best-5-2.jpg"
    }
  ],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.productItems.find(item => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.productItems.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.productItems.find(item => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6
    };
  } else {
    return state;
  }
};
export default cartReducer;
