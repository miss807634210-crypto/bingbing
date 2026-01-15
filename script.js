// 歌曲数据
const songData = {
    "古风国风类": [
        "兰亭序", "青花瓷", "菊花台", "半壶纱", "红颜旧", 
        "恋人心", "青玉恋", "桃花诺", "菩提偈", "棠梨煎雪", 
        "不负人间", "千秋此意", "只若初见", "渡红尘", "探故知", 
        "壁上观", "告女子书", "红颜如霜", "杏花弦外雨", "月下舞姬", "鸳鸯戏"
    ],
    "甜蜜情歌类": [
        "小酒窝", "有点甜", "告白气球", "小幸运", "小美满", 
        "爱你", "恋爱ING", "我只在乎你", "甜蜜蜜", "你最珍贵", 
        "枕边童话", "白色羽毛", "爱丫爱丫", "有点甜", "九万字", 
        "讲真的", "爱情废柴", "唯一", "两相欢", "樱花草", 
        "热气球", "我会等", "手掌心", "一点点", "你的眼神", 
        "月下舞姬", "花开忘忧", "心有独钟", "爱笑的眼睛", "喜欢两个人", 
        "有可能的夜晚", "一路上有你", "等爱的玫瑰", "蒲公英的约定", "说好的幸福呢", 
        "永不失联的爱", "不要忘记我爱你", "如果这就是爱情", "爱了很久的朋友", "夏夜最后的烟火", 
        "原来你也在这里", "一起吹过晚风的街"
    ],
    "伤感催泪类": [
        "慢冷", "嘉宾", "体面", "后来", "遗憾", 
        "雨爱", "人质", "冬眠", "离歌", "淘汰", 
        "阴天", "晚婚", "大眠", "舍得", "暗恋", 
        "背叛", "黄昏", "猜不透", "无底洞", "沈园外", 
        "听说你", "第三人", "我太笨", "到此为止", "让他降落", 
        "可不可以", "那个男人", "字字句句", "爱似水仙", "我走以后", 
        "一生等你", "云烟成雨", "最后一页", "路过人间", "寂寞先生", 
        "说散就散", "我怀念的", "半句再见", "拜拜爱过", "那又如何", 
        "朋友别哭", "我走以后", "无人之岛", "爱不单行", "一眼万年", 
        "袖手旁观", "你的珍藏", "那么骄傲", "只要平凡", "字字句句", 
        "可惜不是你", "如果爱下去", "后来没有你", "旅行中忘记", "可以不是你", 
        "没那么简单", "我们说好的", "当爱在靠近", "最长的电影", "痴心无名氏", 
        "如果爱忘了", "可惜没如果", "背对背拥抱", "匿名的好友", "只是太爱你", 
        "外面的世界", "突然好想你", "其实都没有", "眼泪的名字", "漂洋过海来看你", 
        "忘了你忘了我", "我也不想这样", "离开我的依赖", "寂寞寂寞不好", "你就不要想起我", 
        "想你零点零一分", "我对自己开了一枪", "给我一个理由忘记", "你知道我最害怕一个人天黑"
    ],
    "小众清新类": [
        "枫", "紫", "溯", "白鸽", "空空", 
        "尘埃", "芊芊", "淬炼", "房间", "孤雏", 
        "余味", "青花", "秋风", "空耳", "虫儿飞", 
        "萤火虫", "萱草花", "书里说", "枫叶城", "月牙湾", 
        "下雨天", "九万字", "探故知", "壁上观", "棠梨煎雪", 
        "云烟成雨", "飞鸟和蝉", "贝加尔湖畔", "蓝色降落伞", "白色问候卡", 
        "一直很安静", "当冬夜渐暖", "阳光下的星星", "蒲公英的约定", "给月亮的三行诗", 
        "听见下雨的声音", "南半球与北海道", "杏花弦外雨", "旅行中忘记", "第二杯半价"
    ],
    "经典怀旧类": [
        "十年", "春泥", "约定", "千年", "阴天", 
        "勇气", "遇见", "听海", "借口", "退后", 
        "太多", "过火", "倒带", "眷恋", "叶子", 
        "雨蝶", "无赖", "面具", "安静", "晚婚", 
        "舍得", "大鱼", "卜卦", "黄昏", "童话", 
        "达尔文", "想自由", "日不落", "甜蜜蜜", "记事本", 
        "我只在乎你", "一路上有你", "外面的世界", "漂洋过海来看你", "忘了你忘了我", 
        "我也不想这样", "朋友别哭", "如果云知道", "突然想起你", "如果没有你", 
        "算什么男人", "当爱在靠近", "眼泪的名字", "等爱的玫瑰"
    ],
    "励志治愈类": [
        "勇气", "修炼爱情", "只要平凡", "有志青年", "我会等", 
        "飞鸟和蝉", "路过人间", "心有独钟", "永不失联的爱", "你一定要幸福", 
        "魔鬼中的天使", "本末倒置"
    ]
};

