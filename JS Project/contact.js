document.getElementById('feedback-form').addEventListener('submit', function(e) {
  e.preventDefault(); // منع إعادة تحميل الصفحة

  // الحصول على البيانات من الحقول
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const feedback = document.getElementById('feedback').value;

  // إنشاء عنصر لعرض التغذية الراجعة
  const feedbackList = document.getElementById('feedback-list');
  const feedbackItem = document.createElement('div');
  feedbackItem.classList.add('feedback-item');
  feedbackItem.innerHTML = `<strong>${name} (${email})</strong><p>${feedback}</p>`;

  // إضافة التغذية الراجعة إلى القائمة
  feedbackList.appendChild(feedbackItem);

  // إعادة تعيين النموذج بعد الإرسال
  document.getElementById('feedback-form').reset();
});
