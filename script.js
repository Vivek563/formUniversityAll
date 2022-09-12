
        var indianDonor = document.getElementById("indian_donor");
        var foreignDonor = document.getElementById("foreign_donor");
        var offlinePayment = document.getElementById("offline");
        var onlinePayment = document.getElementById("online");
        var amount = document.getElementById("amount-helper");
        var country = document.getElementById("country");
       
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

        document
        .getElementById("amount-helper")
        .addEventListener("click", function (e) {
          // e.target is our targetted element.
          // try doing console.log(e.target.nodeName), it will result LI
          if (e.target && e.target.nodeName == "LI") {
            document.getElementById("amount").value = e.target.innerText;
            document.getElementById("amount").focus();
          }
        });

        country.onclick = function() {
            var code = country.value;
            
            if(code == "India"){

                document.getElementById("state-title").classList.remove("hidden");
                document.getElementById("state").classList.remove("hidden");
            }
            else {
                document.getElementById("state").classList.add("hidden");
                document.getElementById("state-title").classList.add("hidden");
            }
        }