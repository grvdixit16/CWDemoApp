import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


export function notify(type,message){
switch(type){
case "SUCCESS":
    return  toast.success(message,{position: toast.POSITION.BOTTOM_RIGHT});
case "ERROR" :
    return  toast.error(message,{position: toast.POSITION.BOTTOM_RIGHT});
   default :
    return  toast.warning(message,{position: toast.POSITION.BOTTOM_RIGHT});
}
}