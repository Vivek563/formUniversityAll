
        var indianDonor = document.getElementById("indian_donor");
        var foreignDonor = document.getElementById("foreign_donor");
        var offlinePayment = document.getElementById("offline");
        var onlinePayment = document.getElementById("online");
        var amount = document.getElementById("amount-helper");

       
        indianDonor.onclick = function() {
            if(indianDonor.checked){
                indianDonor.parentElement.classList.add('active');
                foreignDonor.parentElement.classList.remove('active')
            }
        }

        foreignDonor.onclick = function() {
            if(foreignDonor.checked){
                indianDonor.parentElement.classList.remove('active');
                foreignDonor.parentElement.classList.add('active')
            }
        }

        offlinePayment.onclick = function() {
            if(offlinePayment.checked){
                offlinePayment.parentElement.classList.add('active');
                onlinePayment.parentElement.classList.remove('active')
            }
        }

        onlinePayment.onclick = function() {
            if(onlinePayment.checked){
                offlinePayment.parentElement.classList.remove('active');
                onlinePayment.parentElement.classList.add('active')
            }
        }