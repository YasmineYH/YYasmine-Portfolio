Private Class EmployeeDetailsForm

    CmbDepartment.Items.Add("CSC")
    CmbDepartment.Items.Add("ICS")
    CmbDepartment.Items.Add("TCS")

    CmbStatus.Items.Add("Single")
    CmbStatus.Items.Add("Married")
    CmbStatus.Items.Add("Divorced")

    CmbGender.Items.Add("Male")
    CmbGender.Items.Add("Female")

    Private Sub CmdSaveDetails_Click (ByVal sender As System.object, ByVal e As System.EventArgs) Handles CmdSaveDetails.Click

        Dim strSurname As String
        Dim strFirstname As String
        Dim strOthername As String
        Dim dteDateOfBirth As Date
        Dim strDepartment As String
        Dim strStatus As String
        Dim strGender As String
        Dim strEmailAddress As String
        Dim strPhoneNumber As String
        Dim strHomeAddress As String
        Dim strNextOfKin As String
        Dim strRelWithKin As String
        Dim strAge As Integer

        strSurname = txtSurname.Text
        strFirstname = txtFirstname.Text
        strOthername = txtOthername.Text
        dteDateOfBirth = Format(txtDateOfBirth.Text, "DD-MMM-YYYY")
        strDepartment = CmbDepartment.SelectedItem
        strStatus = CmbStatus.SelectedItem
        strGender = CmbGender.SelectedItem
        strHomeAddress = txtHomeAddress.Text
        strNextOfKin = txtNextOfKin.Text
        strRelWithKin = txtRelWithKin.Text

        If (txtPhoneNumber.Length() = 11)
            strPhoneNumber = txtPhoneNumber.Text
        Else
            MessageBox.Show("Your phone number is not in the correct format.")
        End If

        If (InStr(txtEmailAddress, "@"))
            strEmailAddress = strEmailAddress.Text
        Else
            MessageBox.Show("Your email address is not in the correct format.")
        End If

        strAge = DateDiff(DateInterval.Year, dteDateOfBirth, DateTime.Today)
        txtAge.Text = strAge

        MessageBox.Show("Employee details have been saved successfully.")

    End Sub

End Class