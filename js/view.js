const view = {};
var dataUsername = "";
view.dataUser = (dataUser) => {
  dataUsername = dataUser;
};
view.setScreenActive = (screenName) => {
  switch (screenName) {
    case `registerPage`:
      document.getElementById("app").innerHTML = conponent.registerPage;

      let registerForm = document.getElementById("registerForm");
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let checkIdName = {
          idName: {
            Name:
              registerForm.firstName.value.charAt(0) +
              registerForm.lastName.value.charAt(0),
            email: registerForm.email.value,
            username: `${registerForm.firstName.value} ${registerForm.lastName.value}`,
          },
        };

        const data = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          username: `${registerForm.firstName.value} ${registerForm.lastName.value}`,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        };

        controller.register(data, checkIdName);
      });

      view.setErrorMessage = (id, content) => {
        document.getElementById(id).innerText = content;
      };
      let redirectLogin = document.getElementById("redirectLogin");
      redirectLogin.addEventListener("click", () => {
        view.setScreenActive("loginPage");
      });
      break;
    case "loginPage":
      document.getElementById("app").innerHTML = conponent.loginPage;
      let loginForm = document.getElementById("loginForm");
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        };
        controller.login(data);
      });
      view.setErrorMessage = (id, content) => {
        document.getElementById(id).innerText = content;
      };
      let redirectRegister1 = document.getElementById("outregister");
      redirectRegister1.addEventListener("click", () => {
        view.setScreenActive("registerPage");
      });
      break;
    case "wellcomePage":

      document.getElementById("app").innerHTML = conponent.wellcomePage;

      model.getChat();
      model.getIdName();
      model.rederListFriend();


        

      let out = document.getElementById("tendn3");
      out.addEventListener("click", () => {
        auth.signOut();
      });

      break;

    default:
      let app1 = document.getElementById("app");
      app1.innerHTML = component.errorPage;
      break;
  }
};
view.renderList = (listChat) => {


  let result = "";
  for (let i = 0; i < listChat.length; i++) {
    if (listChat[i].message.owner == firebase.auth().currentUser.email) {
      result += `
      <div class="ok" >
      <div class="contentMeCha">
      <div class="time">${listChat[i].message.time}</div>
      <div class="nameperson">${listChat[i].message.content.nameuser}</div>
      <div class="contentMe">${listChat[i].message.content.text}</div>
      </div>
      </div>

                `;
    } else {
      result += `
       <div class="ok" >
       <div class="contentBotCha">
      <div class="time">${listChat[i].message.time}</div>
      <div class="nameBoss">${listChat[i].message.content.nameuser}</div>
      <div class="contentBoss">${listChat[i].message.content.text}</div>
      </div>
      </div>
       `;
    }
  }

  document.getElementById("spaceChat").innerHTML = result;

  let listChat1 = document.getElementById("spaceChat");
  listChat1.scrollTop = listChat1.scrollHeight;
};

view.renderIdName = (list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].idName.email == firebase.auth().currentUser.email) {
      document.getElementById("idName").innerHTML = list[i].idName.Name;
      document.getElementById("namedn").innerHTML = list[i].idName.username;
    }
  }
};
view.renderThemBan = (list, list1) => {
  let result = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].idName.email !== firebase.auth().currentUser.email) {
      result += `
      <div class="friend1">
      <div class="avatar" style="max-width:50px;width:20%;margin:11px 0px">${list[
        i
      ].idName.Name.charAt(0)}</div>
      <div style="display: flex;flex-direction: column;justify-content: center;width:80%;margin-left: 10px;">
      <div class="nameFriend1">${list[i].idName.username}</div>
      <div class="lastChat1">${list[i].idName.email}</div>
      </div>
      <div id="btnketban" onclick="thembanzochokhac(${i},'${
        list[i].idName.Name
      }','${list[i].idName.email}','${
        list[i].idName.username
      }')" ><div>kết bạn</div></div>
      </div>
      `;
    }
  }

  document.getElementById("listRecommet").innerHTML = result;

  let listchat = document.querySelectorAll(".lastChat");
  let listchat1 = document.querySelectorAll(".lastChat1");
  for (let i = 0; i < listchat1.length; i++) {
    for (let j = 0; j < listchat.length; j++) {
      if (
        listchat1[i].innerText
          .trim()
          .toLowerCase()
          .includes(listchat[j].innerText.trim().toLowerCase())
      ) {
        listchat1[i].parentElement.parentElement.style.display = "none";
      }
    }
  }
};
function thembanzochokhac(index, idname, email, username) {
  model.savethembanzochokhac = async () => {
    
 
      let checkIdName = {
        idName: {
          tenchunhan: auth.currentUser.displayName,
          currentEmail: auth.currentUser.email,
          Name: idname,
          email: email,
          username: username,
        },
      };

      try {
        let response1 = await firebase
          .firestore()
          .collection("idName")
          .doc("vGtlozg2ODnWYyeMp04E")
          .update({
            idNamechokhac:
              firebase.firestore.FieldValue.arrayUnion(checkIdName),
          });

        ShowInfoToast();
        model.rederListFriend();
      } catch (error) {}

      try {
        let response1 = await firebase
          .firestore()
          .collection("listMessage")
          .doc(`${auth.currentUser.email}${email}`)
          .set({
            message: firebase.firestore.FieldValue.arrayUnion(),
          });
      } catch (error) {}

    
  };
  model.getIdName();
  model.savethembanzochokhac();
}


view.rederListFriend = (result) => {
  let renderchokhac = "";
  for (let i = 0; i < result.length; i++) {
    if (result[i].idName.currentEmail == auth.currentUser.email) {
      renderchokhac += ` <div id="friendnone${i}"  class="friend" onclick="takeInfoObj('${result[i].idName.email}',${i})" >
        <div class="avatar" style="max-width:50px;width:20%;margin:11px 0px">${result[i].idName.Name.charAt(0)}</div>
        <div style="display: flex;flex-direction: column;justify-content: center;width:80%;margin-left: 10px;">
        <div class="nameFriend">${result[i].idName.username}</div>
        <div class="lastChat">${result[i].idName.email}</div>
        </div>
        </div>
        
        `;
    }

    if (auth.currentUser.email == result[i].idName.email) {
      renderchokhac += `
          <div id="friendnone${i}" class="friend" onclick="takeInfoObj('${result[i].idName.currentEmail}',${i})">
          <div class="avatar" style="max-width:50px;width:20%;margin:11px 0px">${result[i].idName.tenchunhan.charAt(0)}</div>
          <div style="display: flex;flex-direction: column;justify-content: center;width:80%;margin-left: 10px;">
          <div class="nameFriend">${result[i].idName.tenchunhan}</div>
          <div class="lastChat">${result[i].idName.currentEmail}</div>
          </div>
          </div>
          `;
    }
  }
  document.getElementById("listChating").innerHTML = renderchokhac;
};
