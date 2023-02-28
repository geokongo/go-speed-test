    document.querySelector('#speedtest-button').addEventListener('click', (e) => {
    var imageLink = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tokyo_Sky_Tree_2012.JPG',
    downloadSize = 8576988,
    time_start, time_end,
    downloadSrc = new Image();

    document.querySelector('.speedtest-loader-content').classList.add('speedtest-hide');
    document.querySelector('.speedtest-loader').classList.remove('speedtest-hide');
    
    time_start = new Date().getTime();
    var cacheImg = "?nn=" + time_start;
    downloadSrc.src = imageLink + cacheImg;
    downloadSrc.onload = function(){
        //this function will tregger one the image loads
        time_end = new Date().getTime();
        var timeDuration = (time_end - time_start) / 1000;
        loadedBits = downloadSize * 8;
        totalSpeed = ((loadedBits / timeDuration) / 1024 / 1024).toFixed(2);
        
        let i=0, speedOut;
        const animate = () => {
            if( i < totalSpeed ){
                document.querySelector('.speedtest-content').innerHTML = i.toFixed(2) + '<small>Mbps</small>';
                setTimeout(animate, 20);
                i+=1.02;
            }
            else{
                document.querySelector('.speedtest-content').innerHTML = totalSpeed + '<small>Mbps</small>';
            }
        }
        animate();
                    
        document.querySelector('.speedtest-content').innerHTML = totalSpeed + '<small>Mbps</small>';
        document.querySelector('.speedtest-loader-content').classList.remove('speedtest-hide');
        document.querySelector('.speedtest-loader-content').classList.add('result');
        document.querySelector('.speedtest-loader').classList.add('speedtest-hide');
        document.querySelector('.speedtest-content').classList.remove('speedtest-hide');

        e.target.innerText = 'AGAIN';
    }

})
