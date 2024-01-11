import { StyleProp, TextStyle,FlatList } from "react-native";

export interface LoginComponentProps {
  email: string;
  password: string;
  setEmail: (params: string) => void;
  setPassword: (params: string) => void;
  onNavigate: (params: string) => void;
  onLogin: () => void;
}

export interface CustomButtonProps {
  tx: string;
  onPress: () => void;
  color?: string;
}
export type CustomTextType = {
  //sadece type alır
  tx: string;
  //undefined de olabilir
  style?: StyleProp<TextStyle>;
};

export type ChildrenProps = {
  children: any;
};

export type InputProps = {
  secureTextEntry?: boolean;
  value?: string | number;
  setValue: (params?: string | number) => void;
  placeHolder: string;
};

export type ForgotPasswordProps = {
  email: string;
  setEmail: (params: string) => void;
};
export interface RegisterProps {
  email: string;
  setEmail: (params: string) => void;
  password: string;
  setPassword: (params: string) => void;
  conPassword: string;
  setConPassword: (params: string) => void;
  name: string;
  setName: (params: string) => void;
  //Register componentte başlangıç değeri belli olmadığı
  //için ? işareti kondu
  phone?: number;
  setPhone: (params: number) => void;
  isVisible: boolean;
  // setIsVisible:(params:boolean)=>void;
  isCheck: boolean;
  // setIsCheck:(params:boolean)=>void

  onModal: () => void;
  setIsVisible: (params: boolean) => void;
}

export interface StoreType {
  isLogin: boolean;
  setIsLogin: (params: boolean) => void;
  isLoading: boolean;
  setIsLoading: (params: boolean) => void;
}

export interface ProfileProps {
  onLogOut: () => void;
}

export interface DashboardType {
  storiesRef: FlatList;
  onLeft: () => void;
  onRight: () => void;
}
export type SearchProps = {
  placeholder: string;
  value: string;
  onChangeText: (params: string) => void;
};


export type EducationListProps={
    onSearch:(params:string)=>void;
    searchText:string;
    data:any,
    onDetail:()=>void;
}

export type EventProps={


  searchText:string;
  onSearch:(params:string)=>void;
  data:any;
  onDetail:()=>void;
}


export type EmptyProps={

  text:string;
}
export type EducationDetailProps={
  isVisibleDesc:boolean,
  setIsVisibleDesc:(params:boolean)=>void;

  
}
export type DetilSeeButtonProps={
label:string;
onPress:()=>void;
}