frappe.ui.form.on('Fees Library', {
	refresh(frm) {
	    
	    // Marco's Part
	    
	    console.log("outside of if statement");
	    
	    $('[data-fieldname="surcharge"]').click( () => {
		   if ($('[data-fieldname="surcharge"]').is(":checked")) {
    		    console.log('CHECKED');
    		    $('[data-fieldname="surcharge_type"]').show();
    		    $('[data-fieldname="float_8"]').show();
    		    float_8
    		}
    		else {
    		    console.log("unchecked");
    		    $('[data-fieldname="surcharge_type"]').hide();
    		    $('[data-fieldname="float_8"]').hide();
    		}
		})
	    
		
		// Ken's Part
	    
		console.log("test")
// 		fetch(url_base + '/api/resource/Academic Department?fields=["programs_per_department"]')
// 		.then(response => response.json())
// 		.then(data => {
//             	data.data.forEach(function(value) {   
// 				$('#acadcDept')
// 				.append($("<option></option>")
// 				.attr("value", value.name)
// 				.text(value.academic_department)); 
// 			});
// 		});

    var acad_value = "D05";
	const get_currriculum = (acad_value) => {
		console.log(acad_value)
// 		$('.table-body').html('<p id="hide"></p>')
		// Fetch data depends on acad dept and program
		fetch(url_base + '/api/resource/Academic Department/' + acad_value)
		.then(res => res.json())
		.then(res => {
			var acadArray = res.data.programs_per_department
			console.log("Array")
			console.log(acadArray)
// 			acadArray.forEach(element => {
// 				$('#hide').hide()
// 				$('.table-body').append(`
// 				<tr>
// 					<td class="th-code">${element.subject_code}</td>
// 					<td>${element.title}</td>
// 				</tr>
// 				`)
// 			});
		})
		.catch((error) => {
// 			$('.table-body').html(`
// 			<tr>
// 				<td class="th-code"> Select academic department</td>
// 				<td></td>
// 			</tr>
// 			`)
		});
	}
    get_currriculum(acad_value);
    $('[data-fieldname = "program"]').empty();
	}
})