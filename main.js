// Select all required elements
const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
title = toast.querySelector("span"),
subTitle = toast.querySelector("p"),
wifiIcon = toast.querySelector(".icon"),
closeIcon = toast.querySelector(".close-icon");

window.onload = ()=>{
    function ajax(){
        let xhr = new XMLHttpRequest(); //creating new XML object
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);       //send get request on this URL
        xhr.onload = ()=>{        //once ajax loaded
            // if ajax status is equal to 200 or less than 300 user is getting data
            // or if response is 200 means user is online
            if(xhr.status == 200 && xhr.status < 300){
                toast.classList.remove("offline");
                title.innerText = "You're online now";
                subTitle.innerText = "Hurray! Internet is connected.";
                wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';
                closeIcon.onclick = ()=>{            
                    wrapper.classList.add("hide");           //hide toast notification onclick
                }
                setTimeout(()=>{                                   //hide notification auto under 5seconds
                    wrapper.classList.add("hide");            
                }, 5000);
            }else{
                offline();                         
            }                   //calling offline function if status is not equal to 200 or not  less than 300
        }
        xhr.onerror = ()=>{
            offline();                       //calling offline function if the passed url is not correct
        }                        
        xhr.send();                              //sending get request to the passed url  
    }    
    
     

    function offline(){                 //functions for offline
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "You're offline now";
        subTitle.innerText = "Opps! Internet is disconnected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
    }

    setInterval(()=>{                 //this setInterval function call ajax frequently after 100ms
        ajax();
    }, 100);
}




