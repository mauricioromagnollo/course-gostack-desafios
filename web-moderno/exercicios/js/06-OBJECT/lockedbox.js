const box = {
    locked: false,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
    }
}

box.unlock()
console.log(box.content)
// []

box.lock()
console.log(box.content)
// Error: Locked!