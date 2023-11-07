
    //localStorage
    // lưu trữ dữ liệu cục bộ trong trình duyệt web, nó cho phép các trang web và ứng dụng JavaScript lưu trữ truy xuất dữ liệu mà không phải lo lắng về việc mất dữ liệu.
    // Do đó, dữ liệu được lưu trong trình duyệt sẽ vẫn có thể truy cập được ngay cả khi đóng cửa sổ
dev=(key)=>
{
    const store=JSON.parse(localStorage.getItem(key)) ?? {}
    const save=()=>
    {
        localStorage.getItem(key,JSON.stringify(store))
    }
   
        const object={
            get(key)
            {
                return store[key]
            },
            set(key, value)
            {
                store[key]=value
                save()
            },
            remove(key)
            {
                delete store[key]
                save()
            }
        }
    
    return object
}

//profile.js
const setting=dev('setting')
console.log(setting.set('name'));
setting.set('fullname','đỊT mẸ Mày')


