import {
  GET_PRODUCT,
} from "../actions/actionTypes/productActions";

const productItems = [
  {
    id: 1,
    brandId: 1,
    name: "Don Jon férfi melegítő együttes 1",
    internalName: "don_jon_ferfi_1",
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
    internalName: "don_jon_gradiens_1",
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
    internalName: "don_jon_ferfi_2",
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
    internalName: "obey_noi_3_reszes",
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
    internalName: "don_jon_ferfi_3",
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
];

const initialState = {
  product: null,
};

const productReducer = (state = initialState, action) => { 
  console.log(productItems.find(item => item.id == action.id));
  if (action.type === GET_PRODUCT) {
    return {
      ...state,
      product: productItems.find(item => item.id == action.id)
    }
  } else {
    return state;
  }
};
export default productReducer;
