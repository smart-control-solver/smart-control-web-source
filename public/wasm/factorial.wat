(module
 (table 0 anyfunc)
 (memory $0 1)
 (data (i32.const 12) "\01\00\00\00\00\00\00\00\01\00\00\00")
 (export "memory" (memory $0))
 (export "main" (func $main))
 (export "fib" (func $fib))
 (func $main (; 0 ;) (param $0 i32) (result i32)
  (call $fib
   (get_local $0)
  )
 )
 (func $fib (; 1 ;) (param $0 i32) (result i32)
  (local $1 i32)
  (block $label$0
   (br_if $label$0
    (i32.ge_u
     (tee_local $1
      (i32.add
       (get_local $0)
       (i32.const 1)
      )
     )
     (i32.const 3)
    )
   )
   (return
    (i32.load
     (i32.add
      (i32.shl
       (get_local $1)
       (i32.const 2)
      )
      (i32.const 12)
     )
    )
   )
  )
  (block $label$1
   (br_if $label$1
    (i32.lt_s
     (get_local $0)
     (i32.const 1)
    )
   )
   (return
    (i32.add
     (call $fib
      (i32.add
       (get_local $0)
       (i32.const -1)
      )
     )
     (call $fib
      (i32.add
       (get_local $0)
       (i32.const -2)
      )
     )
    )
   )
  )
  (i32.sub
   (call $fib
    (i32.add
     (get_local $0)
     (i32.const 2)
    )
   )
   (call $fib
    (get_local $1)
   )
  )
 )
)
