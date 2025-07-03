{/* 
    //모임상세설명 부분 클릭 시 오버플로우 -> display 구현
    const moreButton = document.getElementById('more-button');
    const content = document.getElementById('content'); */}

    moreButton.addEventListener('click', function() {
    if (content.style.overflow === 'hidden') {
        content.style.overflow = 'visible';
        moreButton.textContent = '간략히'; // 또는 다른 텍스트로 변경
    } else {
        content.style.overflow = 'hidden';
        moreButton.textContent = '더보기'; // 또는 다른 텍스트로 변경
    }
    });


    