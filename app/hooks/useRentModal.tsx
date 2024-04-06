import {create} from 'zustand'

// this is to check if the modals is open or close.
interface RentModalStore{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

const useRentModal = create<RentModalStore>((set)=>({
    isOpen:false,
    onOpen: ()=> set({isOpen:true}),
    onClose: ()=> set({isOpen:false})
}))

export default useRentModal;