const conponent = {};
conponent.registerPage = ` 


    <form action="" id="registerForm">

        <div class="cha">
            <div class="Zalo">Zalo</div>
        <div style="display:flex ;width: 100%;justify-content: center;">
            <div style="width:22% ;margin-right:-16px ;">
                <input id="ho"  name="firstName"  id="tk" type="text" placeholder="Họ..." >
            </div>
            <div style="margin:0px 10px;margin-top:10px;margin-left:25px">và</div>
            <div style="width:40%;margin-right: 25px; " >
                <input style="max-width:70% " name="lastName"  id="tk" type="text" placeholder="Tên..." ><br>
               <em> <span  style="color:red;top:160px;left:80px" id="spantk"></span></em>  
            </div> 
        </div>
            <div >
                <i  style="cursor:pointer ;top: 195px;" class="fa-solid fa-envelope"></i>
                <input name="email"  id="email"  type="text" placeholder="email..."><br>
                <em><span  style="color:red;top:228px;left:80px" id="spanemail"></span></em>
            </div>
            <div >
                <i  style="cursor:pointer ;top: 262px;" id="icon" onclick="showPassword()" class="fa-solid fa-eye"></i>     
                <input name="password"  id="mk" type="password" placeholder="mật khẩu"><br>
                <em><span  style="color:red;top:298px;left:80px"  id="spanmk"></span></em>
                </div>
              <div >
                <i  style="cursor:pointer ;top: 328px;" id="iconClose" onclick="showConfirmPassword()" class="fa-solid fa-eye"></i>
                <input name="confirmPassword"   id="remk" type="password" placeholder="xác nhận mật khẩu"><br>
               <em><span  style="color:red;top:350px;left:80px" id="spanremk"></span> </em>
               </div> 
            
           
               
            
            <div id="btnsuccess"> 
                <button style="border: 1px solid gray;height:25px;width:100px;cursor: pointer;"  type="submit" id="success" onclick="register()" > Đăng ký </button>
                <p >Nếu bạn đã có tài khoản : <a id="redirectLogin" style="text-decoration:none ;cursor: pointer;color: blue "  >  Đăng nhập</a></p>
            </div>
           
        </div>
        </div> 
        </form>


`;
conponent.loginPage = ` 

<div id="registerForm">
<form action="" id="loginForm">

<div class="cha">
<div class="Zalo">Zalo</div>
<div style="display:flex ;width: 100%;justify-content: center;">
 
</div>
    <div >
        <i  style="cursor:pointer ;top: 195px;" class="fa-solid fa-envelope"></i>
        <input name="email"  id="email"  type="text" placeholder="email..."><br>
        <em><span  style="color:red;top:228px;left:80px" id="spanemail"></span></em>
    </div>
    <div >
        <i  style="cursor:pointer ;top: 262px;" id="icon" onclick="showPassword()" class="fa-solid fa-eye"></i>     
        <input name="password"  id="mk" type="password" placeholder="mật khẩu"><br>
        <em><span  style="color:red;top:294px;left:80px"  id="spanmk"></span></em>
        </div>

    <div id="btnsuccess"> 
        <button style="border: 1px solid gray;cursor: pointer;height:25px;width:100px;" type="submit" id="success" > Đăng nhập </button>
        <p >Nếu bạn chưa có tài khoản : <a id="outregister" style="text-decoration:none ;cursor: pointer;color: blue "  >  Đăng ký</a></p>
    </div>
   
</div>
</div> 
</form>
</div>

`;
conponent.wellcomePage = `

<div id="webchat" >
        <div id="modal" style="display:none;">
        <div class="modal__overlay" onclick="offTableInfo()"></div>
        
        <div class="modal__body">
          <div class="modal__inner">

           <div id="headAdd">
           <div style="margin-left: 20px;margin-top: 15px;font-weight: 500;font-size:16px; " >Thêm bạn</div>
           <div id="headAddi" onclick="offTableInfo()"><i class="fa-solid fa-x"></i></div>
           </div>
            
            <div><input id="blueborder1" style="border-bottom: 1px solid blue;padding-left:10px" type="email" oninput="blueborder1()" placeholder="Tên hoặc email..."></div><br>
            <div id="maybeyouknow" style="diplay:"><i class="fa-solid fa-user-astronaut"></i> Có thể bạn quen</div>
            <div id="listRecommet">



           </div>
          </div>
        </div>
        </div>
        <div id="divthongtin">
          <div id="taikhoan" style="display: none;">
            <div id="namedn"></div>
            <hr style="margin: 0; opacity:0.4 ;">
            <div style="padding: 5px;font-size: 15px;">Hồ sơ của bạn</div>
            <div style="padding: 5px;font-size: 15px;">Cài đặt</div>
            <hr style="margin: 0; opacity:0.4 ;">
            <div style="margin:5px 0 ;padding:5px 5px;font-size: 15px;" id="tendn3" onclick="signout()">Đăng xuất</div>
          </div>
          <div id="thongtintren" >
            <div id="idName" class="ok avatar" onclick="avatar()"   style="width:48px;height:48px;margin-left: 8px;margin-bottom: 20px;"></div>
            <div onclick="okchat()" class="ok chat" ><i class="fa-solid fa-comment-dots"></i></div>
            <div class="ok danhba" onclick="clickevw()"><i class="fa-regular fa-address-book"></i></div>
            <div class="ok nhiemvu" onclick="clickevw()"><i class="fa-solid fa-square-check"></i></div>
          </div>
          
          <div id="thongtinduoi" onclick="clickevw()">
            <div class="ok dammay"><i class="fa-solid fa-cloud"></i></div>
            <div class="ok capsach"><i class="fa-solid fa-briefcase"></i></div>
            <div class="ok caidat"><i class="fa-solid fa-gear"></i></div>
          </div>
        
        </div>
        
        
        
        
        <div id="divlistban" onclick="clickevw()">
        
        <div id="seachFriends">
          <div id="seacH"><input id="blueborder" type="text" placeholder="Tìm kiếm" oninput="blueborder()" ><i class="fa-solid fa-magnifying-glass"></i></div>
          <div id="addFriend" onclick="tableInfoSize()" ><i class="fa-solid fa-user-plus"></i></div>
        </div>
        
        <div id="tatca" >Tất cả</div>
        
        <div id="listChating">
        
           


        </div>
        
        </div>
        
        
        
        <div id="table" style="display:none">
          <div id="chaomung">Chào mừng đến với <strong style="font-weight: 500;">Zalo PC!</strong></div>
          <div style="font-size:14px;margin-top:15px">Khám phá những tiện ích hỗ trợ làm việc và trò chuyện cùng<br><div style="margin-left: 10px;">người thân, bạn bè được tối ưu hóa cho máy tính của bạn</div></div>
          <div><img src="./imge/quick-message-onboard.3950179c175f636e91e3169b65d1b3e2.png" alt=""></div>
          <div id="chuxanh">Nhắn tin nhiều hơn, soạn thảo ít hơn</div>
          <div style="font-size:14px;margin-top:15px;text-align:center">Sử dụng tin nhắn nhanh để lưu sẵn các tin thường dùng và gửi nhanh trong hội thoại bất kỳ.</div>
        </div>
        
        <div id="table1" style="display:block" onclick="clickevw()">
          <div id="title" style="display: flex; justify-content: space-between"></div>
          <div id="spaceChat"  class="list-content"></div>

        
        
          <div  id="valueInputForm">

            
              <input
                onclick="tranform()"
                id="infoInput"
                name="valueInput"
                type="text"
                placeholder="Nhập tin nhắn"
              />
            
        
            <span id="plubss" style="border-top: 1px solid #fff ;"></span>
            <span><i class="fa-regular fa-image"></i></span>
             <span id="icon111" style="display:block" onclick="tableIcon()" ><i class="fa-solid fa-face-smile"></i></span>
             <span id="icon1111" style="display:none" onclick="tableIcon1()" ><i class="fa-solid fa-face-smile"></i></span>
            <span
            style="padding-right: 10px;"
                onclick="btnChat()"
                id="btnSend"
                class="btnSend"
                
                ><i class="fa-solid fa-paper-plane"></i></span>
          </div>
        </div>
        
        </div>


`;
