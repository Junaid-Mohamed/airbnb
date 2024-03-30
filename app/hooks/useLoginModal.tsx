import {create} from 'zustand'

// this is to check if the modals is open or close.
interface LoginModalStore{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

const useLoginModal = create<LoginModalStore>((set)=>({
    isOpen:false,
    onOpen: ()=> set({isOpen:true}),
    onClose: ()=> set({isOpen:false})
}))

export default useLoginModal;