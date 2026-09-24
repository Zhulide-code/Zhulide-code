<div align="center">

  <!-- Bow Icon & Full Name Title -->
  <h1>
    <img src="./img/bow.svg" width="45" height="45" alt="Bow" style="vertical-align: middle; margin-right: 8px;" />
    Zhulide Myumyun
  </h1>

  <!-- Profile Views & GitHub Followers Badges Side-by-Side -->
  <img src="https://komarev.com/ghpvc/?username=Zhulide-code&label=PROFILE+VIEWS&color=F75C7E&style=for-the-badge" alt="Profile Views" />
  &nbsp;
  <a href="https://github.com/Zhulide-code?tab=followers">
    <img src="https://img.shields.io/github/followers/Zhulide-code?label=Followers&style=for-the-badge&color=238636&logo=github" alt="GitHub Followers" />
  </a>

  <br /><br />

  <!-- About Me Header -->
  <h2><img src="./img/folder.svg" width="28" height="28" align="center" /> About Me</h2>

  <p align="center">
    I'm a <b>Software Engineer</b> who loves combining <b>technology, creativity, and design</b> ✨.<br />
    I enjoy turning ideas into websites, applications, and interactive digital experiences. I'm always curious about new technologies and love learning by building real projects. 👩🏻‍💻
  </p>

  <br />

  <!-- Centered Social Links (LinkedIn & Instagram) -->
  <a href="https://www.linkedin.com/in/zhulide-m-867a86384">
    <img src="./img/linkedin.svg" width="40" height="40" alt="LinkedIn" />
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.instagram.com/zhulide_?stkn=MTBobHJiNGtoNW9kOA%3D%3D&utm_source=qr">
    <img src="./img/instagram.svg" width="40" height="40" alt="Instagram" />
  </a>

</div>

<br />

---

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
