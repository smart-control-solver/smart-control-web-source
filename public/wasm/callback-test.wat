(module
    (import "next" (func $i1))
    (import "error" (func $i2))
    (import "complete" (func $i3))
    (func $main (call $i1))
    (start $main)
    (func (export "solve") (call $i2))
    (func (export "cancel") (call $i3))
)