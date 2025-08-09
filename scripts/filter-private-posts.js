// 過濾私密文章腳本
// 這個腳本會在生成靜態網站時移除所有私密分類的文章，讓它們不會出現在公開網站上
// 但在本地開發模式（hexo server）時會保留所有文章

hexo.extend.filter.register('before_generate', function() {
  const config = hexo.config;
  const privateCategories = config.private_categories || [];
  
  // 檢查是否為本地開發模式
  const isServer = process.argv.includes('server') || process.argv.includes('s') || 
                   process.env.NODE_ENV === 'development' ||
                   hexo.env.cmd === 'server';
  
  if (privateCategories.length === 0 || isServer) {
    if (isServer) {
      console.log('🔧 本地開發模式：保留所有文章（包括私密文章）');
    }
    return;
  }
  
  console.log('🚀 生產模式：過濾私密文章');
  
  // 輔助函數：檢查是否為私密內容
  const isPrivateContent = (content) => {
    if (!content.categories) {
      return false;
    }
    
    // 處理不同的分類格式
    let categoriesArray = [];
    if (typeof content.categories.toArray === 'function') {
      categoriesArray = content.categories.toArray();
    } else if (Array.isArray(content.categories)) {
      categoriesArray = content.categories;
    } else {
      return false;
    }
    
    if (categoriesArray.length === 0) {
      return false;
    }
    
    return categoriesArray.some(category => {
      let categoryName;
      if (typeof category === 'string') {
        categoryName = category;
      } else if (category && category.name) {
        categoryName = category.name;
      } else {
        return false;
      }
      
      return privateCategories.some(privateCat => 
        privateCat.toLowerCase() === categoryName.toLowerCase()
      );
    });
  };
  
  // 過濾掉私密分類的文章 (posts)
  const originalPosts = hexo.locals.get('posts');
  const filteredPosts = originalPosts.filter(post => !isPrivateContent(post));
  hexo.locals.set('posts', filteredPosts);
  
  // 過濾掉私密分類的頁面 (pages)
  const originalPages = hexo.locals.get('pages');
  const filteredPages = originalPages.filter(page => !isPrivateContent(page));
  hexo.locals.set('pages', filteredPages);
  
  // 重新生成分類和標籤（只移除沒有文章的分類）
  const originalCategories = hexo.locals.get('categories');
  const filteredCategories = originalCategories.filter(category => {
    // 檢查這個分類是否還有文章或頁面
    const hasInPosts = filteredPosts.some(post => 
      post.categories && post.categories.some(cat => cat.name === category.name)
    );
    const hasInPages = filteredPages.some(page => 
      page.categories && page.categories.some(cat => cat.name === category.name)
    );
    return hasInPosts || hasInPages;
  });
  
  hexo.locals.set('categories', filteredCategories);
  
  const removedPostsCount = originalPosts.length - filteredPosts.length;
  const removedPagesCount = originalPages.length - filteredPages.length;
  const totalRemoved = removedPostsCount + removedPagesCount;
  console.log(`✅ 私密文章過濾完成，移除了 ${totalRemoved} 篇內容（文章: ${removedPostsCount}, 頁面: ${removedPagesCount}）`);
}); 