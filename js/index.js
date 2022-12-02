window.onload = () => {

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      
      view.setScreenActive("wellcomePage");
      document.getElementById("body").style = ""
      model.getChat()
      localStorage.setItem("bothEmail","loichaocuazalo")
     
    } else {
      view.setScreenActive("loginPage");
    }
  });
  firebase
    .firestore()
    .collection("listMessage")
    .onSnapshot((docs) => {

      model.getChat()
     
    });
  firebase
    .firestore()
    .collection("idName")
    .doc("vGtlozg2ODnWYyeMp04E")
    .onSnapshot((doc) => {
      view.rederListFriend(doc.data().idNamechokhac);
    });
};
