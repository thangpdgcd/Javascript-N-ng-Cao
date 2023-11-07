
//đối tượng
function Validator(options) {
  var formElement = document.querySelector(options.form)
  console.log(options.rules);
  if (formElement) {

    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector)
      var errorMessage = inputElement.parentElement.querySelector('.form-message')
      console.log(inputElement);
      if (inputElement) {
        inputElement.onblur = () => {
          //console.log("blur" +rule.selector);//test onblur name and mail:
          //Sự kiện blur xảy ra khi người dùng bỏ focus ra khỏi phần tử của form hoặc một cửa sổ. Bạn có thể xử lý sự kiện blur với trình xử lý sự kiện onblur. Ví dụ sau sẽ hiển thị cho
          // bạn một thông báo cảnh báo khi phần tử nhập văn bản mất focus.

          //console.log(inputElement.value); //lấy value
          ///value:inputElement.value
          //test func :rule.test
          // console.log(rule);

          var errorMessage = rule.test(inputElement.value) //nhận hàm test từ valiis required
          console.log(errorMessage);

          if (errorMessage) {
            errorMessage.innerText = errorMessage

          }
          //console.log(inputElement.parentElement.querySelector('.form-message'));//form message dưới thẻ nhập
        }
      }
    })

  }
}
//định nghĩa rules
//nguyên tắc của các rules:
//1.khi có lỗi thì trả ra mesage lỗi
//2.khi không có lỗi thì không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Please enter this field"
      /*if(value)
      {
        console.log("vui nhap truong nay");
      }
      else
      {
        undefined;
      }
      return value.trim()*/ //loại bỏ dấu cách
    }

  }


  //kiểm tra người dùng nhập chưa
}
Validator.isEmail = function (selector) {

  return {
    selector: selector,
    test: function () {

    }
  }
  //kiểm tra phải email không
}
