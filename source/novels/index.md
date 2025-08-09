---
title: 我的小說作品
date: 2025-01-07 12:00:00
categories: 
  - 小說
type: novels
---

<style>
.post-body h2,
.post-body h3 {
  position: absolute;
  left: -9999px;
  height: 1px;
  width: 1px;
  overflow: hidden;
}


/* TOC 展開收合樣式 */
.post-toc .nav-child {
  display: none;
}
.post-toc .nav-item.expanded > .nav-child {
  display: block;
}
.post-toc .nav-level-2 > .nav-link::before {
  content: "▶ ";
  font-size: 0.8em;
  color: #666;
  margin-right: 5px;
}
.post-toc .nav-item.expanded > .nav-link::before {
  content: "▼ ";
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // 為所有二級目錄項目添加點擊事件
  const level2Items = document.querySelectorAll('.post-toc .nav-level-2');
  
  level2Items.forEach(function(item) {
    const link = item.querySelector('.nav-link');
    const childNav = item.querySelector('.nav-child');
    
    if (childNav) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        // 只切換展開狀態，不跳轉
        item.classList.toggle('expanded');
      });
    }
  });
  
  // 為三級項目（小說名稱）添加跳轉功能
  const level3Items = document.querySelectorAll('.post-toc .nav-level-3 .nav-link');
  level3Items.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = link.getAttribute('href');
      console.log('Clicked href:', href);
      
      if (href && href.startsWith('#')) {
        // 解碼 URL 編碼的錨點
        const decodedHref = decodeURIComponent(href);
        console.log('Decoded href:', decodedHref);
        
        // 根據錨點找到對應的小說連結
        const targetElement = document.querySelector(decodedHref);
        console.log('Target element:', targetElement);
        
        if (targetElement) {
          // 查找緊接著的內容元素
          let nextElement = targetElement.nextElementSibling;
          console.log('Next element:', nextElement);
          
          // 如果下一個元素不是 p 標籤，繼續查找
          while (nextElement && nextElement.tagName !== 'P') {
            nextElement = nextElement.nextElementSibling;
          }
          
          if (nextElement) {
            const novelLink = nextElement.querySelector('a[href$=".html"]');
            console.log('Novel link found:', novelLink);
            
            if (novelLink) {
              // 直接跳轉到小說頁面
              const novelHref = novelLink.getAttribute('href');
              console.log('Redirecting to:', novelHref);
              window.location.href = novelHref;
            } else {
              console.log('No novel link found, scrolling to position');
              nextElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          } else {
            console.log('No next element found');
          }
        }
      }
    });
  });
});
</script>

## ABO系列

### 三喜
📖 [三喜](./ABO/三喜.html)  
**狀態**：連載中 | **更新時間**：2025-01-07  
**簡介**：這裡是三喜的故事...  
<!-- 標籤：#古代 #肉 #ABO -->

## 奇幻系列

## 其他作品

---

<!-- 新增小說模板：

### 小說標題
📖 [小說標題](./資料夾/檔案名稱.html)  
**狀態**：連載中/完結 | **更新時間**：YYYY-MM-DD  
**簡介**：簡短描述...  
<!-- 標籤：#標籤1 #標籤2 #分類 -->
