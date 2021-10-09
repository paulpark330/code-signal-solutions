function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return yourLeft + yourRight === friendsLeft + friendsRight
    && (yourLeft === friendsLeft || yourLeft === friendsRight)
}
