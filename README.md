This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Trang web được deploy tại:
[Trang web dấu - giấu](https://lminhtam.github.io/dau-giau/?fbclid=IwAR14soGHOrRQLOLxkVNtR1o7Xqgs2islaEZATL9Uwo1f2GEJtY_6gH2UWGc#/)

## Hướng dẫn sử dụng git

Đầu tiên, ta cần clone code về:

`git clone <url>`

Tiếp theo ta cần tạo một branch ở dưới local:

`git <branch name>`

Tuy nhiên, lúc này ta vẫn chưa code tại branch của mình dưới local, để làm được điều đó cần chuyển đổi branch

`git switch <branch name>`

Sau đó, ta tiến hành đẩy branch của mình dưới local lên repo để mình track theo:

`git push --set-upstream [remote] [branch]`
 Ví dụ: `git push --set-upstream origin Hau`
 
 Sau đó, ta tiến hành code và đẩy lên branch của mình như bình thường:
 
 `git add <file name>` và `git commit -m "mess"`
 
 Lưu ý lần sau trước khi code, ta cần phải luôn kiểm tra xem code trên master có merge hay thay đổi gì hông:
 
 `git pull origin master`
 
 ## Build code để chạy thử: 
 `yarn start` hoặc `npm start`
 
