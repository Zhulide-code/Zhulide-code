<div align="center">

  <!-- Bow Icon & Name Title -->
  <img src="./img/bow.svg" width="60" height="60" alt="Bow" />
  <h1>Zhulide</h1>

  <!-- Profile Views Counter -->
  <img src="https://komarev.com/ghpvc/?username=Zhulide-code&label=PROFILE+VIEWS&color=F75C7E&style=for-the-badge" alt="Profile Views" />

  <br /><br />


  <br /><br />

  <!-- Social Links & GitHub Followers -->
  <a href="https://www.linkedin.com/in/zhulide-m-867a86384">
    <img src="./img/linkedin.svg" width="40" height="40" alt="LinkedIn" />
  </a>
  &nbsp;&nbsp;
  <a href="https://www.instagram.com/zhulide_?stkn=MTBobHJiNGtoNW9kOA%3D%3D&utm_source=qr">
    <img src="./img/instagram.svg" width="40" height="40" alt="Instagram" />
  </a>
  &nbsp;&nbsp;
  <img src="./img/terminal.svg" width="40" height="40" alt="Terminal" />
  &nbsp;&nbsp;
  <img src="./img/robot.svg" width="40" height="40" alt="Robot" />
  &nbsp;&nbsp;
  <img src="./img/camera.svg" width="40" height="40" alt="Camera" />
  <br /><br />

---

### <img src="./img/folder.svg" width="28" height="28" align="center" /> About Me

I'm a Software Engineer who loves combining technology, creativity, and design ✨. 

I enjoy turning ideas into websites, applications, and interactive digital experiences. I'm always curious about new technologies and love learning by building real projects.

<!-- C++ Challenge Block -->
```cpp
#include <iostream>
#include <vector>
#include <numeric>

// 🧩 CHALLENGE: Solve the output of this C++ template logic puzzle!
template <typename T>
class DeveloperCore {
private:
    T secretKey;
public:
    DeveloperCore(T key) : secretKey(key) {}

    auto decryptPassion() {
        std::vector<int> encoded = {0x5A, 0x48, 0x55, 0x4C, 0x49, 0x44, 0x45};
        return [this, encoded]() mutable {
            int result = 0;
            for (auto& val : encoded) {
                val ^= (secretKey & 0xFF);
                result += val;
            }
            return result;
        };
    }
};

int main() {
    DeveloperCore<int> dev(0x00);
    auto unlock = dev.decryptPassion();
    
    // What does unlock() return? 🚀
    std::cout << "Passion Score: " << unlock() << std::endl;
    return 0;
}