// DOM元素
const songlistContainer = document.getElementById('songlist-container');
const categoryFilter = document.getElementById('category-filter');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const randomSongButton = document.getElementById('random-song-button');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const starsContainer = document.getElementById('stars-container');
const surpriseModal = document.getElementById('surprise-modal');
const randomSongName = document.getElementById('random-song-name');
const closeSurprise = document.getElementById('close-surprise');

// 初始化函数
function init() {
    renderSonglist();
    setupEventListeners();
    createStars();
    lucide.createIcons();
}

// 渲染歌单
function renderSonglist(filteredData = null) {
    songlistContainer.innerHTML = '';
    const data = filteredData || songData;
    
    // 检查是否有歌曲要显示
    const hasSongs = Object.values(data).some(songs => songs.length > 0);
    
    if (!hasSongs) {
        songlistContainer.innerHTML = `
            <div class="text-center py-12">
                <i data-lucide="music" class="mx-auto mb-4 text-white/50" style="width: 64px; height: 64px;"></i>
                <p class="text-white text-xl">没有找到匹配的歌曲</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    Object.keys(data).forEach(category => {
        if (data[category].length === 0) return;
        
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.dataset.category = category;
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.innerHTML = `<i data-lucide="music" class="w-6 h-6"></i>${category}`;
        
        const songGrid = document.createElement('div');
        songGrid.className = 'song-grid';
        
        data[category].forEach(song => {
            const songItem = document.createElement('div');
            songItem.className = 'song-item';
            songItem.textContent = song;
            songItem.dataset.song = song;
            
            songItem.addEventListener('click', () => copySongName(song));
            
            songGrid.appendChild(songItem);
        });
        
        categoryCard.appendChild(categoryTitle);
        categoryCard.appendChild(songGrid);
        songlistContainer.appendChild(categoryCard);
    });
    
    lucide.createIcons();
}

// 设置事件监听器
function setupEventListeners() {
    // 分类筛选
    categoryFilter.addEventListener('change', handleCategoryFilter);
    
    // 搜索功能
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // 随机点歌
    randomSongButton.addEventListener('click', handleRandomSong);
    
    // 关闭惊喜弹窗
    closeSurprise.addEventListener('click', closeSurpriseModal);
    
    // 点击弹窗外部关闭
    surpriseModal.addEventListener('click', (e) => {
        if (e.target === surpriseModal) {
            closeSurpriseModal();
        }
    });
    
    // 按ESC键关闭弹窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !surpriseModal.classList.contains('pointer-events-none')) {
            closeSurpriseModal();
        }
    });
}

// 处理分类筛选
function handleCategoryFilter() {
    const selectedCategory = categoryFilter.value;
    
    if (selectedCategory === 'all') {
        renderSonglist();
    } else {
        const filteredData = {
            [selectedCategory]: songData[selectedCategory]
        };
        renderSonglist(filteredData);
    }
}

// 处理搜索
function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        handleCategoryFilter(); // 如果搜索框为空，应用当前分类筛选
        return;
    }
    
    const filteredData = {};
    
    Object.keys(songData).forEach(category => {
        const matchedSongs = songData[category].filter(song => 
            song.toLowerCase().includes(searchTerm)
        );
        
        if (matchedSongs.length > 0) {
            filteredData[category] = matchedSongs;
        }
    });
    
    renderSonglist(filteredData);
}

// 复制歌名
function copySongName(songName) {
    const textToCopy = `点歌 ${songName}`;
    
    // 优先使用现代 Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            showCopySuccess(songName);
        }).catch(err => {
            console.error('Clipboard API 复制失败:', err);
            // 失败时尝试备用方法
            fallbackCopyTextToClipboard(textToCopy, songName);
        });
    } else {
        // 不支持 Clipboard API 或非安全上下文，使用备用方法
        fallbackCopyTextToClipboard(textToCopy, songName);
    }
}

// 备用复制方法
function fallbackCopyTextToClipboard(text, songName) {
    try {
        // 创建临时文本区域
        const textArea = document.createElement('textarea');
        textArea.value = text;
        
        // 设置样式使其不可见
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        textArea.style.opacity = '0';
        textArea.style.pointerEvents = 'none';
        textArea.style.tabIndex = '-1';
        textArea.setAttribute('readonly', '');
        
        document.body.appendChild(textArea);
        
        // 选择文本并复制
        textArea.focus();
        textArea.select();
        
        // 执行复制命令
        const successful = document.execCommand('copy');
        
        // 清理
        document.body.removeChild(textArea);
        
        if (successful) {
            showCopySuccess(songName);
        } else {
            throw new Error('复制命令执行失败');
        }
    } catch (err) {
        console.error('备用复制方法失败:', err);
        showToast('复制失败，请手动复制', 'error');
    }
}

// 显示复制成功反馈
function showCopySuccess(songName) {
    showToast(`已复制当前歌曲: ${songName}`);
    
    // 添加复制成功的视觉反馈
    const songItem = document.querySelector(`[data-song="${songName}"]`);
    if (songItem) {
        songItem.classList.add('copied');
        setTimeout(() => songItem.classList.remove('copied'), 300);
    }
}

// 处理随机点歌
function handleRandomSong() {
    // 获取当前选择的分类
    const selectedCategory = categoryFilter.value;
    let songsToRandomize = [];
    
    if (selectedCategory === 'all') {
        // 从所有歌曲中随机选择
        Object.keys(songData).forEach(category => {
            songData[category].forEach(song => {
                songsToRandomize.push({ name: song, category });
            });
        });
    } else {
        // 只从当前分类中随机选择
        songData[selectedCategory].forEach(song => {
            songsToRandomize.push({ name: song, category: selectedCategory });
        });
    }
    
    if (songsToRandomize.length === 0) {
        showToast('当前分类下没有歌曲', 'error');
        return;
    }
    
    // 随机选择一首歌
    const randomIndex = Math.floor(Math.random() * songsToRandomize.length);
    const randomSong = songsToRandomize[randomIndex];
    
    // 复制歌名
    copySongName(randomSong.name);
    
    // 显示惊喜弹窗
    showSurpriseModal(randomSong.name);
    
    // 高亮显示选中的歌曲
    setTimeout(() => {
        const categoryCard = document.querySelector(`[data-category="${randomSong.category}"]`);
        if (categoryCard) {
            categoryCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            setTimeout(() => {
                const songItem = categoryCard.querySelector(`[data-song="${randomSong.name}"]`);
                if (songItem) {
                    songItem.style.background = 'rgba(255, 105, 180, 0.9)';
                    songItem.style.transform = 'scale(1.05)';
                    
                    setTimeout(() => {
                        songItem.style.background = '';
                        songItem.style.transform = '';
                    }, 1000);
                }
            }, 500);
        }
    }, 300);
}

// 显示惊喜弹窗
function showSurpriseModal(songName) {
    randomSongName.textContent = songName;
    surpriseModal.classList.remove('opacity-0', 'pointer-events-none');
    surpriseModal.querySelector('div').classList.remove('scale-90');
    surpriseModal.querySelector('div').classList.add('scale-100');
    
    // 播放庆祝音效（可选）
    playCelebrationSound();
}

// 关闭惊喜弹窗
function closeSurpriseModal() {
    surpriseModal.classList.add('opacity-0', 'pointer-events-none');
    surpriseModal.querySelector('div').classList.remove('scale-100');
    surpriseModal.querySelector('div').classList.add('scale-90');
}

// 播放庆祝音效
function playCelebrationSound() {
    try {
        // 创建音频上下文
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // 创建音符序列（欢快的旋律）
        const notes = [
            { frequency: 523.25, duration: 0.15 }, // C5
            { frequency: 659.25, duration: 0.15 }, // E5
            { frequency: 783.99, duration: 0.15 }, // G5
            { frequency: 1046.50, duration: 0.3 }  // C6
        ];
        
        let startTime = audioContext.currentTime;
        
        notes.forEach(note => {
            // 创建振荡器
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.type = 'sine';
            oscillator.frequency.value = note.frequency;
            
            // 连接节点
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // 设置音量包络
            gainNode.gain.setValueAtTime(0, startTime);
            gainNode.gain.linearRampToValueAtTime(0.1, startTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + note.duration);
            
            // 启动和停止振荡器
            oscillator.start(startTime);
            oscillator.stop(startTime + note.duration);
            
            startTime += note.duration * 0.7; // 音符之间有间隔
        });
    } catch (err) {
        console.log('无法播放音效:', err);
    }
}

// 显示提示弹窗
function showToast(message, type = 'success') {
    toastMessage.textContent = message;
    toast.className = toast.className.replace('opacity-0', 'opacity-100');
    toast.classList.remove('pointer-events-none');
    
    setTimeout(() => {
        toast.className = toast.className.replace('opacity-100', 'opacity-0');
        toast.classList.add('pointer-events-none');
    }, 3000);
}

// 创建星光背景
function createStars() {
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // 随机位置
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // 随机大小
        const size = Math.random() * 3 + 1;
        
        // 随机动画延迟
        const delay = Math.random() * 3;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        
        starsContainer.appendChild(star);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);