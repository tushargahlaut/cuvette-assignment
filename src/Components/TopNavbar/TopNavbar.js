import "./TopNavbar.css";
import profilepicture from "../../Assets/profilepicture.png";
const TopNavbar = () => {
    return ( 
        <div className="top__bar">
            <div className="logo">
            <svg width="120" height="30" viewBox="0 0 121 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5231 28.714C8.47952 28.714 6.67991 28.22 5.09381 27.2011C3.50772 26.1823 2.28764 24.8237 1.37258 23.1874C0.457528 21.5201 0 19.6676 0 17.6607C0 15.6538 0.427026 13.8322 1.31158 12.2266C2.19614 10.5902 3.41621 9.26261 5.00231 8.27461C6.58841 7.2866 8.38802 6.76172 10.4621 6.76172C12.4143 6.76172 14.1224 7.22485 15.5865 8.15111C16.8065 8.86124 17.7521 9.81837 18.4841 10.9608C18.7587 11.393 18.5451 11.9488 18.0876 12.1031L16.8675 12.5045C16.532 12.5971 16.1965 12.4736 16.0135 12.1649C15.4645 11.3313 14.7324 10.652 13.8174 10.158C12.7803 9.54049 11.6212 9.23174 10.3401 9.23174C8.93705 9.23174 7.62547 9.60224 6.4969 10.3432C5.36833 11.0843 4.45327 12.1031 3.78223 13.3999C3.11119 14.6658 2.77567 16.1169 2.77567 17.6916C2.77567 19.2971 3.11119 20.7482 3.81274 22.045C4.51428 23.3417 5.42934 24.3915 6.58841 25.1634C7.74748 25.9352 8.99805 26.3058 10.4011 26.3058C11.3162 26.3058 12.2008 26.1514 13.0548 25.8117C13.9089 25.4721 14.6409 25.0399 15.2509 24.515C15.678 24.1136 16.0135 23.6814 16.2575 23.2491C16.41 22.9404 16.776 22.786 17.1116 22.8786L18.3316 23.2491C18.7892 23.3726 19.0027 23.8975 18.7892 24.3297C18.4231 25.009 17.9351 25.6265 17.3251 26.2131C16.471 26.985 15.4645 27.6334 14.2749 28.0656C13.1158 28.4979 11.8347 28.714 10.5231 28.714Z" fill="#222F3E"/>
            <path d="M45.5088 27.8495L37.6393 8.21288C37.4258 7.71887 37.7918 7.16312 38.3409 7.16312H39.5609C39.866 7.16312 40.1405 7.34837 40.2625 7.65712L46.7594 24.3915C46.9119 24.8238 47.5219 24.8238 47.6744 24.3915L54.2018 7.65712C54.3238 7.37924 54.5984 7.16312 54.9034 7.16312H55.971C56.4895 7.16312 56.8555 7.71887 56.6725 8.21288L48.803 27.8495C48.681 28.1274 48.4065 28.3127 48.1015 28.3127H46.1798C45.8748 28.3435 45.6003 28.1583 45.5088 27.8495Z" fill="#222F3E"/>
            <path d="M66.5551 28.714C64.542 28.714 62.7424 28.22 61.1868 27.2011C59.6007 26.2131 58.3501 24.8546 57.4655 23.1874C56.5505 21.5201 56.093 19.6676 56.093 17.6607C56.093 15.6847 56.52 13.863 57.4045 12.2266C58.3196 10.5902 59.5702 9.26261 61.1258 8.27461C62.7119 7.2866 64.481 6.76172 66.4941 6.76172C68.5682 6.76172 70.3678 7.25572 71.9234 8.27461C73.479 9.26261 74.6686 10.5903 75.5227 12.2575C76.4072 13.8939 76.8342 15.6538 76.8342 17.6298C76.8342 17.7533 76.8342 17.8768 76.8342 17.9694C76.8342 18.3708 76.4987 18.7104 76.0717 18.7104H59.4482C59.1431 18.7104 58.8991 18.9883 58.9601 19.2662C59.1431 20.563 59.5397 21.7362 60.1802 22.7551C60.9123 23.9284 61.8273 24.8546 62.9559 25.5647C64.0845 26.244 65.3045 26.5836 66.6466 26.5836C68.0192 26.5836 69.3003 26.244 70.4899 25.5339C71.5269 24.9472 72.2895 24.1754 72.808 23.2491C72.9605 22.9712 73.3265 22.8477 73.6315 22.9095L74.5161 23.1565C74.9736 23.28 75.2176 23.8357 74.9736 24.268C74.5771 24.9472 74.0586 25.5956 73.3875 26.1514C72.503 26.9233 71.4659 27.5716 70.3068 28.0039C69.2088 28.4979 67.9277 28.714 66.5551 28.714ZM59.4177 16.7344H74.3026C74.1806 15.2215 73.7841 13.8939 73.052 12.7206C72.32 11.5165 71.4049 10.6211 70.2763 9.97274C69.1478 9.29349 67.8972 8.95386 66.5551 8.95386C65.1825 8.95386 63.9624 9.29349 62.8339 9.97274C61.7053 10.6211 60.7902 11.5474 60.0582 12.7206C59.4482 13.7395 59.0516 14.8819 58.8991 16.1787C58.8686 16.4565 59.1126 16.7344 59.4177 16.7344Z" fill="#222F3E"/>
            <path d="M88.6995 26.6145C88.8215 26.985 88.6385 27.3863 88.2725 27.5407C87.9674 27.6642 87.6014 27.8186 87.1439 28.0039C86.2898 28.3435 85.3138 28.5287 84.1852 28.5287C82.9956 28.5287 81.9891 28.1891 81.1045 27.5099C80.22 26.8306 79.7929 25.8117 79.7929 24.4532V9.84921C79.7929 9.57133 79.5794 9.3552 79.3049 9.3552H77.6578C77.2308 9.3552 76.8953 9.01557 76.8953 8.58332V7.90407C76.8953 7.47181 77.2308 7.13218 77.6578 7.13218H79.3049C79.5794 7.13218 79.7929 6.91606 79.7929 6.63818V0.771881C79.7929 0.339628 80.1285 0 80.5555 0H81.7756C82.2026 0 82.5381 0.339628 82.5381 0.771881V6.66905C82.5381 6.94693 82.7516 7.16306 83.0261 7.16306H86.5949C87.0219 7.16306 87.3574 7.50269 87.3574 7.93494V8.6142C87.3574 9.04645 87.0219 9.38608 86.5949 9.38608H83.0261C82.7516 9.38608 82.5381 9.6022 82.5381 9.88008V23.7431C82.5991 24.515 82.8736 25.1016 83.3312 25.503C83.8497 25.8426 84.4292 26.0278 85.0698 26.0278C85.8323 26.0278 86.4729 25.9043 87.0829 25.6573C87.2354 25.5956 87.3879 25.5338 87.5099 25.4721C87.9064 25.2868 88.3945 25.503 88.5165 25.9352L88.6995 26.6145Z" fill="#222F3E"/>
            <path d="M100.138 26.6145C100.26 26.985 100.077 27.3863 99.7106 27.5407C99.4056 27.6642 99.0396 27.8186 98.5821 28.0039C97.728 28.3435 96.7519 28.5287 95.6234 28.5287C94.4338 28.5287 93.4272 28.1891 92.5427 27.5099C91.6581 26.8306 91.2311 25.8117 91.2311 24.4532V9.84921C91.2311 9.57133 91.0176 9.3552 90.7431 9.3552H89.0655C88.6384 9.3552 88.3029 9.01557 88.3029 8.58332V7.90407C88.3029 7.47181 88.6384 7.13218 89.0655 7.13218H90.7126C90.9871 7.13218 91.2006 6.91606 91.2006 6.63818V0.771881C91.2006 0.339628 91.5361 0 91.9631 0H93.1832C93.6102 0 93.9458 0.339628 93.9458 0.771881V6.66905C93.9458 6.94693 94.1593 7.16306 94.4338 7.16306H98.0025C98.4295 7.16306 98.7651 7.50269 98.7651 7.93494V8.6142C98.7651 9.04645 98.4295 9.38608 98.0025 9.38608H94.4338C94.1593 9.38608 93.9458 9.6022 93.9458 9.88008V23.7431C94.0068 24.515 94.2813 25.1016 94.7388 25.503C95.2573 25.8426 95.8369 26.0278 96.4774 26.0278C97.24 26.0278 97.8805 25.9043 98.4905 25.6573C98.6431 25.5956 98.7956 25.5338 98.9176 25.4721C99.3141 25.2868 99.8021 25.503 99.9241 25.9352L100.138 26.6145Z" fill="#222F3E"/>
            <path d="M109.807 28.5905C107.794 28.5905 105.994 28.0965 104.438 27.0776C102.852 26.0896 101.602 24.7311 100.717 23.0638C99.8022 21.3965 99.3447 19.544 99.3447 17.5371C99.3447 15.5611 99.7717 13.7395 100.656 12.1031C101.571 10.4667 102.822 9.13905 104.377 8.15104C105.964 7.16303 107.733 6.63815 109.746 6.63815C111.82 6.63815 113.62 7.13216 115.175 8.15104C116.731 9.13905 117.92 10.4667 118.774 12.1339C119.659 13.7703 120.086 15.5302 120.086 17.5062C120.086 17.6297 120.086 17.7532 120.086 17.8459C120.086 18.2472 119.75 18.5869 119.323 18.5869H102.7C102.395 18.5869 102.151 18.8648 102.212 19.1426C102.395 20.4394 102.791 21.5818 103.432 22.6315C104.164 23.8048 105.079 24.7311 106.208 25.4412C107.336 26.1204 108.556 26.4601 109.898 26.4601C111.271 26.4601 112.552 26.1204 113.742 25.4103C114.779 24.8237 115.541 24.0518 116.06 23.1255C116.212 22.8477 116.578 22.7242 116.883 22.7859L117.768 23.0329C118.225 23.1564 118.469 23.7122 118.225 24.1444C117.829 24.8237 117.31 25.4721 116.639 26.0278C115.755 26.7997 114.718 27.4481 113.559 27.8803C112.43 28.3743 111.149 28.5905 109.807 28.5905ZM102.639 16.6109H116.975C117.28 16.6109 117.524 16.333 117.463 16.0551C117.31 14.7583 116.914 13.616 116.273 12.5971C115.541 11.3929 114.626 10.4976 113.498 9.84918C112.369 9.16992 111.118 8.8303 109.776 8.8303C108.404 8.8303 107.184 9.16992 106.055 9.84918C104.927 10.4976 104.011 11.4238 103.279 12.5971C102.669 13.616 102.273 14.7583 102.12 16.0551C102.12 16.3639 102.364 16.6109 102.639 16.6109Z" fill="#222F3E"/>
            <path d="M35.6872 7.00866L37.8224 24.6384C38.0359 26.3057 36.8463 27.8186 35.1992 28.0347L25.5606 29.2388C23.9135 29.455 22.4189 28.2508 22.2054 26.5836L20.0398 8.79942C20.0093 8.49067 20.2228 8.18192 20.5583 8.15104L22.1139 7.96579C22.4189 7.93491 22.7239 8.15104 22.7544 8.49067L24.7675 25.0089C24.8591 25.8426 25.6216 26.4292 26.4452 26.3366L33.6741 25.4412C34.4976 25.3486 35.0772 24.5767 34.9857 23.743L32.9726 7.16303C32.9421 6.85428 33.1556 6.54553 33.4911 6.51465L34.8942 6.3294C35.2602 6.26765 35.6567 6.5764 35.6872 7.00866Z" fill="#ACBAC9"/>
            <path d="M32.5151 23.8048L27.1772 24.4532C26.8112 24.5149 26.4452 24.237 26.4147 23.8357L25.7436 18.3708L25.2861 14.5422C25.2556 14.3878 25.4081 14.2952 25.5301 14.3261L26.3232 14.5731C27.9093 15.0362 29.5869 15.0053 31.1425 14.4187L31.783 14.1717C31.905 14.1408 32.027 14.2026 32.027 14.3261L33.0641 23.002C33.1556 23.4034 32.8811 23.7739 32.5151 23.8048Z" fill="#0B66EF"/>
            </svg>
            </div>
            <div className="topbar__profile">
                <img className="img" src={profilepicture} alt="Profile"></img>
                <div className="username">
                <p>Siddharth Jain</p>
                </div>
            </div>
            <div className="horizontal__divide">
            </div>
        </div>
     );
}
 
export default TopNavbar;