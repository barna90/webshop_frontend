import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "../actions/actionTypes/cartActions";

const productItems = [
  {
    id: 1,
    brandId: 1,
    name: "Női virágos melegítő együttes",
    internalName: "noi_viragos",
    oldPrice: 8900,
    price: 6900,
    inStock: null,
    image: [
      {
        id: 15,
        fileId: "IMG_20190915_131534",
        fileName: "IMG_20190915_131534.jpg",
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
        tags: ["Sárga"]
      },
      {
        id: 15,
        fileId: "IMG_20190915_131903",
        fileName: "IMG_20190915_131903.jpg",
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
        tags: ["Rózsaszín"]
      }
    ],
    sizes: { Sárga: ["M", "L", "XL", "XXL"], Rózsaszín: ["S", "M"] },
    colors: ["Sárga", "Rózsaszín"]
  },
  {
    id: 2,
    brandId: 2,
    name: "Obey noi gradiens melegítő együttes 1",
    internalName: "don_jon_gradiens_1",
    oldPrice: 7900,
    price: 6500,
    inStock: null,
    image: [
      {
        id: 15,
        fileId: "IMG_20190915_131534",
        fileName: "IMG_20190915_131534.jpg",
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
        tags: ["Sárga"]
      },
      {
        id: 15,
        fileId: "IMG_20190915_131903",
        fileName: "IMG_20190915_131903.jpg",
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
        tags: ["Rózsaszín"]
      }
    ],
    sizes: { Sárga: ["M", "L", "XL", "XXL"], Rózsaszín: ["S", "M"] },
    colors: ["Sárga", "Rózsaszín"]
  },
  {
    id: 3,
    brandId: 1,
    name: "Don Jon férfi melegítő együttes 2",
    internalName: "don_jon_ferfi_2",
    oldPrice: 8500,
    price: 5000,
    inStock: null,
    image: [
      {
        id: 15,
        fileId: "IMG_20190915_131534",
        fileName: "IMG_20190915_131534.jpg",
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
        tags: ["Sárga"]
      },
      {
        id: 15,
        fileId: "IMG_20190915_131903",
        fileName: "IMG_20190915_131903.jpg",
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
        tags: ["Rózsaszín"]
      }
    ],
    sizes: { Sárga: ["M", "L", "XL", "XXL"], Rózsaszín: ["S", "M"] },
    colors: ["Sárga", "Rózsaszín"]
  },
  {
    id: 4,
    brandId: 2,
    name: "Obey noi 3 reszes melegítő együttes",
    internalName: "obey_noi_3_reszes",
    oldPrice: 6900,
    price: 5900,
    inStock: null,
    image: [
      {
        id: 15,
        fileId: "IMG_20190915_131534",
        fileName: "IMG_20190915_131534.jpg",
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
        tags: ["Sárga"]
      },
      {
        id: 15,
        fileId: "IMG_20190915_131903",
        fileName: "IMG_20190915_131903.jpg",
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
        tags: ["Rózsaszín"]
      }
    ],
    sizes: { Sárga: ["M", "L", "XL", "XXL"], Rózsaszín: ["S", "M"] },
    colors: ["Sárga", "Rózsaszín"]
  },
  {
    id: 5,
    brandId: 1,
    name: "Don Jon férfi melegítő együttes 3",
    internalName: "don_jon_ferfi_3",
    oldPrice: 7500,
    price: 5500,
    inStock: null,
    image: [
      {
        id: 15,
        fileId: "IMG_20190915_131534",
        fileName: "IMG_20190915_131534.jpg",
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
        tags: ["Sárga"]
      },
      {
        id: 15,
        fileId: "IMG_20190915_131903",
        fileName: "IMG_20190915_13190.jpg",
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
        tags: ["Rózsaszín"]
      }
    ],
    sizes: { Sárga: ["M", "L", "XL", "XXL"], Rózsaszín: ["S", "M"] },
    colors: ["Sárga", "Rózsaszín"]
  }
];

const initState = {
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = productItems.find(item => action.product.id === item.id);
    //check if the action id exists in the addedItems
    // ilyen lehet? elvileg igen, nem lesz kulon entitas minden meret es szin
    let existed_item = state.addedItems.find(
      item =>
        action.product.id === item.id && action.variationId === item.variationId
    );
    if (!existed_item) {
      addedItem = action.product;
      addedItem.selectedColor = action.selectedColor;
      addedItem.selectedSize = action.selectedSize;
      addedItem.variationId = action.variationId;
      addedItem.coverImageFileName = action.product.media.find(image =>
        image.tags.includes(action.selectedColor)
      ).fileName;
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
    let itemToRemove = state.addedItems.find(
      item => action.id === item.id && action.variationId === item.variationId
    );
    let new_items = state.addedItems.filter(
      item => action.id !== item.id || action.variationId !== item.variationId
    );

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = productItems.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = productItems.find(item => item.id === action.id);
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
