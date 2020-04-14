Feature: import UFDR to a new case
  @debug
  Scenario: Adding ToDos
  	Given Phoenix application is open
	When I click on new case	
	When I add new case name "firstUFDR"
  	When I add new case number "123"
  	When I add new created by "orasio"
  	When I click next
  	When I add ufdr file "C:\Code\cellebrite\phoenix\src\IO\phoenix-io-ufdr\Test.IO.Ufdr\bin\Debug\Call\Android Calls Data Integrity.ufdr"
  	When I click to approve ufdr
  	When I click next again
	When I click done
	Then I expect to find a case with title "firstUFDR"