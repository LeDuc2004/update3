window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      view.setScreenActive("wellcomePage");
      if (Number(localStorage.getItem("width")) <= 800) {
        document.getElementById("table1").style.display = "none";
      }
    } else {
      view.setScreenActive("loginPage");
    }
  });
  firebase
    .firestore()
    .collection("listMessage")
    .doc()
    .onSnapshot((doc) => {
      model.getChat()
     
    });
  // firebase
  //   .firestore()
  //   .collection("listMessage")
  //   .doc(`${localStorage.getItem("bothEmailReverse")}`)
  //   .onSnapshot((doc) => {
  //     view.renderList(doc.data().message);
  //   });

  firebase
    .firestore()
    .collection("idName")
    .doc("vGtlozg2ODnWYyeMp04E")
    .onSnapshot((doc) => {
      view.rederListFriend(doc.data().idNamechokhac);
    });
};
