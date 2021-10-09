function growingPlant(upSpeed, downSpeed, desiredHeight) {
    if (upSpeed >= desiredHeight) {
        return 1;
    }
    return Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1
}
