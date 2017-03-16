/*
 * Author       : zoho_iryna12
 * Generated on : 15-Mar-2017 20:37:07 PDT
 * Version      : 3.0
 */
application "vyshyvanka_site"
{
    date format = "dd-MMM-yyyy"
    time zone = "Asia/Tokyo"
    section Customer_Orders
    {
        displayname = "Customer Orders"
        form  Customer_Orders
        {
            displayname  =  "Customer Orders"
            success message  =  "Data Added Successfully!"
            field alignment = right
            
            must  have  Name
            (
                type  =  text
                width  =  200px
            )

            must  have  Date_field
            (
                displayname  =  "Date"
                type  =  date
                width  =  200px
                alloweddays = 0,1,2,3,4,5,6
            )

            must  have  Pizza_Type
            (
                displayname  =  "Klass"
                type  =  picklist
                values  =  {"大森",   "たまプラーザ"}
                initial value  =  "たまプラーザ"
                sortorder  =  ascending
                width  =  200px
            )

            The_number_of_people
            (
                displayname  =  "The number of people"
                type  =  number
                width  =  200px
            )

            actions
            {
                on add
                {
                    submit
                    (
                        type  =  submit
                        displayname  =  "Submit"
                        PreSubmit = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><preoncommit><openurl/><successmsg><type><![CDATA[sucmsgtimeout]]></type><value><![CDATA[Data Added Successfully!]]></value><timeout><![CDATA[2]]></timeout></successmsg><sendmail><include_field_values><![CDATA[true]]></include_field_values><language><![CDATA[English]]></language><enabled><![CDATA[true]]></enabled><subject><![CDATA[vyshyvanka_site : New entry added]]></subject><conttype><![CDATA[HTML]]></conttype><template_type><![CDATA[as_Inline]]></template_type><from><![CDATA[zoho.adminuserid]]></from><to><![CDATA[zoho.adminuserid]]></to><message><![CDATA[Hello,<br /><br />A new entry added in &#39;Customer Orders&#39; form of &#39;vyshyvanka_site&#39; application.<br /><div><br /></div>]]></message></sendmail></preoncommit>"
                    )
                    reset
                    (
                        type  =  reset
                        displayname  =  "Reset"
                    )
                }
                on edit
                {
                    update
                    (
                        type  =  submit
                        displayname  =  "Update"
                    )
                    cancel
                    (
                        type  =  cancel
                        displayname  =  "Cancel"
                    )
                }
            }
                    }

        list  Customer_Orders_Report
        {
            displayname = "Customer Orders Report"
            show  all  rows  from  Customer_Orders 
            (
                Name
                Pizza_Type as "Pizza Type"
                The_number_of_people as "The number of people"
                Date_field as "Date"
            )
            options
            (
                menu alignment = left and right
            )
        }

    }

    customize
    {
        layout = "tab"
        base theme = "professional"
        color = "black"
        new theme = 2
    }
    share_settings
    {
		"Administrator"
		{
			name = "Administrator"
			type = Users_Permissions
			permissions = {Chat:true, Predefined:true}

		}
		"Member"
		{
			name = "Member"
			type = Users_Permissions
			permissions = {Chat:false, Predefined:true}

		}
		"User"
		{
			name = "User"
			type = Users_Permissions
			permissions = {Chat:false, Predefined:true}

		}
    }
}