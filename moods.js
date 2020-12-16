window.onload = function () {

    const currentMood = document.querySelector("#currentMood");
    document.querySelector("#sadBtn").addEventListener(
        "click",
        () => {
            store.dispatch({type: "SAD"});
            currentMood.innerText = store.getState().mood;
        }
    )
    document.querySelector("#madBtn").addEventListener(
        "click",
        () => {
            store.dispatch({type: "MAD"});
            currentMood.innerText = store.getState().mood;
        }
    )
    document.querySelector("#happyBtn").addEventListener(
        "click",
        () => {
            store.dispatch({type: "HAPPY"});
            currentMood.innerText = store.getState().mood;
        }
    )
    document.querySelector("#derpBtn").addEventListener(
        "click",
        () => {
            store.dispatch({type: "DERP"});
            currentMood.innerText = store.getState().mood;
        }
    )
}