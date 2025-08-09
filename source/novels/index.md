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
      
      if (href && href.startsWith('#')) {
        // 解碼 URL 編碼的錨點
        const decodedHref = decodeURIComponent(href);
        
        // 根據錨點找到對應的小說區域
        const targetElement = document.querySelector(decodedHref);
        
        if (targetElement) {
          // 找到對應的小說連結並跳轉
          const nextDiv = targetElement.nextElementSibling;
          if (nextDiv && nextDiv.classList.contains('novel-item')) {
            const novelLink = nextDiv.querySelector('a[href$=".html"]');
            if (novelLink) {
              // 跳轉到實際的小說頁面
              window.location.href = novelLink.getAttribute('href');
              return;
            }
          }
          
          // 如果沒有找到小說連結，則滾動到對應位置
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // 高亮顯示對應的小說區域
          if (nextDiv && nextDiv.classList.contains('novel-item')) {
            nextDiv.style.backgroundColor = '#f8f9fa';
            setTimeout(() => {
              nextDiv.style.backgroundColor = '';
            }, 2000);
          }
        }
      }
    });
  });
});
</script>

<!-- 小說標籤雲 (使用 Next 原生樣式) -->
<div class="tag-cloud">
  <div class="tag-cloud-title">
    📚 依標籤瀏覽小說
  </div>
  <div class="tag-cloud-tags">
    <a href="#" class="tag-cloud-0" style="font-size: 14px;" data-tag="all">全部</a>
    <a href="#" class="tag-cloud-0" style="font-size: 12px;" data-tag="古代">古代</a>
    <a href="#" class="tag-cloud-0" style="font-size: 12px;" data-tag="現代">現代</a>
    <a href="#" class="tag-cloud-0" style="font-size: 13px;" data-tag="ABO">ABO</a>
    <a href="#" class="tag-cloud-0" style="font-size: 12px;" data-tag="言情">言情</a>
    <a href="#" class="tag-cloud-0" style="font-size: 12px;" data-tag="奇幻">奇幻</a>
    <a href="#" class="tag-cloud-0" style="font-size: 12px;" data-tag="肉">肉</a>
    <a href="#" class="tag-cloud-0" style="font-size: 12px;" data-tag="甜文">甜文</a>
  </div>
</div>

<script>
// 使用 Next 原生樣式的小說標籤篩選
document.addEventListener('DOMContentLoaded', function() {
  const tagLinks = document.querySelectorAll('.tag-cloud-tags a[data-tag]');
  const novelItems = document.querySelectorAll('.novel-item');
  
  tagLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const selectedTag = this.getAttribute('data-tag');
      
      // 更新標籤樣式 - 使用 Next 的 active 狀態
      tagLinks.forEach(l => {
        l.style.fontWeight = 'normal';
        l.style.textDecoration = 'none';
      });
      this.style.fontWeight = 'bold';
      this.style.textDecoration = 'underline';
      
      // 篩選小說
      novelItems.forEach(item => {
        const tags = item.getAttribute('data-tags');
        if (selectedTag === 'all' || (tags && tags.includes(selectedTag))) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // 預設選中全部
  const allTag = document.querySelector('.tag-cloud-tags a[data-tag="all"]');
  if (allTag) {
    allTag.style.fontWeight = 'bold';
    allTag.style.textDecoration = 'underline';
  }
});
</script>

## ABO系列

### 三喜
<div class="novel-item" data-tags="古代,肉,ABO" style="margin-bottom: 20px; padding: 15px; border-bottom: 1px solid #eee;">

📖 [三喜](./ABO/三喜.html)

**狀態**：連載中 | **更新時間**：2025-01-07

**簡介**：這裡是三喜的故事...

<!-- 標籤：#古代 #肉 #ABO -->
</div>



---

<!-- 新增小說模板：

### 小說標題
<div class="novel-item" data-tags="標籤1,標籤2,分類" style="margin-bottom: 20px; padding: 15px; border-bottom: 1px solid #eee;">

📖 [小說標題](./資料夾/檔案名稱.html)

**狀態**：連載中/完結 | **更新時間**：YYYY-MM-DD

**簡介**：簡短描述...

<!-- 標籤：#標籤1 #標籤2 #分類 -->
</div>
