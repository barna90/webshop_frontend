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
      name: "Obey noi gradiens melegito egyuttes",
      oldPrice: 8900,
      newPrice: 6500,
      imageUrl: "product/best-5-1.jpg",
      imageUrlAlt: "product/best-5-2.jpg",
      sizes: "S, M, L"
    },
    {
      id: 2,
      name: "Don Jon noi vastag melegito egyuttes",
      oldPrice: 7500,
      newPrice: 5500,
      imageUrl: "product/best-5-1.jpg",
      imageUrlAlt: "product/best-5-2.jpg",
      sizes: "S, M, L"
    },
    {
      id: 3,
      name: "Obey noi gradiens melegito egyuttes",
      newPrice: 6500,
      imageUrl: "product/best-5-1.jpg",
      imageUrlAlt: "product/best-5-2.jpg",
      sizes: "S, M, L"
    },
    {
      id: 4,
      name: "Don Jon noi vastag melegito egyuttes",
      oldPrice: 7500,
      newPrice: 5500,
      imageUrl: "product/best-5-1.jpg",
      imageUrlAlt: "product/best-5-2.jpg",
      sizes: "S, M, L"
    },
    {
      id: 5,
      name: "Obey noi gradiens melegito egyuttes",
      oldPrice: 8900,
      newPrice: 6500,
      imageUrl: "product/best-5-1.jpg",
      imageUrlAlt: "product/best-5-2.jpg",
      sizes: "S, M, L"
    },
    {
      id: 6,
      name: "Don Jon noi vastag melegito egyuttes",
      oldPrice: 7500,
      newPrice: 5500,
      imageUrl: "product/best-5-1.jpg",
      imageUrlAlt: "product/best-5-2.jpg",
      sizes: "S, M, L"
    },
    {
      id: 7,
      name: "Obey noi gradiens melegito egyuttes",
      oldPrice: 8900,
      newPrice: 6500,
      imageUrl: "product/best-5-1.jpg",
      imageUrlAlt: "product/best-5-2.jpg",
      sizes: "S, M, L"
    },
    {
      id: 8,
      name: "Don Jon noi vastag melegito egyuttes",
      oldPrice: 7500,
      newPrice: 5500,
      imageUrl: "product/best-5-1.jpg",
      imageUrlAlt: "product/best-5-2.jpg",
      sizes: "S, M, L"
    }
  ],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
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
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
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
