var ref={backdrop:document.querySelector(".backdrop"),openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")},backdrop=ref.backdrop,openModalBtn=ref.openModalBtn,closeModalBtn=ref.closeModalBtn,modal=ref.modal;function openModal(){modal.classList.toggle("is-hidden"),document.querySelector("body").classList.add("js-body-scroll"),backdrop.addEventListener("click",closeModalClick),window.addEventListener("keydown",closeModalEsc)}function closeModal(){modal.classList.toggle("is-hidden"),document.querySelector("body").classList.remove("js-body-scroll"),backdrop.removeEventListener("click",closeModal),window.removeEventListener("keypress",closeModalEsc)}function closeModalClick(e){e.target===backdrop&&closeModal()}function closeModalEsc(e){"Escape"===e.code&&closeModal()}openModalBtn.addEventListener("click",openModal),closeModalBtn.addEventListener("click",closeModal);var listContent={free:{name:"Mobileapp.loyaout",license:"Free",author:"Mobile Market App.com",data:"21.02.2022",os:"Windows",language:"English",size:"4.16 MB",downloads:"964"},pay:{name:"Mobileapp.loyaout",license:"Pay",author:"Mobile Market App.com",data:"27.12.2022",os:"Windows, macOS, Linux",language:"English, Ukrainian",size:"5.20 MB",downloads:"128"}},refs={btnPlanFree:document.querySelector("[value='free']"),btnPlanPay:document.querySelector("[value='pay']"),name:document.querySelector(".js-name"),license:document.querySelector(".js-license"),author:document.querySelector(".js-author"),data:document.querySelector(".js-data"),os:document.querySelector(".js-os"),language:document.querySelector(".js-language"),size:document.querySelector(".js-size"),downloads:document.querySelector(".js-downloads")};refs.btnPlanFree.addEventListener("click",(function(){refs.name.textContent=listContent.free.name,refs.license.textContent=listContent.free.license,refs.author.textContent=listContent.free.author,refs.data.textContent=listContent.free.data,refs.os.textContent=listContent.free.os,refs.language.textContent=listContent.free.language,refs.size.textContent=listContent.free.size,refs.downloads.textContent=listContent.free.downloads})),refs.btnPlanPay.addEventListener("click",(function(){refs.name.textContent=listContent.pay.name,refs.license.textContent=listContent.pay.license,refs.author.textContent=listContent.pay.author,refs.data.textContent=listContent.pay.data,refs.os.textContent=listContent.pay.os,refs.language.textContent=listContent.pay.language,refs.size.textContent=listContent.pay.size,refs.downloads.textContent=listContent.pay.downloads}));
//# sourceMappingURL=index.108bd2dc.js.map
