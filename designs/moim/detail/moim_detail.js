
    //모임상세설명 부분 클릭 시 오버플로우 -> display 구현
    const moreButton = document.getElementById('moreInfo');
    const content = document.getElementById('content');

    moreButton.addEventListener('click', function() {
    if (content.style.overflow === 'hidden') {
        content.style.overflow = 'visible';
        moreButton.textContent = '간략히'; // 또는 다른 텍스트로 변경
    } else {
        content.style.overflow = 'hidden';
        moreButton.textContent = '더보기'; // 또는 다른 텍스트로 변경
    }
    });

// 모달창 열기+닫기(모달 제외 배경 클릭 시 close)
function openModal(button) {
  const content = button.previousElementSibling.textContent;
  document.getElementById('reviewText').textContent = content;
  document.querySelector('.modal').style.display = 'block';
  document.querySelector('.modal-backdrop').style.display = 'block';
}

function closeModal() {
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('.modal-backdrop').style.display = 'none';
}

function backDropClick(event){
    const modalContent = document.querySelector('.modal-content');
    if(!modalContent.contains(e.target)){
        closeModal();
    }
}

    

//리뷰칸에 들어가는 글자 수 자르기
const truncateReviewText = () => {
  const spans = document.querySelectorAll(".review span");

  spans.forEach(span => {
    const fullText = span.textContent.replace("더보기", "").trim();
    const maxLength = 28;

    if (fullText.length > maxLength) {
      span.childNodes[0].textContent = fullText.slice(0, maxLength - 3) + "... ";
    }
  });
};


window.onload = () => {
    truncateReviewText();
}

