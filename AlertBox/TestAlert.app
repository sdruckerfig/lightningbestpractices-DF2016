<aura:application extends="force:slds" >
	
    <div class="slds-align--absolute-center" style="padding:10px">
    	<lightning:button label="Click Me" onclick="{!c.showAlert}" />
    </div>
    <c:alert aura:Id="alert"/>
    
</aura:application>