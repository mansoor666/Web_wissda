import React, {useEffect,useState} from 'react';
import { useWindowScroll } from 'react-use';


function Scroll_Arrow() {

    const { y:pageYoffset } = useWindowScroll();
     const [visible, setVisiblity] = useState(false);

     useEffect(()=>{
         if(pageYoffset > 400){
             setVisiblity(true);
         }
         else{
             setVisiblity(false)
         }
     },[pageYoffset]);

     if(!visible){
         return false;
     }

     const Scroll_Arrow = () =>window.scrollTo({top: 0, behavior: "smooth"});
    return (
        <>
            {/* <div class="icon">
            <i class="bi bi-arrow-up-short"></i>
            <div class="label">arrow-up-short</div>
            </div> */}
        </>
    )
}

export default Scroll_Arrow
