/* eslint-disable */
const items = [
  {
    "identifier": "card-08a-baseline",
    "guid": "0000-0009-0002a",
    "submissionMode": "simultaneous",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation=" http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="card-08a-baseline" title="card 08a baseline" adaptive="false" time-dependent="false">
      <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE"/>
      <qti-response-declaration base-type="float" cardinality="single" identifier="RESPONSE_FLOAT" />
      <qti-response-declaration base-type="boolean" cardinality="single" identifier="EndAttempt" />
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE" normal-maximum="1" normal-minimum="0">
        <qti-default-value>
          <qti-value>0</qti-value>
        </qti-default-value>
      </qti-outcome-declaration>
      <!-- Define a feedback variable; its baseType is "identifier" so that it can contain the identifier of the feedback message -->
      <qti-outcome-declaration base-type="identifier" cardinality="single" identifier="FEEDBACK" />
      <!-- Define a variable used to display the student's response in feedback -->
      <qti-outcome-declaration base-type="string" cardinality="single" identifier="FEEDBACK_RESPONSE" />
      <qti-template-declaration identifier="SALESPRICE" cardinality="single" base-type="float" math-variable="false" param-variable="false"/>
      <qti-template-declaration identifier="TAX_PERCENT" cardinality="single" base-type="float" math-variable="false" param-variable="false"/>
      <qti-template-declaration identifier="SALESTAX" cardinality="single" base-type="float" math-variable="false" param-variable="false"/>
      <qti-template-declaration identifier="TOTAL" cardinality="single" base-type="float" math-variable="false" param-variable="false"/>
      <qti-template-processing>
        <qti-set-template-value identifier="SALESPRICE">
          <qti-integer-to-float>
            <qti-random-integer min="2" max="99" step="1"/>
          </qti-integer-to-float>
        </qti-set-template-value>
        <qti-set-template-value identifier="TAX_PERCENT">
          <qti-divide>
            <qti-random-integer min="300" max="700" step="25"/>
            <qti-base-value base-type="float">100</qti-base-value>
          </qti-divide>
        </qti-set-template-value>
        <qti-set-template-value identifier="SALESTAX">
          <qti-divide>
            <qti-variable identifier="TAX_PERCENT"/>
            <qti-base-value base-type="float">100</qti-base-value>
          </qti-divide>
        </qti-set-template-value>
        <qti-set-template-value identifier="TOTAL">
          <qti-round-to rounding-mode="decimalPlaces" figures="2">
            <qti-product>
              <qti-variable identifier="SALESTAX"/>
              <qti-variable identifier="SALESPRICE"/>
            </qti-product>
          </qti-round-to>
        </qti-set-template-value>
        <qti-set-correct-response identifier="RESPONSE_FLOAT">
          <qti-variable identifier="TOTAL"/>
        </qti-set-correct-response>
      </qti-template-processing>
      <qti-item-body>
        <div class="qti-layout-row">
          <div class="qti-layout-col8">
            <div class="qti3-player-item-card-bordered-rounded qti3-player-item-card-raised-rounded">
              <div class="qti3-player-item-card-body qti-padding-2">
                <div class="qti-layout-row">
                  <div class="qti-layout-col8">
                    <p>Find the sales tax.</p>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th class="qti-align-center" colspan="3">Sales Tax</th>
                        </tr>
                        <tr>
                          <th scope="col" class="qti-align-center qti-width-1-3">Selling Price</th>
                          <th scope="col" class="qti-align-center qti-width-1-3">Rate of Sales Tax</th>
                          <th scope="col" class="qti-align-center qti-width-1-3">Sales Tax</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="qti-align-center">$<qti-printed-variable identifier="SALESPRICE" format="%.2f" /></td>
                          <td class="qti-align-center"><qti-printed-variable identifier="TAX_PERCENT"/>%</td>
                          <td class="qti-align-center">?</td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                  </div>
                </div>
                <p>
                  The sales tax is $ <qti-text-entry-interaction class="qti-input-width-6" pattern-mask="([0-9.\\-]{0,8})" response-identifier="RESPONSE" /> .</p><p>Hint: the correct answer is $<qti-printed-variable identifier="TOTAL" format="%.2f"/>
                </p>
              </div><!-- /card-body -->
              <div class="qti3-player-item-card-footer qti-height-14 qti-padding-2">
                <qti-end-attempt-interaction title="Check Answer" class="endattempt-controller-bar" response-identifier="EndAttempt" data-steps="1" data-hideprogress="true" data-hastemplates="true"/>
              </div><!-- /card-footer -->
            </div><!-- /card -->
          </div>
          <div class="qti-layout-col4">
            <div class="qti-well qti-margin-b-0">
              <strong>About This Item</strong>
              <p>
                <small>This is the first of a set of three  "Find the Sales Tax" items which demonstrate various adaptive and templating capabilities of the QTI 3 Player component and of QTI itself.</small>
              </p>
              <p>
                <small>In this item, QTI template processing generates variable values for a Selling Price, a Sales Tax Rate, and the correct answer for the given values.</small>
              </p>
              <p>
                <small>Upon clicking the <strong>Check Answer</strong> button, QTI 3 Player runs response processing, evaluates the response, and produces Modal Feedback.</small>
              </p>
              <p class="qti-margin-b-0">
                <small>Click <strong>New Question</strong> to generate a new "Find the Sales Tax" item and new template values.</small>
              </p>
            </div>
          </div>
        </div><!-- /row -->
      </qti-item-body>
      <qti-response-processing>
        <!-- Save off the response so we can echo it back to the student in feedback - if needed -->
        <qti-set-outcome-value identifier="FEEDBACK_RESPONSE">
          <qti-variable identifier="RESPONSE"/>
        </qti-set-outcome-value>
        <qti-response-condition>
          <!-- Evaluate the response -->
          <qti-response-if>
            <qti-is-null>
              <qti-variable identifier="RESPONSE"/>
            </qti-is-null>
            <qti-set-outcome-value identifier="FEEDBACK">
              <qti-base-value base-type="identifier">incorrect</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-if>
          <qti-response-else-if>
            <!-- Check numeric equivalence -->
            <qti-equal tolerance-mode="exact">
              <!-- The value of RESPONSE is compared with the correct value identified in the RESPONSE declaration-->
              <qti-custom-operator class="math.stringToFloat">
                <qti-variable identifier="RESPONSE"/>
              </qti-custom-operator>
              <qti-correct identifier="RESPONSE_FLOAT"/>
            </qti-equal>
            <!-- Response is numerically equivalent to the correct response.  Now check form. -->
            <qti-response-condition>
              <qti-response-if>
                <qti-pattern-match pattern="[0-9]*\\.[0-9]{2}">
                  <qti-variable identifier="RESPONSE"/>
                </qti-pattern-match>
                <qti-set-outcome-value identifier="SCORE">
                  <qti-base-value base-type="float">1</qti-base-value>
                </qti-set-outcome-value>
                <qti-set-outcome-value identifier="FEEDBACK">
                  <qti-base-value base-type="identifier">correct</qti-base-value>
                </qti-set-outcome-value>
              </qti-response-if>
              <qti-response-else>
                <qti-set-outcome-value identifier="FEEDBACK">
                  <qti-base-value base-type="identifier">wrongformat</qti-base-value>
                </qti-set-outcome-value>
              </qti-response-else>
            </qti-response-condition>
          </qti-response-else-if>
          <qti-response-else>
            <!--Depending on whether the input matches the correct answer or not, FEEDBACK  is given the value of the identifier of the appropriate feedback message-->
            <qti-set-outcome-value identifier="FEEDBACK">
              <qti-base-value base-type="identifier">incorrect</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-else>
        </qti-response-condition>
      </qti-response-processing>
      <!-- Note how the identifiers in the following modalFeedback elements match those of the setOutcomeValue elements above -->
      <qti-modal-feedback outcome-identifier="FEEDBACK" show-hide="show" identifier="correct">
        <qti-content-body>
          <p>Well done! Correct.</p>
        </qti-content-body>
      </qti-modal-feedback>
      <qti-modal-feedback outcome-identifier="FEEDBACK" show-hide="show" identifier="wrongformat">
        <qti-content-body>
          <p>Almost correct. You entered the correct sales tax amount, but in the <em>wrong format</em>.</p>
          <p>You entered: <qti-printed-variable identifier="FEEDBACK_RESPONSE" /></p>
          <p>However, currency is expressed with exactly two digits after the decimal point.</p>
        </qti-content-body>
      </qti-modal-feedback>
      <qti-modal-feedback outcome-identifier="FEEDBACK" show-hide="show" identifier="incorrect">
        <qti-content-body>
          <p>Sorry. Incorrect.</p>
        </qti-content-body>
      </qti-modal-feedback>
    </qti-assessment-item>`
  },
  {
    "identifier": "adaptivecard-08c-showexample",
    "guid": "0000-0009-0002d",
    "submissionMode": "simultaneous",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?><qti-assessment-item xmlns=\"http://www.imsglobal.org/xsd/imsqtiasi_v3p0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"   xsi:schemaLocation=\" http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd \" identifier=\"adaptivecard-08c-showexample\" title=\"adaptive card 08c showexample\" adaptive=\"true\" time-dependent=\"false\"><qti-response-declaration base-type=\"boolean\" cardinality=\"single\" identifier=\"EndAttempt\" /><qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\" normal-maximum=\"1\" normal-minimum=\"0\">  <qti-default-value>    <qti-value>0</qti-value>  </qti-default-value></qti-outcome-declaration><!-- Define a STEP variable to keep track of our current step -->  <qti-outcome-declaration base-type=\"integer\" cardinality=\"single\" identifier=\"STEP\">  <qti-default-value>    <qti-value>1</qti-value>  </qti-default-value></qti-outcome-declaration>  <!-- Define a feedback variable; its cardinality is \"multiple\" so that it can contain the identifiers of several      feedback elements, and in this case it is initialized to the identifier, step1, of the first part of this      adaptive question --><qti-outcome-declaration base-type=\"identifier\" cardinality=\"multiple\" identifier=\"BODY\">  <qti-default-value><qti-value>step1</qti-value>  </qti-default-value></qti-outcome-declaration><qti-template-declaration identifier=\"SALESPRICE\" cardinality=\"single\" base-type=\"float\" math-variable=\"false\" param-variable=\"false\"/><qti-template-declaration identifier=\"TAX_PERCENT\" cardinality=\"single\" base-type=\"float\" math-variable=\"true\" param-variable=\"false\"/><qti-template-declaration identifier=\"SALESTAX\" cardinality=\"single\" base-type=\"float\" math-variable=\"false\" param-variable=\"false\"/><qti-template-declaration identifier=\"TOTAL\" cardinality=\"single\" base-type=\"float\" math-variable=\"false\" param-variable=\"false\"/>  <qti-template-processing>    <qti-set-template-value identifier=\"SALESPRICE\"><qti-integer-to-float><qti-random-integer min=\"2\" max=\"99\" step=\"1\"/></qti-integer-to-float>    </qti-set-template-value>    <qti-set-template-value identifier=\"TAX_PERCENT\"><qti-divide><qti-random-integer min=\"300\" max=\"700\" step=\"25\"/><qti-base-value base-type=\"float\">100</qti-base-value></qti-divide>    </qti-set-template-value>    <qti-set-template-value identifier=\"SALESTAX\"><qti-divide><qti-variable identifier=\"TAX_PERCENT\"/><qti-base-value base-type=\"float\">100</qti-base-value></qti-divide>    </qti-set-template-value>    <qti-set-template-value identifier=\"TOTAL\"><qti-round-to rounding-mode=\"decimalPlaces\" figures=\"2\"><qti-product><qti-variable identifier=\"SALESTAX\"/><qti-variable identifier=\"SALESPRICE\"/></qti-product></qti-round-to>    </qti-set-template-value></qti-template-processing><qti-item-body><div class=\"qti-layout-row\"><div class=\"qti-layout-col8\"><div class=\"qti3-player-item-card-bordered-rounded qti3-player-item-card-raised-rounded\"><div class=\"qti3-player-item-card-body qti-padding-2\"><div class=\"qti-layout-row\"><div class=\"qti-layout-col8\"><p>Find the sales tax.</p><table class=\"table table-bordered\"><thead><tr><th class=\"qti-align-center\" colspan=\"3\">Sales Tax</th></tr><tr><th scope=\"col\" class=\"qti-align-center qti-width-1-3\">Selling Price</th><th scope=\"col\" class=\"qti-align-center qti-width-1-3\">Rate of Sales Tax</th><th scope=\"col\" class=\"qti-align-center qti-width-1-3\">Sales Tax</th></tr></thead><tbody><tr><td class=\"qti-align-center\">$<qti-printed-variable identifier=\"SALESPRICE\" format=\"%.2f\" /></td><td class=\"qti-align-center\"><qti-printed-variable identifier=\"TAX_PERCENT\"/>%</td><td class=\"qti-align-center\">?</td></tr></tbody></table><hr /></div></div><qti-feedback-block id=\"feedbackBlock1\" identifier=\"step1\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body><p>Use the percent equation, part = percent \u00D7 whole, to find the sales tax.</p></qti-content-body></qti-feedback-block><qti-feedback-block id=\"feedbackBlock2\" identifier=\"step2\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body><p>The sales rate times the selling price represents the dollar amount of the sales tax.</p></qti-content-body></qti-feedback-block><qti-feedback-block id=\"feedbackBlock3\" identifier=\"step3\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body><p>Substitute into the percent equation.</p><table class=\"qti-margin-s-2\"><tbody><tr><td class=\"qti-align-right qti-valign-middle qti-width-24\">sales tax</td><td class=\"qti-valign-middle\">= sales tax rate \u00D7 selling price</td></tr></tbody></table></qti-content-body>          </qti-feedback-block><qti-feedback-block id=\"feedbackBlock4\" identifier=\"step4\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body><table class=\"qti-margin-s-2\"><tbody><tr><td class=\"qti-align-right qti-valign-middle qti-width-24\"><span> </span></td><td class=\"qti-valign-middle\">= <qti-printed-variable identifier=\"TAX_PERCENT\"/>% \u00D7 <qti-printed-variable identifier=\"SALESPRICE\" format=\"%.2f\" /></td></tr></tbody></table></qti-content-body></qti-feedback-block><qti-feedback-block id=\"feedbackBlock5\" identifier=\"step5\" outcome-identifier=\"BODY\" show-hide=\"show\"> <qti-content-body><p class=\"qti-margin-t-2\">The fraction form of the sales tax rate is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\" overflow=\"scroll\"><mrow><mfrac><mrow><mi>TAX_PERCENT</mi></mrow><mrow><mi>100</mi></mrow></mfrac></mrow></math>.</p></qti-content-body></qti-feedback-block><qti-feedback-block id=\"feedbackBlock6\" identifier=\"step6\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body><p>Solve the percent equation.</p><table class=\"qti-margin-s-2\"><tbody><tr><td class=\"qti-align-right qti-valign-middle qti-width-24\">sales tax</td><td class=\"qti-valign-middle\">= <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\" overflow=\"scroll\">                  <mrow><mfrac><mrow><mi>TAX_PERCENT</mi></mrow><mrow><mi>100</mi></mrow></mfrac>                  </mrow></math> \u00D7 <qti-printed-variable identifier=\"SALESPRICE\" format=\"%.2f\" /></td></tr></tbody></table></qti-content-body></qti-feedback-block><qti-feedback-block id=\"feedbackBlock6\" identifier=\"step7\" outcome-identifier=\"BODY\" show-hide=\"show\"> <qti-content-body><table class=\"qti-margin-s-2 qti-margin-b-1\"><tbody><tr><td class=\"qti-width-24\"><span> </span></td><td>= <qti-printed-variable identifier=\"TOTAL\" format=\"%.2f\" /></td></tr></tbody></table></qti-content-body></qti-feedback-block><qti-feedback-block id=\"feedbackBlock6\" identifier=\"step8\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body><p class=\"qti-margin-t-2 qti-margin-b-3\">The sales tax is $<qti-printed-variable identifier=\"TOTAL\" format=\"%.2f\" />.</p></qti-content-body></qti-feedback-block></div> <!-- /card-body --><div class=\"qti3-player-item-card-footer qti-height-14 qti-padding-2\"><qti-end-attempt-interaction title=\"Continue\" class=\"endattempt-controller-bar\" data-steps=\"8\" data-controller-type=\"showexample\" data-hastemplates=\"true\" response-identifier=\"EndAttempt\"/></div><!-- /card-footer --></div><!-- /card --></div><div class=\"qti-layout-col4\"><div class=\"qti-well qti-margin-b-0\"><strong>About This Item</strong><p><small>This version of the \"Find the Sales Tax\" item demonstrates how a QTI adaptive item and template processing can be wired together to produce an experience that is more like a simulation than a measurement instrument.</small></p><p><small>QTI template processing generates variable values that are injected into the item's Feedback blocks to provide a solution method for computing Sales Tax from a given Selling Price and Sales Tax Rate.</small></p><p><small>Upon clicking the <strong>Continue</strong> button, QTI 3 Player evaluates the current step in the solution method and reveals the next feedback.</small></p><p class=\"qti-margin-b-0\"><small>Click <strong>New Question</strong> to generate a new \"Find the Sales Tax\" item that follows the same solution method.</small></p></div></div></div><!-- /row --></qti-item-body><qti-response-processing>  <qti-response-condition><qti-response-if><qti-equal><qti-variable identifier=\"STEP\"/><qti-base-value base-type=\"integer\">1</qti-base-value></qti-equal><qti-set-outcome-value identifier=\"STEP\"><qti-base-value base-type=\"integer\">2</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"BODY\"><qti-multiple><qti-variable identifier=\"BODY\"/><qti-base-value base-type=\"identifier\">step2</qti-base-value></qti-multiple></qti-set-outcome-value>    </qti-response-if>    <qti-response-else-if><qti-equal><qti-variable identifier=\"STEP\"/><qti-base-value base-type=\"integer\">2</qti-base-value></qti-equal><qti-set-outcome-value identifier=\"STEP\"><qti-base-value base-type=\"integer\">3</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"BODY\"><qti-multiple><qti-variable identifier=\"BODY\"/><qti-base-value base-type=\"identifier\">step3</qti-base-value></qti-multiple></qti-set-outcome-value>    </qti-response-else-if>    <qti-response-else-if><qti-equal><qti-variable identifier=\"STEP\"/><qti-base-value base-type=\"integer\">3</qti-base-value></qti-equal><qti-set-outcome-value identifier=\"STEP\"><qti-base-value base-type=\"integer\">4</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"BODY\"><qti-multiple><qti-variable identifier=\"BODY\"/><qti-base-value base-type=\"identifier\">step4</qti-base-value></qti-multiple></qti-set-outcome-value>    </qti-response-else-if>    <qti-response-else-if><qti-equal><qti-variable identifier=\"STEP\"/><qti-base-value base-type=\"integer\">4</qti-base-value></qti-equal><qti-set-outcome-value identifier=\"STEP\"><qti-base-value base-type=\"integer\">5</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"BODY\"><qti-multiple><qti-variable identifier=\"BODY\"/><qti-base-value base-type=\"identifier\">step5</qti-base-value></qti-multiple></qti-set-outcome-value></qti-response-else-if><qti-response-else-if><qti-equal><qti-variable identifier=\"STEP\"/><qti-base-value base-type=\"integer\">5</qti-base-value></qti-equal><qti-set-outcome-value identifier=\"STEP\"><qti-base-value base-type=\"integer\">6</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"BODY\"><qti-multiple><qti-variable identifier=\"BODY\"/><qti-base-value base-type=\"identifier\">step6</qti-base-value></qti-multiple></qti-set-outcome-value></qti-response-else-if><qti-response-else-if><qti-equal><qti-variable identifier=\"STEP\"/><qti-base-value base-type=\"integer\">6</qti-base-value></qti-equal><qti-set-outcome-value identifier=\"STEP\"><qti-base-value base-type=\"integer\">7</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"BODY\"><qti-multiple><qti-variable identifier=\"BODY\"/><qti-base-value base-type=\"identifier\">step7</qti-base-value></qti-multiple></qti-set-outcome-value></qti-response-else-if><qti-response-else-if><qti-equal><qti-variable identifier=\"STEP\"/><qti-base-value base-type=\"integer\">7</qti-base-value></qti-equal><qti-set-outcome-value identifier=\"STEP\"><qti-base-value base-type=\"integer\">8</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"BODY\"><qti-multiple><qti-variable identifier=\"BODY\"/><qti-base-value base-type=\"identifier\">step8</qti-base-value></qti-multiple></qti-set-outcome-value></qti-response-else-if><qti-response-else><qti-set-outcome-value identifier=\"STEP\"><qti-base-value base-type=\"integer\">8</qti-base-value></qti-set-outcome-value><!-- completionStatus must be specifically set to completed in adaptive questions --><qti-set-outcome-value identifier=\"completionStatus\"><qti-base-value base-type=\"identifier\">completed</qti-base-value></qti-set-outcome-value></qti-response-else></qti-response-condition></qti-response-processing></qti-assessment-item>"
  },
  {
    "identifier": "adaptivecard-08b-solvethis",
    "guid": "0000-0009-0002e",
    "submissionMode": "simultaneous",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?><qti-assessment-item xmlns=\"http://www.imsglobal.org/xsd/imsqtiasi_v3p0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\" http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd \" identifier=\"adaptivecard-08b-solvethis\" title=\"adaptive card 08b solvethis\" adaptive=\"true\" time-dependent=\"false\"><qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE2\"><qti-correct-response><qti-value>A</qti-value></qti-correct-response></qti-response-declaration><qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE4\"/><qti-response-declaration base-type=\"float\" cardinality=\"single\" identifier=\"RESPONSE4_FLOAT\"/><qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE7\"/><qti-response-declaration base-type=\"float\" cardinality=\"single\" identifier=\"RESPONSE7_FLOAT\"/><qti-response-declaration base-type=\"boolean\" cardinality=\"single\" identifier=\"EndAttempt\" />  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\" normal-maximum=\"1\" normal-minimum=\"0\">  <qti-default-value>    <qti-value>0</qti-value>  </qti-default-value></qti-outcome-declaration><!-- Define a STEP variable to keep track of our current step -->  <qti-outcome-declaration base-type=\"integer\" cardinality=\"single\" identifier=\"STEP\">  <qti-default-value>    <qti-value>1</qti-value>  </qti-default-value></qti-outcome-declaration>  <!-- Define a feedback variable; its cardinality is \"multiple\" so that it can contain the identifiers of several      feedback elements, and in this case it is initialized to the identifier, step1, of the first part of this      adaptive question -->            <qti-outcome-declaration base-type=\"identifier\" cardinality=\"multiple\" identifier=\"BODY\">  <qti-default-value>    <qti-value>step1</qti-value>  </qti-default-value></qti-outcome-declaration><qti-outcome-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"FEEDBACK2\" /><qti-outcome-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"FEEDBACK4\" /><qti-outcome-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"FEEDBACK7\" /><!-- Define a variable used to display the student's response in feedback --><qti-outcome-declaration base-type=\"string\" cardinality=\"single\" identifier=\"FEEDBACK7_RESPONSE\" /><qti-template-declaration identifier=\"SALESPRICE\" cardinality=\"single\" base-type=\"float\" math-variable=\"false\" param-variable=\"false\"/><qti-template-declaration identifier=\"TAX_PERCENT\" cardinality=\"single\" base-type=\"float\" math-variable=\"true\" param-variable=\"false\"/><qti-template-declaration identifier=\"SALESTAX\" cardinality=\"single\" base-type=\"float\" math-variable=\"false\" param-variable=\"false\"/><qti-template-declaration identifier=\"TOTAL\" cardinality=\"single\" base-type=\"float\" math-variable=\"false\" param-variable=\"false\"/>  <qti-template-processing><qti-set-template-value identifier=\"SALESPRICE\"><qti-integer-to-float><qti-random-integer min=\"2\" max=\"99\" step=\"1\"/></qti-integer-to-float></qti-set-template-value><qti-set-template-value identifier=\"TAX_PERCENT\"><qti-divide><qti-random-integer min=\"300\" max=\"700\" step=\"25\"/>        <qti-base-value base-type=\"float\">100</qti-base-value>      </qti-divide>    </qti-set-template-value>    <qti-set-template-value identifier=\"SALESTAX\">      <qti-divide>        <qti-variable identifier=\"TAX_PERCENT\"/>        <qti-base-value base-type=\"float\">100</qti-base-value>      </qti-divide>    </qti-set-template-value>    <qti-set-template-value identifier=\"TOTAL\">      <qti-round-to rounding-mode=\"decimalPlaces\" figures=\"2\">        <qti-product>          <qti-variable identifier=\"SALESTAX\"/>          <qti-variable identifier=\"SALESPRICE\"/></qti-product>      </qti-round-to>    </qti-set-template-value>    <qti-set-correct-response identifier=\"RESPONSE4_FLOAT\">      <qti-variable identifier=\"SALESPRICE\"/>    </qti-set-correct-response>    <qti-set-correct-response identifier=\"RESPONSE7_FLOAT\">      <qti-variable identifier=\"TOTAL\"/>    </qti-set-correct-response></qti-template-processing><qti-item-body><div class=\"qti-layout-row\"><div class=\"qti-layout-col8\"><div class=\"qti3-player-item-card-bordered-rounded qti3-player-item-card-raised-rounded\"><div class=\"qti3-player-item-card-body qti-padding-2\"><div class=\"qti-layout-row\"><div class=\"qti-layout-col8\"><p>Find the sales tax.</p><table class=\"table table-bordered\"><thead><tr><th class=\"qti-align-center\" colspan=\"3\">Sales Tax</th></tr><tr><th scope=\"col\" class=\"qti-align-center qti-width-1-3\">Selling Price</th><th scope=\"col\" class=\"qti-align-center qti-width-1-3\">Rate of Sales Tax</th><th scope=\"col\" class=\"qti-align-center qti-width-1-3\">Sales Tax</th></tr></thead><tbody><tr><td class=\"qti-align-center\">$<qti-printed-variable identifier=\"SALESPRICE\" format=\"%.2f\" /></td><td class=\"qti-align-center\"><qti-printed-variable identifier=\"TAX_PERCENT\"/>%</td><td class=\"qti-align-center\">?</td></tr></tbody></table><hr /></div></div><qti-feedback-block id=\"feedbackBlock1\" identifier=\"step1\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body><p>Use the percent equation, part = percent \u00D7 whole, to find the sales tax.</p></qti-content-body></qti-feedback-block><qti-feedback-block id=\"feedbackBlock2\" identifier=\"step2\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body><p>Which of these represents the dollar amount of the sales tax?</p><qti-choice-interaction class=\"qti-labels-none\" max-choices=\"1\" response-identifier=\"RESPONSE2\" shuffle=\"true\"><qti-simple-choice identifier=\"A\">Sales tax rate times selling price</qti-simple-choice><qti-simple-choice identifier=\"B\">Sales tax rate divided by selling price</qti-simple-choice><qti-simple-choice identifier=\"C\">Sales tax rate plus selling price</qti-simple-choice><qti-simple-choice identifier=\"D\">Sales tax rate minus selling price</qti-simple-choice></qti-choice-interaction></qti-content-body></qti-feedback-block><qti-feedback-block id=\"feedbackBlock3\" identifier=\"step3\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body><p>Substitute into the percent equation.</p><table class=\"qti-margin-s-2\"><tbody><tr><td class=\"qti-align-right qti-valign-middle qti-width-24\">sales tax</td><td class=\"qti-valign-middle\">= sales tax rate \u00D7 selling price</td></tr></tbody></table></qti-content-body></qti-feedback-block><qti-feedback-block id=\"feedbackBlock4\" identifier=\"step4\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body><table class=\"qti-margin-s-2\"><tbody><tr><td class=\"qti-align-right qti-valign-middle qti-width-24\"><span> </span></td><td class=\"qti-valign-middle\">= <qti-printed-variable identifier=\"TAX_PERCENT\"/>% \u00D7 <qti-text-entry-interaction class=\"qti-input-width-6\" pattern-mask=\"([0-9.\\-]{0,8})\" response-identifier=\"RESPONSE4\"/></td></tr></tbody></table></qti-content-body></qti-feedback-block><qti-feedback-block id=\"feedbackBlock5\" identifier=\"step5\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body><p class=\"qti-margin-t-2\">The fraction form of the sales tax rate is <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\" overflow=\"scroll\"><mrow><mfrac><mrow><mi>TAX_PERCENT</mi></mrow><mrow><mi>100</mi></mrow></mfrac></mrow></math>.</p></qti-content-body></qti-feedback-block><qti-feedback-block id=\"feedbackBlock6\" identifier=\"step6\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body><p>Solve the percent equation.</p><table class=\"qti-margin-s-2\"><tbody><tr><td class=\"qti-align-right qti-valign-middle qti-width-24\">sales tax</td><td class=\"qti-valign-middle\">= <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\" overflow=\"scroll\"><mrow><mfrac><mrow><mi>TAX_PERCENT</mi></mrow><mrow><mi>100</mi></mrow></mfrac></mrow></math> \u00D7 <qti-printed-variable identifier=\"SALESPRICE\" format=\"%.2f\" /></td></tr></tbody></table></qti-content-body></qti-feedback-block><qti-feedback-block id=\"feedbackBlock7\" identifier=\"step7\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body><table class=\"qti-margin-s-2 qti-margin-b-1\"><tbody><tr><td class=\"qti-width-24\"><span> </span></td><td>= <qti-text-entry-interaction class=\"qti-input-width-6\" pattern-mask=\"([0-9.\\-]{0,8})\" response-identifier=\"RESPONSE7\"/> <span class=\"text-muted\">(Round to two decimal places as needed)</span></td></tr></tbody></table></qti-content-body></qti-feedback-block><qti-feedback-block id=\"feedbackBlock8\" identifier=\"step8\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body><p class=\"qti-margin-t-2 qti-margin-b-3\">Thus, the sales tax is $<qti-printed-variable identifier=\"TOTAL\" format=\"%.2f\" />.</p></qti-content-body></qti-feedback-block></div><!-- /card-body --><div class=\"qti3-player-item-card-footer qti-height-14 qti-padding-2\"><qti-end-attempt-interaction title=\"Continue\" class=\"endattempt-controller-bar\" data-steps=\"8\" data-controller-type=\"showexample\" data-hastemplates=\"true\" response-identifier=\"EndAttempt\"/></div><!-- /card-footer --></div><!-- /card --></div><div class=\"qti-layout-col4\"><div class=\"qti-well qti-margin-b-0\"><strong>About This Item</strong><p><small>Last in this \"Find the Sales Tax\" item set, this is an adaptive item with template processing to compute all of the values and correct responses revealed in the Block and Modal feedback steps.  A good example of how assessment can align with curriculum and instruction to improve learner outcomes.</small></p><p><small>Upon clicking the <strong>Continue</strong> button, QTI 3 Player ends the attempt, scores the interaction response (if any), and displays appropriate feedback.</small></p><p class=\"qti-margin-b-0\"><small>You can click the <strong>New Question</strong> button to generate a new \"Find the Sales Tax\" item that follows the same solution method.</small></p></div></div></div><!-- /row --></qti-item-body>     <qti-response-processing><qti-response-condition>    <qti-response-if>      <qti-equal>        <qti-variable identifier=\"STEP\"/>        <qti-base-value base-type=\"integer\">1</qti-base-value>      </qti-equal>      <qti-set-outcome-value identifier=\"STEP\">        <qti-base-value base-type=\"integer\">2</qti-base-value>      </qti-set-outcome-value>      <qti-set-outcome-value identifier=\"BODY\">        <qti-multiple>          <qti-variable identifier=\"BODY\"/>          <qti-base-value base-type=\"identifier\">step2</qti-base-value>        </qti-multiple>      </qti-set-outcome-value>    </qti-response-if>    <qti-response-else-if>      <qti-equal>        <qti-variable identifier=\"STEP\"/>        <qti-base-value base-type=\"integer\">2</qti-base-value>      </qti-equal>            <qti-response-condition>        <qti-response-if>          <qti-match>            <qti-variable identifier=\"RESPONSE2\"/>            <qti-correct identifier=\"RESPONSE2\"/>          </qti-match>          <qti-set-outcome-value identifier=\"FEEDBACK2\">            <qti-base-value base-type=\"identifier\">correct</qti-base-value>          </qti-set-outcome-value>        </qti-response-if>        <qti-response-else>          <qti-set-outcome-value identifier=\"FEEDBACK2\">            <qti-base-value base-type=\"identifier\">incorrect</qti-base-value>          </qti-set-outcome-value>        </qti-response-else>      </qti-response-condition>            <qti-set-outcome-value identifier=\"STEP\">        <qti-base-value base-type=\"integer\">3</qti-base-value>      </qti-set-outcome-value>      <qti-set-outcome-value identifier=\"BODY\">        <qti-multiple>          <qti-variable identifier=\"BODY\"/>          <qti-base-value base-type=\"identifier\">step3</qti-base-value>        </qti-multiple>      </qti-set-outcome-value>          </qti-response-else-if>    <qti-response-else-if>      <qti-equal>        <qti-variable identifier=\"STEP\"/>        <qti-base-value base-type=\"integer\">3</qti-base-value>      </qti-equal>            <!-- Turn off Step 2 Feedback -->      <qti-set-outcome-value identifier=\"FEEDBACK2\">      <qti-base-value base-type=\"identifier\">step3</qti-base-value>      </qti-set-outcome-value>            <qti-set-outcome-value identifier=\"STEP\">        <qti-base-value base-type=\"integer\">4</qti-base-value>      </qti-set-outcome-value>      <qti-set-outcome-value identifier=\"BODY\">        <qti-multiple>          <qti-variable identifier=\"BODY\"/>          <qti-base-value base-type=\"identifier\">step4</qti-base-value>        </qti-multiple>      </qti-set-outcome-value>    </qti-response-else-if>    <qti-response-else-if>      <qti-equal>        <qti-variable identifier=\"STEP\"/>        <qti-base-value base-type=\"integer\">4</qti-base-value>      </qti-equal>            <qti-response-condition>        <qti-response-if>          <!-- Check numeric equivalence -->          <qti-equal tolerance-mode=\"exact\">            <!-- The value of RESPONSE4 is compared with the correct value identified in the RESPONSE4_FLOAT declaration-->            <qti-custom-operator class=\"math.stringToFloat\">              <qti-variable identifier=\"RESPONSE4\"/>            </qti-custom-operator>            <qti-correct identifier=\"RESPONSE4_FLOAT\"/>          </qti-equal>          <qti-set-outcome-value identifier=\"FEEDBACK4\">            <qti-base-value base-type=\"identifier\">correct</qti-base-value>          </qti-set-outcome-value>        </qti-response-if>        <qti-response-else>          <qti-set-outcome-value identifier=\"FEEDBACK4\">            <qti-base-value base-type=\"identifier\">incorrect</qti-base-value>          </qti-set-outcome-value>        </qti-response-else>      </qti-response-condition>            <qti-set-outcome-value identifier=\"STEP\">        <qti-base-value base-type=\"integer\">5</qti-base-value>      </qti-set-outcome-value>      <qti-set-outcome-value identifier=\"BODY\">        <qti-multiple>          <qti-variable identifier=\"BODY\"/>          <qti-base-value base-type=\"identifier\">step5</qti-base-value>        </qti-multiple>      </qti-set-outcome-value>    </qti-response-else-if>    <qti-response-else-if>      <qti-equal>        <qti-variable identifier=\"STEP\"/>        <qti-base-value base-type=\"integer\">5</qti-base-value>      </qti-equal>            <!-- Turn off Step 4 Feedback -->      <qti-set-outcome-value identifier=\"FEEDBACK4\">        <qti-base-value base-type=\"identifier\">step5</qti-base-value>      </qti-set-outcome-value>            <qti-set-outcome-value identifier=\"STEP\">        <qti-base-value base-type=\"integer\">6</qti-base-value>      </qti-set-outcome-value>      <qti-set-outcome-value identifier=\"BODY\">        <qti-multiple>          <qti-variable identifier=\"BODY\"/>          <qti-base-value base-type=\"identifier\">step6</qti-base-value>        </qti-multiple>      </qti-set-outcome-value>    </qti-response-else-if>    <qti-response-else-if>      <qti-equal>        <qti-variable identifier=\"STEP\"/>        <qti-base-value base-type=\"integer\">6</qti-base-value>      </qti-equal>      <qti-set-outcome-value identifier=\"STEP\">        <qti-base-value base-type=\"integer\">7</qti-base-value>      </qti-set-outcome-value>      <qti-set-outcome-value identifier=\"BODY\">        <qti-multiple>          <qti-variable identifier=\"BODY\"/>          <qti-base-value base-type=\"identifier\">step7</qti-base-value>        </qti-multiple>      </qti-set-outcome-value>    </qti-response-else-if>    <qti-response-else-if>      <qti-equal>        <qti-variable identifier=\"STEP\"/>        <qti-base-value base-type=\"integer\">7</qti-base-value>      </qti-equal>            <!-- Save off the response so we can echo it back to the student in feedback - if needed -->      <qti-set-outcome-value identifier=\"FEEDBACK7_RESPONSE\">        <qti-variable identifier=\"RESPONSE7\"/>      </qti-set-outcome-value>            <qti-response-condition>        <qti-response-if>          <!-- Check numeric equivalence -->          <qti-equal tolerance-mode=\"exact\">            <!-- The value of RESPONSE7 is compared with the correct value identified in the RESPONSE7_FLOAT declaration-->            <qti-custom-operator class=\"math.stringToFloat\"><qti-variable identifier=\"RESPONSE7\"/></qti-custom-operator><qti-correct identifier=\"RESPONSE7_FLOAT\"/></qti-equal>                    <!-- Response is numerically equivalent to the correct response.  Now check form. -->          <qti-response-condition>            <qti-response-if>              <qti-pattern-match pattern=\"[0-9]*\\.[0-9]{2}\"><qti-variable identifier=\"RESPONSE7\"/>              </qti-pattern-match><qti-set-outcome-value identifier=\"SCORE\">        <qti-base-value base-type=\"float\">1</qti-base-value>      </qti-set-outcome-value>      <qti-set-outcome-value identifier=\"FEEDBACK7\">        <qti-base-value base-type=\"identifier\">correct</qti-base-value>              </qti-set-outcome-value>            </qti-response-if>            <qti-response-else>              <qti-set-outcome-value identifier=\"FEEDBACK7\">        <qti-base-value base-type=\"identifier\">wrongformat</qti-base-value>              </qti-set-outcome-value>            </qti-response-else>          </qti-response-condition>        </qti-response-if>        <qti-response-else>        <!--Depending on whether the input matches the correct answer or not, FEEDBACK  is given the value of the identifier of the appropriate feedback message-->          <qti-set-outcome-value identifier=\"FEEDBACK7\">            <qti-base-value base-type=\"identifier\">incorrect</qti-base-value>          </qti-set-outcome-value>        </qti-response-else>      </qti-response-condition>            <qti-set-outcome-value identifier=\"STEP\">        <qti-base-value base-type=\"integer\">8</qti-base-value>      </qti-set-outcome-value>      <qti-set-outcome-value identifier=\"BODY\">        <qti-multiple>          <qti-variable identifier=\"BODY\"/>          <qti-base-value base-type=\"identifier\">step8</qti-base-value>        </qti-multiple>      </qti-set-outcome-value>    </qti-response-else-if>        <qti-response-else>      <qti-set-outcome-value identifier=\"STEP\">        <qti-base-value base-type=\"integer\">8</qti-base-value></qti-set-outcome-value>      <!-- completionStatus must be specifically set to completed in adaptive questions -->      <qti-set-outcome-value identifier=\"completionStatus\">        <qti-base-value base-type=\"identifier\">completed</qti-base-value></qti-set-outcome-value></qti-response-else>  </qti-response-condition></qti-response-processing><qti-modal-feedback outcome-identifier=\"FEEDBACK2\" identifier=\"correct\" show-hide=\"show\">  <qti-content-body>Well done!</qti-content-body></qti-modal-feedback><qti-modal-feedback outcome-identifier=\"FEEDBACK2\" identifier=\"incorrect\" show-hide=\"show\">  <qti-content-body>    <p>Sorry, your answer is not correct.</p>    <p>Correct Answer: sales tax rate times selling price</p>  </qti-content-body></qti-modal-feedback><qti-modal-feedback outcome-identifier=\"FEEDBACK4\" identifier=\"correct\" show-hide=\"show\">  <qti-content-body>Fantastic!</qti-content-body></qti-modal-feedback><qti-modal-feedback outcome-identifier=\"FEEDBACK4\" identifier=\"incorrect\" show-hide=\"show\"><qti-content-body><p>Sorry, your answer is not correct.</p>    <p>Correct Answer: <qti-printed-variable identifier=\"SALESPRICE\" format=\"%.2f\" /></p></qti-content-body></qti-modal-feedback><!-- Note how the identifiers in the following modalFeedback elements match those of the setOutcomeValue elements above --><qti-modal-feedback outcome-identifier=\"FEEDBACK7\" show-hide=\"show\" identifier=\"correct\">  <qti-content-body><p>Well done!</p></qti-content-body></qti-modal-feedback><qti-modal-feedback outcome-identifier=\"FEEDBACK7\" show-hide=\"show\" identifier=\"wrongformat\"><qti-content-body><p>Almost correct. You entered the correct sales tax amount, but in the <em>wrong format</em>.</p><p>You entered: <qti-printed-variable identifier=\"FEEDBACK7_RESPONSE\" /></p><p>However, currency is expressed with exactly two digits after the decimal point.</p> </qti-content-body></qti-modal-feedback><qti-modal-feedback outcome-identifier=\"FEEDBACK7\" show-hide=\"show\" identifier=\"incorrect\"><qti-content-body><p>Sorry, your answer is not correct.</p><p>Correct Answer: <qti-printed-variable identifier=\"TOTAL\" format=\"%.2f\" /></p></qti-content-body></qti-modal-feedback></qti-assessment-item>"
  },
  {
    "identifier": "MontyHallTake2",
    "guid": "0000-0009-0002f",
    "submissionMode": "simultaneous",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><qti-assessment-item xmlns=\"http://www.imsglobal.org/xsd/imsqtiasi_v3p0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\" http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd \" identifier=\"adaptiveTemplate\" title=\"Monty Hall (Take 2)\" adaptive=\"true\" time-dependent=\"false\">  <qti-response-declaration identifier=\"DOOR\" cardinality=\"single\" base-type=\"identifier\"/><qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\"><qti-correct-response><qti-value>switchStrategy</qti-value>    </qti-correct-response></qti-response-declaration><qti-response-declaration identifier=\"EndAttempt\" cardinality=\"single\" base-type=\"boolean\"/><qti-outcome-declaration identifier=\"STORY\" cardinality=\"single\" base-type=\"identifier\"><qti-default-value><qti-value>openingGambit</qti-value></qti-default-value></qti-outcome-declaration><qti-outcome-declaration identifier=\"FEEDBACK\" cardinality=\"single\" base-type=\"identifier\"/><qti-outcome-declaration identifier=\"CLOSED\" cardinality=\"multiple\" base-type=\"identifier\"><qti-default-value><qti-value>DoorA</qti-value><qti-value>DoorB</qti-value><qti-value>DoorC</qti-value></qti-default-value></qti-outcome-declaration><qti-outcome-declaration identifier=\"GOATS\" cardinality=\"multiple\" base-type=\"identifier\"/><qti-outcome-declaration identifier=\"PRIZE\" cardinality=\"single\" base-type=\"identifier\"/><qti-outcome-declaration identifier=\"FIRSTDOOR\" cardinality=\"single\" base-type=\"identifier\"/><qti-outcome-declaration identifier=\"REVEALED\" cardinality=\"single\" base-type=\"identifier\"/><qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"/><qti-template-declaration identifier=\"PRIZEDOOR\" cardinality=\"single\" base-type=\"identifier\" math-variable=\"false\" param-variable=\"false\"/><qti-template-processing><qti-set-template-value identifier=\"PRIZEDOOR\"><qti-random><qti-multiple><qti-base-value base-type=\"identifier\">DoorA</qti-base-value><qti-base-value base-type=\"identifier\">DoorB</qti-base-value><qti-base-value base-type=\"identifier\">DoorC</qti-base-value></qti-multiple></qti-random></qti-set-template-value></qti-template-processing><qti-item-body><div class=\"qti-layout-row\"><div class=\"qti-layout-col8\"><div class=\"qti3-player-item-card-bordered-rounded qti3-player-item-card-raised-rounded\"><div class=\"qti3-player-item-card-body qti-padding-2\"><p>Monty Hall has hidden a prize behind one of these doors.</p><qti-feedback-block outcome-identifier=\"STORY\" show-hide=\"show\" identifier=\"openingGambit\"><qti-content-body><p>Monty invites you to choose one of the doors but won't let you open it just yet.</p></qti-content-body></qti-feedback-block><qti-feedback-block outcome-identifier=\"STORY\" show-hide=\"show\" identifier=\"tempter\"><qti-content-body><p>Monty opens one of the other doors to reveal - a goat!</p><p>He then asks you if you would like to change your mind or to stick with the door you originally chose. It's time to make your mind up, which door are you going to open?</p></qti-content-body></qti-feedback-block><qti-feedback-block outcome-identifier=\"STORY\" show-hide=\"show\" identifier=\"goat\"><qti-content-body><p>Bad luck! When you opened your chosen door it also revealed a goat.</p></qti-content-body></qti-feedback-block><qti-feedback-block outcome-identifier=\"STORY\" show-hide=\"show\" identifier=\"prize\"><qti-content-body><p>Congratulations! When you opened your chosen door it revealed a fantastic prize that you are now free to take home.</p></qti-content-body></qti-feedback-block><qti-choice-interaction class=\"qti-labels-none\" response-identifier=\"DOOR\" shuffle=\"false\" max-choices=\"1\"><qti-simple-choice identifier=\"DoorA\"><qti-feedback-inline outcome-identifier=\"CLOSED\" show-hide=\"show\" identifier=\"DoorA\"><img src=\"https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/red_door.png\" alt=\"The Red Door\"/></qti-feedback-inline><qti-feedback-inline outcome-identifier=\"GOATS\" show-hide=\"show\" identifier=\"DoorA\"><img src=\"https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/open_goat.png\" alt=\"An open door\"/> - this door is now open revealing a goat!</qti-feedback-inline><qti-feedback-inline outcome-identifier=\"PRIZE\" show-hide=\"show\" identifier=\"DoorA\"><img src=\"https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/open_car.png\" alt=\"An open door\"/> - this door is now open revealing a fantastic prize!</qti-feedback-inline></qti-simple-choice><qti-simple-choice identifier=\"DoorB\"><qti-feedback-inline outcome-identifier=\"CLOSED\" show-hide=\"show\" identifier=\"DoorB\"><img src=\"https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/green_door.png\" alt=\"The Green Door\"/></qti-feedback-inline><qti-feedback-inline outcome-identifier=\"GOATS\" show-hide=\"show\" identifier=\"DoorB\"><img src=\"https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/open_goat.png\" alt=\"An open door\"/> - this door is now open revealing a goat!</qti-feedback-inline><qti-feedback-inline outcome-identifier=\"PRIZE\" show-hide=\"show\" identifier=\"DoorB\"><img src=\"https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/open_car.png\" alt=\"An open door\"/> - this door is now open revealing a fantastic prize!</qti-feedback-inline></qti-simple-choice><qti-simple-choice identifier=\"DoorC\"><qti-feedback-inline outcome-identifier=\"CLOSED\" show-hide=\"show\" identifier=\"DoorC\"><img src=\"https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/blue_door.png\" alt=\"The Blue Door\"/></qti-feedback-inline><qti-feedback-inline outcome-identifier=\"GOATS\" show-hide=\"show\" identifier=\"DoorC\"><img src=\"https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/open_goat.png\" alt=\"An open door\"/> - this door is now open revealing a goat!</qti-feedback-inline><qti-feedback-inline outcome-identifier=\"PRIZE\" show-hide=\"show\" identifier=\"DoorC\"><img src=\"https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/open_car.png\" alt=\"An open door\"/> - this door is now open revealing a fantastic prize!</qti-feedback-inline></qti-simple-choice></qti-choice-interaction><qti-feedback-block outcome-identifier=\"FEEDBACK\" show-hide=\"show\" identifier=\"poser\"><qti-content-body><p>Well, whether or not you won the prize did you make your decision by guesswork or logical reasoning? The question is, if we allowed you to play this game repeatedly what strategy <em>should</em> you adopt?</p><qti-choice-interaction response-identifier=\"RESPONSE\" class=\"qti-labels-none\" shuffle=\"true\" max-choices=\"1\"><qti-simple-choice identifier=\"stickStrategy\">Always stick to the first door you chose.</qti-simple-choice><qti-simple-choice identifier=\"switchStrategy\">Always switch to the other closed door when Monty offers you the chance.</qti-simple-choice><qti-simple-choice identifier=\"noStrategy\">It really doesn't matter whether you stick or switch - the outcome's the same.</qti-simple-choice></qti-choice-interaction></qti-content-body></qti-feedback-block></div><div class=\"qti3-player-item-card-footer qti-height-14 qti-padding-2\"><qti-end-attempt-interaction title=\"Continue\" class=\"\" response-identifier=\"EndAttempt\" /></div><!-- /card-footer --></div> <!-- /card --></div><div class=\"qti-layout-col4\"><div class=\"qti-well qti-margin-b-0\"><strong>About This Item</strong><p><small>This is the \"Monty Hall (Take 2)\" adaptive item which uses template processing when the item is first loaded to randomly select the door containing the fabulous prize.</small></p><p><small>Accept Monty's invitation and <strong>choose a door</strong>.  Then click the <strong>Continue</strong> button to proceed.</small></p><p class=\"qti-margin-b-0\"><small>QTI 3 Player performs the response processing and reveals the next Feedback in the adaptive item until the adaptive item's built-in \"completionStatus\" outcome variable is set to \"complete\".</small></p></div></div></div><!-- /row --></qti-item-body><qti-response-processing><qti-set-outcome-value identifier=\"completionStatus\"><qti-base-value base-type=\"identifier\">incomplete</qti-base-value></qti-set-outcome-value><qti-response-condition><qti-response-if><!-- Transition from openingGambit to tempter --><qti-and><qti-match><qti-base-value base-type=\"identifier\">openingGambit</qti-base-value><qti-variable identifier=\"STORY\"/></qti-match><qti-not><qti-is-null><qti-variable identifier=\"DOOR\"/></qti-is-null></qti-not></qti-and><!-- Remember the first door chosen --><qti-set-outcome-value identifier=\"FIRSTDOOR\"><qti-variable identifier=\"DOOR\"/></qti-set-outcome-value><qti-response-condition><qti-response-if><qti-match><qti-variable identifier=\"DOOR\"/><qti-variable identifier=\"PRIZEDOOR\"/></qti-match><!-- Randomly open one of the other two doors --><qti-response-condition><qti-response-if><qti-match><qti-variable identifier=\"DOOR\"/><qti-base-value base-type=\"identifier\">DoorA</qti-base-value></qti-match><qti-set-outcome-value identifier=\"REVEALED\"><qti-random><qti-multiple><qti-base-value base-type=\"identifier\">DoorB</qti-base-value><qti-base-value base-type=\"identifier\">DoorC</qti-base-value></qti-multiple></qti-random></qti-set-outcome-value></qti-response-if><qti-response-else-if><qti-match><qti-variable identifier=\"DOOR\"/><qti-base-value base-type=\"identifier\">DoorB</qti-base-value></qti-match><qti-set-outcome-value identifier=\"REVEALED\"><qti-random><qti-multiple><qti-base-value base-type=\"identifier\">DoorA</qti-base-value><qti-base-value base-type=\"identifier\">DoorC</qti-base-value></qti-multiple></qti-random></qti-set-outcome-value></qti-response-else-if><qti-response-else><qti-set-outcome-value identifier=\"REVEALED\"><qti-random><qti-multiple><qti-base-value base-type=\"identifier\">DoorA</qti-base-value><qti-base-value base-type=\"identifier\">DoorB</qti-base-value></qti-multiple></qti-random></qti-set-outcome-value></qti-response-else></qti-response-condition></qti-response-if><qti-response-else><!-- Open the other losing door --><qti-response-condition><qti-response-if><qti-not><qti-member><qti-base-value base-type=\"identifier\">DoorA</qti-base-value><qti-multiple><qti-variable identifier=\"PRIZEDOOR\"/><qti-variable identifier=\"DOOR\"/></qti-multiple></qti-member></qti-not><qti-set-outcome-value identifier=\"REVEALED\"><qti-base-value base-type=\"identifier\">DoorA</qti-base-value></qti-set-outcome-value></qti-response-if><qti-response-else-if><qti-not><qti-member><qti-base-value base-type=\"identifier\">DoorB</qti-base-value><qti-multiple><qti-variable identifier=\"PRIZEDOOR\"/><qti-variable identifier=\"DOOR\"/></qti-multiple></qti-member></qti-not><qti-set-outcome-value identifier=\"REVEALED\"><qti-base-value base-type=\"identifier\">DoorB</qti-base-value></qti-set-outcome-value></qti-response-else-if><qti-response-else><qti-set-outcome-value identifier=\"REVEALED\"><qti-base-value base-type=\"identifier\">DoorC</qti-base-value></qti-set-outcome-value></qti-response-else></qti-response-condition></qti-response-else></qti-response-condition><qti-set-outcome-value identifier=\"CLOSED\"><qti-delete><qti-variable identifier=\"REVEALED\"/><qti-variable identifier=\"CLOSED\"/></qti-delete></qti-set-outcome-value><qti-set-outcome-value identifier=\"GOATS\"><qti-multiple><qti-variable identifier=\"REVEALED\"/></qti-multiple></qti-set-outcome-value><qti-set-outcome-value identifier=\"STORY\"><qti-base-value base-type=\"identifier\">tempter</qti-base-value></qti-set-outcome-value></qti-response-if><qti-response-else-if><!-- Transition from tempter to prize or goat --><qti-and><qti-match><qti-base-value base-type=\"identifier\">tempter</qti-base-value><qti-variable identifier=\"STORY\"/></qti-match><qti-not><qti-is-null><qti-variable identifier=\"DOOR\"/></qti-is-null></qti-not></qti-and><!-- Whether you won or not, we score based on whether you switched --><qti-response-condition><qti-response-if><qti-match><qti-variable identifier=\"DOOR\"/><qti-variable identifier=\"FIRSTDOOR\"/></qti-match><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">0</qti-base-value></qti-set-outcome-value></qti-response-if><qti-response-else><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">1</qti-base-value></qti-set-outcome-value></qti-response-else></qti-response-condition><!-- Now determine if you won the prize and open your chosen door --><qti-response-condition><qti-response-if><qti-match><qti-variable identifier=\"DOOR\"/><qti-variable identifier=\"PRIZEDOOR\"/></qti-match><qti-set-outcome-value identifier=\"PRIZE\"><qti-variable identifier=\"DOOR\"/></qti-set-outcome-value><qti-set-outcome-value identifier=\"STORY\"><qti-base-value base-type=\"identifier\">prize</qti-base-value></qti-set-outcome-value></qti-response-if><qti-response-else><qti-set-outcome-value identifier=\"GOATS\"><qti-multiple><qti-variable identifier=\"GOATS\"/><qti-variable identifier=\"DOOR\"/></qti-multiple></qti-set-outcome-value><qti-set-outcome-value identifier=\"STORY\"><qti-base-value base-type=\"identifier\">goat</qti-base-value></qti-set-outcome-value></qti-response-else></qti-response-condition><qti-set-outcome-value identifier=\"CLOSED\"><qti-delete><qti-variable identifier=\"DOOR\"/><qti-variable identifier=\"CLOSED\"/></qti-delete></qti-set-outcome-value><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-base-value base-type=\"identifier\">poser</qti-base-value></qti-set-outcome-value></qti-response-else-if><qti-response-else-if><qti-and><qti-match><qti-variable identifier=\"FEEDBACK\"/><qti-base-value base-type=\"identifier\">poser</qti-base-value></qti-match><qti-not><qti-is-null><qti-variable identifier=\"RESPONSE\"/></qti-is-null></qti-not></qti-and><qti-response-condition><qti-response-if><qti-match><qti-variable identifier=\"RESPONSE\"/><qti-correct identifier=\"RESPONSE\"/></qti-match><qti-set-outcome-value identifier=\"SCORE\"><qti-sum><qti-variable identifier=\"SCORE\"/><qti-base-value base-type=\"float\">2</qti-base-value></qti-sum></qti-set-outcome-value></qti-response-if></qti-response-condition><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-variable identifier=\"RESPONSE\"/></qti-set-outcome-value><qti-set-outcome-value identifier=\"completionStatus\"><qti-base-value base-type=\"identifier\">completed</qti-base-value></qti-set-outcome-value></qti-response-else-if></qti-response-condition></qti-response-processing><qti-modal-feedback outcome-identifier=\"FEEDBACK\" show-hide=\"show\" identifier=\"stickStrategy\"><qti-content-body>No. Initially, the probability of the prize being behind each door is 1/3. Opening a losing door can't possibly make this go down for the remaining closed one! In fact you should <em>never</em> stick to your original decision.</qti-content-body></qti-modal-feedback><qti-modal-feedback outcome-identifier=\"FEEDBACK\" show-hide=\"show\" identifier=\"switchStrategy\"><qti-content-body>Yes, you should <em>always</em> switch doors when offered the chance. Congratulations, perhaps you should think about a career as a TV game show contestant?</qti-content-body></qti-modal-feedback><qti-modal-feedback outcome-identifier=\"FEEDBACK\" show-hide=\"show\" identifier=\"noStrategy\"><qti-content-body><p>No, you should in fact <em>always</em> switch doors. This problem has fooled many mathematicians since it was first posed in an American magazine article and continues to present a seemingly paradoxical answer!</p><p>The probability of your first choice door hiding the prize is 1/3 and this can't change. But, 2/3 of the time you'll be wrong with your first choice and, by revealing a goat, Monty is effectively telling you which door the prize is behind the remaining 2/3 of the time! So by switching doors, your chances of getting the prize go up to 2/3!</p></qti-content-body></qti-modal-feedback></qti-assessment-item>"
  },
  {
    "identifier": "Example05-feedbackBlock-adaptive-qti3-card",
    "guid": "0000-0009-0002g",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><qti-assessment-item xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://www.imsglobal.org/xsd/imsqtiasi_v3p0\"   xsi:schemaLocation=\"http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd\" tool-version=\"0.5.1\" tool-name=\"Mathqurate\" title=\"Adaptive - choice of input type\" time-dependent=\"false\" identifier=\"Example05-feedbackBlock-adaptive-qti3-card\" adaptive=\"true\"><qti-response-declaration identifier=\"RESPONSE1\" cardinality=\"single\" base-type=\"identifier\"/>    <qti-response-declaration identifier=\"RESPONSE21\" cardinality=\"single\" base-type=\"identifier\"></qti-correct-response><qti-value>OPTION210</qti-value></qti-correct-response>    </qti-response-declaration>    <qti-response-declaration identifier=\"RESPONSE22\" cardinality=\"single\" base-type=\"identifier\"></qti-correct-response><qti-value>OPTION221</qti-value></qti-correct-response>    </qti-response-declaration>    <qti-response-declaration identifier=\"RESPONSE23\" cardinality=\"single\" base-type=\"identifier\"></qti-correct-response><qti-value>OPTION231</qti-value></qti-correct-response>    </qti-response-declaration>    <qti-response-declaration identifier=\"RESPONSE24\" cardinality=\"single\" base-type=\"identifier\"></qti-correct-response><qti-value>OPTION241</qti-value></qti-correct-response>    </qti-response-declaration>    <qti-response-declaration identifier=\"RESPONSE25\" cardinality=\"single\" base-type=\"string\"><qti-correct-response><qti-value>cooks</qti-value></qti-correct-response>    </qti-response-declaration>    <qti-response-declaration identifier=\"RESPONSE26\" cardinality=\"single\" base-type=\"string\"><qti-correct-response><qti-value>spoil</qti-value></qti-correct-response>    </qti-response-declaration>    <qti-response-declaration identifier=\"RESPONSE27\" cardinality=\"single\" base-type=\"string\"><qti-correct-response><qti-value>broth</qti-value></qti-correct-response>    </qti-response-declaration>    <qti-response-declaration base-type=\"boolean\" cardinality=\"single\" identifier=\"EndAttempt\"/><qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\" normal-maximum=\"10.0\" normal-minimum=\"0.0\"><qti-default-value><qti-value>0.0</qti-value></qti-default-value>    </qti-outcome-declaration>    <qti-outcome-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"FEEDBACK\"/>        <!-- Define a feedback variable; its cardinality is \"multiple\" so that it can contain the identifiers of several     feedback elements, and in this case it is initialised to the identifier, part1, of the first part of this adaptive     question--><qti-outcome-declaration base-type=\"identifier\" cardinality=\"multiple\" identifier=\"BODY\"><qti-default-value><qti-value>part1</qti-value></qti-default-value>    </qti-outcome-declaration>    <qti-item-body><div class=\"qti-layout-row\"><div class=\"qti-layout-col8\"><div class=\"qti3-player-item-card-bordered-rounded qti3-player-item-card-raised-rounded\">        <div class=\"qti3-player-item-card-body qti-padding-2\"><!-- This feedbackBlock is the first part of this adaptive question to appear, since the BODY variable initially     contains its identifier, part1; it contains the first multiple choice interaction in this question. When BODY is     set to part2, this feedbackBlock is no longer visible.--><qti-feedback-block id=\"feedbackBlock0\" identifier=\"part1\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body>    <p>This is the first part of this question: Which of these input methods do you wish        to use?</p>    <qti-choice-interaction id=\"choiceInteraction0\" max-choices=\"1\" class=\"qti-labels-none\" response-identifier=\"RESPONSE1\" shuffle=\"true\"><qti-simple-choice id=\"simpleChoice0\" identifier=\"OPTION1\">Multiple choice </qti-simple-choice><qti-simple-choice id=\"simpleChoice1\" identifier=\"OPTION2\">Drop-down menu </qti-simple-choice><qti-simple-choice id=\"simpleChoice2\" identifier=\"OPTION3\">Typed input        </qti-simple-choice>    </qti-choice-interaction></qti-content-body></qti-feedback-block><!-- This feedbackBlock is the second part of the question ; it appears when the BODY variable contains its identifier,     part2. BODY is a multiple cardinality variable, so it can contain the identifiers of several feedbackBlocks (and     feedbackInlines) at the same time, each of which is visible if their show attribute is set to show, or hidden if     their show attribute is set to hide.--><qti-feedback-block identifier=\"part2\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body>    <p>OK, this is the type of input you have chosen. Now please answer this, the second        part of the question.</p></qti-content-body></qti-feedback-block><!-- This feedbackBlock appears if the user chose to use multiple choice in the first part of the question \u2013 it contains    the selected type of interaction.--><qti-feedback-block identifier=\"option1\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body>    <p class=\"\">Choose the correct saying:</p><qti-choice-interaction class=\"qti-labels-none\" max-choices=\"1\" response-identifier=\"RESPONSE21\" shuffle=\"true\"><qti-simple-choice identifier=\"OPTION210\">Too many cooks spoil the broth</qti-simple-choice><qti-simple-choice identifier=\"OPTION211\">Too many cooks burn the dinner</qti-simple-choice><qti-simple-choice identifier=\"OPTION212\">Too many children spill the broth</qti-simple-choice><qti-simple-choice identifier=\"OPTION213\">Too many hands spill the beans</qti-simple-choice><qti-simple-choice identifier=\"OPTION214\">Too many children spoil the broth</qti-simple-choice></qti-choice-interaction></qti-content-body></qti-feedback-block><!-- This feedbackBlock appears if the user chose to use drop-down menus in the first part of the question \u2013 it contains the selected type of interaction.--><qti-feedback-block identifier=\"option2\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body>    <p class=\"\">Complete the saying below by selecting from the lists:</p><p class=\"\">Too many  <qti-inline-choice-interaction class=\"qti-valign-middle\" response-identifier=\"RESPONSE22\" shuffle=\"true\"><qti-inline-choice identifier=\"OPTION221\">cooks</qti-inline-choice><qti-inline-choice identifier=\"OPTION222\">children</qti-inline-choice><qti-inline-choice identifier=\"OPTION223\">hands</qti-inline-choice></qti-inline-choice-interaction>  <qti-inline-choice-interaction class=\"qti-valign-baseline\" response-identifier=\"RESPONSE23\" shuffle=\"true\"><qti-inline-choice identifier=\"OPTION231\">spoil</qti-inline-choice><qti-inline-choice identifier=\"OPTION232\">spill</qti-inline-choice><qti-inline-choice identifier=\"OPTION233\">burn</qti-inline-choice></qti-inline-choice-interaction> the  <qti-inline-choice-interaction response-identifier=\"RESPONSE24\" shuffle=\"true\"><qti-inline-choice identifier=\"OPTION241\">broth</qti-inline-choice><qti-inline-choice identifier=\"OPTION242\">dinner</qti-inline-choice><qti-inline-choice identifier=\"OPTION243\">beans</qti-inline-choice></qti-inline-choice-interaction>. </p></qti-content-body></qti-feedback-block><!-- This feedbackBlock appears if the user chose to type answers in text boxes in the first part of the question \u2013 it contains the selected type of interaction.--><qti-feedback-block identifier=\"option3\" outcome-identifier=\"BODY\" show-hide=\"show\"><qti-content-body>    <p class=\"\">Complete the saying below:</p>    <p class=\"\">Too many  <qti-text-entry-interaction expected-length=\"20\" response-identifier=\"RESPONSE25\"/>  <qti-text-entry-interaction expected-length=\"20\" response-identifier=\"RESPONSE26\"/> the <qti-text-entry-interaction expected-length=\"20\" response-identifier=\"RESPONSE27\"/>.</p></qti-content-body></qti-feedback-block>  <!-- These feedbackInline elements provide feedback on the input given by the user in the second part of the question.--><qti-feedback-inline id=\"feedbackInline1\" identifier=\"CORRECT\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\"> That's the correct answer. </qti-feedback-inline>    <qti-feedback-inline id=\"feedbackInline2\" identifier=\"PARTIAL\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\"> Your answer is partially correct; the correct answer is \"Too many <b>cooks</b> <b>spoil</b> the <b>broth</b>\". </qti-feedback-inline>    <qti-feedback-inline id=\"feedbackInline3\" identifier=\"INCORRECT\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\"> Sorry, that's not correct; the correct answer is \"Too many <b>cooks</b> <b>spoil</b> the <b>broth</b>\". </qti-feedback-inline></div> <!-- /card-body --><div class=\"qti3-player-item-card-footer qti-height-14 qti-padding-2\"><qti-end-attempt-interaction title=\"Continue\" class=\"endattempt-controller-bar\" response-identifier=\"EndAttempt\" data-steps=\"2\" /></div> <!-- /card-footer --></div> <!-- /card --></div><div class=\"qti-layout-col4\"><div class=\"qti-well qti-margin-b-0\"><strong>About This Item</strong><p><small>This is a QTI adaptive item which allows a user to select their preferred input method when answering the second part of the item.</small></p><p><small>Choose an input method, then click the <strong>Continue</strong> button to proceed.</small></p><p class=\"qti-margin-b-0\"><small>QTI 3 Player performs the response processing and reveals the next Feedback (which will be the selected input method) in the adaptive item until the adaptive item's built-in \"completionStatus\" outcome variable is set to \"complete\".</small></p></div></div></div><!-- /row --></qti-item-body><qti-response-processing><qti-response-condition><qti-response-if>    <qti-member>    <!-- Check whether \"part1\" is contained in the BODY variable, and if it is, set up the second part of the question.--><qti-base-value base-type=\"identifier\">part1</qti-base-value><qti-variable identifier=\"BODY\"/>    </qti-member>    <qti-set-outcome-value identifier=\"BODY\"><qti-multiple><!--Put \"part2\" into the BODY variable.--><qti-base-value base-type=\"identifier\">part2</qti-base-value></qti-multiple>    </qti-set-outcome-value>    <qti-response-condition><qti-response-if><qti-match>    <qti-variable identifier=\"RESPONSE1\"/>        <!-- If the user selected OPTION1 (MCQ) put the identifier, option1, of the feedbackBlock containing         the second MCQ into BODY .--><qti-base-value base-type=\"identifier\">OPTION1</qti-base-value></qti-match><qti-set-outcome-value identifier=\"BODY\">    <qti-multiple><qti-variable identifier=\"BODY\"/><qti-base-value base-type=\"identifier\">option1</qti-base-value>    </qti-multiple></qti-set-outcome-value></qti-response-if><qti-response-else-if><qti-match>    <qti-variable identifier=\"RESPONSE1\"/>        <!-- If the user selected OPTION2 (drop-down menus) put the identifier, option2, of the feedbackBlock         containing the drop-down menus into BODY .--><qti-base-value base-type=\"identifier\">OPTION2</qti-base-value></qti-match><qti-set-outcome-value identifier=\"BODY\">    <qti-multiple><qti-variable identifier=\"BODY\"/><qti-base-value base-type=\"identifier\">option2</qti-base-value>    </qti-multiple></qti-set-outcome-value></qti-response-else-if><qti-response-else-if><qti-match>    <qti-variable identifier=\"RESPONSE1\"/>        <!-- If the user selected OPTION3 (text input) put the identifier, option3, of the feedbackBlock         containing the text boxes into BODY .--><qti-base-value base-type=\"identifier\">OPTION3</qti-base-value></qti-match><qti-set-outcome-value identifier=\"BODY\">    <qti-multiple><qti-variable identifier=\"BODY\"/><qti-base-value base-type=\"identifier\">option3</qti-base-value>    </qti-multiple></qti-set-outcome-value></qti-response-else-if>    </qti-response-condition></qti-response-if><qti-response-else-if>    <qti-member>    <!-- If BODY contains part2, the second part of the question has been displayed, so we process the user\u2019s inputto the chosen interaction.--><qti-base-value base-type=\"identifier\">part2</qti-base-value><qti-variable identifier=\"BODY\"/>    </qti-member>    <qti-response-condition><qti-response-if><qti-member>    <qti-base-value base-type=\"identifier\">option1</qti-base-value>    <qti-variable identifier=\"BODY\"/></qti-member><qti-response-condition>    <qti-response-if><qti-match><qti-variable identifier=\"RESPONSE21\"/><qti-correct identifier=\"RESPONSE21\"/></qti-match><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-base-value base-type=\"identifier\">CORRECT</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">10.0</qti-base-value></qti-set-outcome-value>    </qti-response-if>    <qti-response-else><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-base-value base-type=\"identifier\">INCORRECT</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">0.0</qti-base-value></qti-set-outcome-value>    </qti-response-else></qti-response-condition></qti-response-if><qti-response-else-if><qti-member>    <qti-base-value base-type=\"identifier\">option2</qti-base-value>    <qti-variable identifier=\"BODY\"/></qti-member><qti-response-condition>    <qti-response-if><qti-and><qti-match>    <qti-variable identifier=\"RESPONSE22\"/>    <qti-correct identifier=\"RESPONSE22\"/></qti-match><qti-match>    <qti-variable identifier=\"RESPONSE23\"/>    <qti-correct identifier=\"RESPONSE23\"/></qti-match><qti-match>    <qti-variable identifier=\"RESPONSE24\"/>    <qti-correct identifier=\"RESPONSE24\"/></qti-match></qti-and><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-base-value base-type=\"identifier\">CORRECT</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">10.0</qti-base-value></qti-set-outcome-value>    </qti-response-if>    <qti-response-else-if><qti-or><qti-match>    <qti-variable identifier=\"RESPONSE22\"/>    <qti-correct identifier=\"RESPONSE22\"/></qti-match><qti-match>    <qti-variable identifier=\"RESPONSE23\"/>    <qti-correct identifier=\"RESPONSE23\"/></qti-match><qti-match>    <qti-variable identifier=\"RESPONSE24\"/>    <qti-correct identifier=\"RESPONSE24\"/></qti-match></qti-or><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-base-value base-type=\"identifier\">PARTIAL</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">5.0</qti-base-value></qti-set-outcome-value>    </qti-response-else-if>    <qti-response-else><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-base-value base-type=\"identifier\">INCORRECT</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">0.0</qti-base-value></qti-set-outcome-value>    </qti-response-else></qti-response-condition></qti-response-else-if><qti-response-else-if><qti-member>    <qti-base-value base-type=\"identifier\">option3</qti-base-value>    <qti-variable identifier=\"BODY\"/></qti-member><qti-response-condition>    <qti-response-if><qti-and><qti-match>    <qti-variable identifier=\"RESPONSE25\"/>    <qti-correct identifier=\"RESPONSE25\"/></qti-match><qti-match>    <qti-variable identifier=\"RESPONSE26\"/>    <qti-correct identifier=\"RESPONSE26\"/></qti-match><qti-match>    <qti-variable identifier=\"RESPONSE27\"/>    <qti-correct identifier=\"RESPONSE27\"/></qti-match></qti-and><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-base-value base-type=\"identifier\">CORRECT</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">10.0</qti-base-value></qti-set-outcome-value>    </qti-response-if>    <qti-response-else-if><qti-or><qti-match>    <qti-variable identifier=\"RESPONSE25\"/>    <qti-correct identifier=\"RESPONSE25\"/></qti-match><qti-match>    <qti-variable identifier=\"RESPONSE26\"/>    <qti-correct identifier=\"RESPONSE26\"/></qti-match><qti-match>    <qti-variable identifier=\"RESPONSE27\"/>    <qti-correct identifier=\"RESPONSE27\"/></qti-match></qti-or><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-base-value base-type=\"identifier\">PARTIAL</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">5.0</qti-base-value></qti-set-outcome-value>    </qti-response-else-if>    <qti-response-else><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-base-value base-type=\"identifier\">INCORRECT</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">0.0</qti-base-value></qti-set-outcome-value>    </qti-response-else></qti-response-condition></qti-response-else-if>    </qti-response-condition>    <!-- completionStatus must be specifically set to completed in adaptive questions -->    <qti-set-outcome-value identifier=\"completionStatus\"><qti-base-value base-type=\"identifier\">completed</qti-base-value>    </qti-set-outcome-value></qti-response-else-if></qti-response-condition>    </qti-response-processing></qti-assessment-item>"
  },
  {
    "identifier": "template_image",
    "guid": "0000-0009-0003",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="template_image" title="Transportation" adaptive="false" time-dependent="false">
      <!-- Thanks to Mark Stickley for the excellent images! -->
      <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="integer"/>
      <qti-response-declaration identifier="EndAttempt" cardinality="single" base-type="boolean"/>
      <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
      <qti-outcome-declaration identifier="MAXSCORE" cardinality="single" base-type="float">
        <qti-default-value><qti-value>1</qti-value></qti-default-value>
      </qti-outcome-declaration>
      <!--Define a feedback variable; its baseType is "identifier" so that it can contain the identifier of the feedback message-->
      <qti-outcome-declaration identifier="FEEDBACK" cardinality="single" base-type="identifier"/>
      <qti-template-declaration identifier="TRANSPORT" cardinality="single" base-type="identifier" math-variable="false" param-variable="false"/>
      <qti-template-declaration identifier="SPEED" cardinality="single" base-type="integer" math-variable="false" param-variable="false"/>
      <qti-template-processing>
        <qti-set-template-value identifier="TRANSPORT">
          <qti-random>
            <qti-multiple>
              <qti-base-value base-type="identifier">plane</qti-base-value>
              <qti-base-value base-type="identifier">train</qti-base-value>
              <qti-base-value base-type="identifier">bus</qti-base-value>
            </qti-multiple>
          </qti-random>
        </qti-set-template-value>
        <qti-template-condition>
          <qti-template-if>
            <qti-match>
              <qti-variable identifier="TRANSPORT"/>
              <qti-base-value base-type="identifier">plane</qti-base-value>
            </qti-match>
            <qti-set-template-value identifier="SPEED">
              <qti-base-value base-type="integer">600</qti-base-value>
            </qti-set-template-value>
          </qti-template-if>
          <qti-template-else-if>
            <qti-match>
              <qti-variable identifier="TRANSPORT"/>
              <qti-base-value base-type="identifier">train</qti-base-value>
            </qti-match>
            <qti-set-template-value identifier="SPEED">
              <qti-base-value base-type="integer">200</qti-base-value>
            </qti-set-template-value>
          </qti-template-else-if>
          <qti-template-else>
            <qti-set-template-value identifier="SPEED">
              <qti-base-value base-type="integer">50</qti-base-value>
            </qti-set-template-value>
          </qti-template-else>
        </qti-template-condition>
        <qti-set-correct-response identifier="RESPONSE">
          <qti-product>
            <qti-base-value base-type="integer">3</qti-base-value>
            <qti-variable identifier="SPEED"/>
          </qti-product>
        </qti-set-correct-response>
      </qti-template-processing>
      <qti-item-body>
        <div class="qti-layout-row">
          <div class="qti-layout-col8">
            <div class="qti3-player-item-card-bordered-rounded qti3-player-item-card-raised-rounded">
              <div class="qti3-player-item-card-body qti-padding-2">
                <h2>Mick's Travels</h2>
                <p>
                  <qti-template-inline template-identifier="TRANSPORT" show-hide="show" identifier="plane"><img src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/plane.png" alt="Picture of a plane." width="100%"/></qti-template-inline>
                  <qti-template-inline template-identifier="TRANSPORT" show-hide="show" identifier="train"><img src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/train.png" alt="Picture of a train" width="100%"/></qti-template-inline>
                  <qti-template-inline template-identifier="TRANSPORT" show-hide="show" identifier="bus"><img src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/bus.png" alt="Picture of a bus" width="100%"/></qti-template-inline>
                </p>
                <p>
                  Mick travels at an average speed of <qti-printed-variable identifier="SPEED"/> km/h.
                </p>
                <p>
                  How far does he travel in 3 hours? <qti-text-entry-interaction class="qti-input-width-3" pattern-mask="([0-9.\\-]{0,6})" response-identifier="RESPONSE" expected-length="8"/> km.
                </p>
              </div> <!-- /card-body -->
              <div class="qti3-player-item-card-footer qti-height-14 qti-padding-2">
                <qti-end-attempt-interaction title="Check Answer" class="endattempt-controller-bar" response-identifier="EndAttempt" data-steps="1" data-hideprogress="true" data-hastemplates="true" />
              </div> <!-- /card-footer -->
            </div> <!-- /card -->
          </div>
          <div class="qti-layout-col4">
            <div class="qti-well qti-margin-b-0">
              <strong>About This Item</strong>
              <p>
                <small>Template processing is used to randomly compute 1 of 3 permutations (plane, train, bus) of this item.  QTI 3 Player performs the template computation, computes the correct answer, and displays the resulting computed template.  Upon clicking the <strong>Check Answer</strong> button, QTI 3 Player ends the attempt, scores the response, and displays modal feedback.</small>
              </p>
              <p class="qti-margin-b-0">
                <small>The template variables - and the new correct answer - are re-computed each time you click the <strong>New Question</strong> button.</small>
              </p>
            </div>
          </div>
        </div><!-- /row -->
      </qti-item-body>
      <qti-response-processing>
        <qti-response-condition>
          <qti-response-if>
            <qti-match>
              <!--The value of RESPONSE is compared with the correct value identified in the RESPONSE declaration-->
              <qti-variable identifier="RESPONSE"/>
              <qti-correct identifier="RESPONSE"/>
            </qti-match>
            <qti-set-outcome-value identifier="SCORE">
              <qti-variable identifier="MAXSCORE"/>
            </qti-set-outcome-value>
            <qti-set-outcome-value identifier="FEEDBACK">
              <qti-base-value base-type="identifier">correct</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-if>
          <qti-response-else>
            <!--Depending on whether the input matches the correct answer or not, FEEDBACK is given the value of the identifier of the appropriate feedback message-->
            <qti-set-outcome-value identifier="FEEDBACK">
              <qti-base-value base-type="identifier">incorrect</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-else>
        </qti-response-condition>
      </qti-response-processing>

      <!-- Note how the identifiers in the following modalFeedback elements match those of the setOutcomeValue elements above -->
      <qti-modal-feedback outcome-identifier="FEEDBACK" show-hide="show" identifier="correct">
        <qti-content-body>Well done! Correct.</qti-content-body>
      </qti-modal-feedback>
      <qti-modal-feedback outcome-identifier="FEEDBACK" show-hide="show" identifier="incorrect">
        <qti-content-body> Sorry. Incorrect.</qti-content-body>
      </qti-modal-feedback>
    </qti-assessment-item>`
  },
  {
    "identifier": "Example03-feedbackBlock-solution-qti3",
    "guid": "0000-0009-0004",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><qti-assessment-item   xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://www.imsglobal.org/xsd/imsqtiasi_v3p0\"   xsi:schemaLocation=\"http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd\" adaptive=\"true\" identifier=\"Example03-feedbackBlock-solution-qti3\" time-dependent=\"false\" title=\"Example 3 - Using feedbackBlock to show a solution (random)\" tool-name=\"Mathqurate\" tool-version=\"0.9.7b\"><qti-response-declaration base-type=\"float\" cardinality=\"single\" identifier=\"RESPONSE\"/><qti-response-declaration base-type=\"boolean\" cardinality=\"single\" identifier=\"SOLREQUEST\"/><qti-response-declaration base-type=\"boolean\" cardinality=\"single\" identifier=\"EndAttempt\"/>    <qti-outcome-declaration base-type=\"identifier\" cardinality=\"multiple\" identifier=\"FEEDBACK\"/><qti-outcome-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"EMPTY\"/><qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\" normal-maximum=\"10.0\" normal-minimum=\"0.0\"><qti-default-value><qti-value>0.0</qti-value></qti-default-value></qti-outcome-declaration><qti-outcome-declaration base-type=\"boolean\" cardinality=\"single\" identifier=\"seenSolution\"><qti-default-value><qti-value>false</qti-value></qti-default-value></qti-outcome-declaration><qti-outcome-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"ASKSOLUTION\"><qti-default-value><qti-value>asksolution</qti-value></qti-default-value></qti-outcome-declaration><qti-template-declaration base-type=\"integer\" cardinality=\"single\" identifier=\"iA\" math-variable=\"true\" param-variable=\"false\"/><qti-template-declaration base-type=\"float\" cardinality=\"single\" identifier=\"fAns\" math-variable=\"true\" param-variable=\"false\"/><qti-template-declaration base-type=\"float\" cardinality=\"single\" identifier=\"fR\" math-variable=\"true\" param-variable=\"false\"/><qti-template-processing><qti-set-template-value identifier=\"iA\"><qti-random-integer max=\"4\" min=\"1\"/></qti-set-template-value><qti-set-template-value identifier=\"fAns\"><qti-math-operator name=\"exp\"><qti-variable identifier=\"iA\"/></qti-math-operator></qti-set-template-value><qti-set-template-value identifier=\"fR\"><qti-round-to figures=\"3\" rounding-mode=\"decimalPlaces\"><qti-variable identifier=\"fAns\"/></qti-round-to></qti-set-template-value></qti-template-processing><qti-item-body><div class=\"qti-layout-row\"><div class=\"qti-layout-col8\"><div class=\"qti3-player-item-card-bordered-rounded qti3-player-item-card-raised-rounded\"><div class=\"qti3-player-item-card-body qti-padding-2\"><p class=\"\">Find the value of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" id=\"mathML0\"><semantics><mrow><msup><mn>e</mn><mi>iA</mi></msup></mrow><annotation encoding=\"LaTeX\">\\[\\e^\\qv{iA}\\]</annotation></semantics></math> to 3 decimal places.</p><p><qti-text-entry-interaction class=\"qti-input-width-10 qti-margin-e-2\" pattern-mask=\"([0-9.\\-]{0,10})\" id=\"textEntryInteraction0\" label=\"mathInput\" response-identifier=\"RESPONSE\"/><qti-feedback-inline id=\"feedbackInline0\" identifier=\"CORRECT\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\">Correct</qti-feedback-inline><qti-feedback-inline id=\"feedbackInline1\" identifier=\"INCORRECT\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\">No, that is not the correct answer</qti-feedback-inline></p><!-- this feedbackBlock contains the solution --><qti-feedback-block class=\"\" id=\"feedbackBlock2\" identifier=\"SOLUTION\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\"><qti-content-body><div class=\"qti-well\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" id=\"mathML1\"><semantics><mtable><mtr><mtd columnalign=\"right\"><msup><mi>e</mi><mi>iA</mi></msup></mtd><mtd columnalign=\"center\"><mo>=</mo></mtd><mtd columnalign=\"left\"><mi>exp</mi><mfenced close=\")\" ><mi>iA</mi></mfenced></mtd></mtr><mtr><mtd columnalign=\"right\"/><mtd columnalign=\"center\"><mo>=</mo></mtd><mtd columnalign=\"left\"><mi>fR</mi></mtd></mtr></mtable><annotation encoding=\"SnuggleTeX\">\\begin{eqnarray*}e^\\qv{iA}         &amp;=&amp; \\exp(\\qv{iA})\\\\ &amp;=&amp;         \\qv{fR}\\end{eqnarray*}</annotation> </semantics></math></div></qti-content-body></qti-feedback-block><!-- Explain why the score is zero (after viewing solution) --><qti-feedback-block id=\"feedbackBlock4\" identifier=\"SEEN-SOLUTION\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\"><qti-content-body><p> Since you have viewed the solution, your score for this question will be 0. </p></qti-content-body></qti-feedback-block><!-- show the solution button --><qti-feedback-block id=\"feedbackBlock7\" identifier=\"asksolution\" outcome-identifier=\"ASKSOLUTION\" show-hide=\"show\"><qti-content-body><p></p><p><qti-end-attempt-interaction id=\"endAttemptInteraction2\" response-identifier=\"SOLREQUEST\" title=\"Show Solution\"/></p></qti-content-body></qti-feedback-block></div><!-- /card-body --><div class=\"qti3-player-item-card-footer qti-height-14 qti-padding-2\"><qti-end-attempt-interaction title=\"Check Answer\" class=\"endattempt-controller-bar\" response-identifier=\"EndAttempt\" data-hideprogress=\"true\" data-steps=\"1\" data-hastemplates=\"true\" /></div> <!-- /card-footer --></div> <!-- /card --></div><div class=\"qti-layout-col4\"><div class=\"qti-well qti-margin-b-0\"><strong>About This Item</strong><p><small>Template processing is used to randomly compute 1 of 4 permutations of this item.  The computed template variable values are then \"stamped\" (using QTI's math variable templating capability) into the MathML expressions in the prompt and in the provided solution which can then be revealed by clicking the <strong>Show Solution</strong> button.  Upon clicking the <strong>Check Answer</strong> button, QTI 3 Player ends the attempt, scores the response, and displays inline feedback.</small></p><p class=\"qti-margin-b-0\"><small>The template variables - and the new correct answer - are re-computed each time you click the <strong>New Question</strong> button.</small></p></div></div></div><!-- /row --></qti-item-body><qti-response-processing><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-multiple><qti-variable identifier=\"EMPTY\"/></qti-multiple></qti-set-outcome-value><qti-response-condition><qti-response-if><qti-variable identifier=\"SOLREQUEST\"/><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-multiple> <qti-base-value base-type=\"identifier\">SOLUTION</qti-base-value></qti-multiple></qti-set-outcome-value><qti-set-outcome-value identifier=\"seenSolution\"><qti-base-value base-type=\"boolean\">true</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"completionStatus\"><qti-base-value base-type=\"identifier\">completed</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"ASKSOLUTION\"><qti-base-value base-type=\"identifier\">null</qti-base-value></qti-set-outcome-value></qti-response-if><qti-response-else><qti-response-condition><qti-response-if> <qti-is-null><qti-variable identifier=\"RESPONSE\"/> </qti-is-null> <qti-set-outcome-value identifier=\"FEEDBACK\"><qti-multiple><qti-base-value base-type=\"identifier\">INCORRECT</qti-base-value></qti-multiple></qti-set-outcome-value> <qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">0</qti-base-value> </qti-set-outcome-value></qti-response-if><qti-response-else> <qti-response-condition><qti-response-if><qti-equal-rounded figures=\"3\" rounding-mode=\"decimalPlaces\"><qti-variable identifier=\"RESPONSE\"/><qti-variable identifier=\"fAns\"/></qti-equal-rounded><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-multiple><qti-base-value base-type=\"identifier\">CORRECT</qti-base-value></qti-multiple></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">2</qti-base-value></qti-set-outcome-value></qti-response-if><qti-response-else><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-multiple><qti-base-value base-type=\"identifier\">INCORRECT</qti-base-value></qti-multiple></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">0</qti-base-value></qti-set-outcome-value></qti-response-else></qti-response-condition><qti-set-outcome-value identifier=\"completionStatus\"><qti-base-value base-type=\"identifier\">completed</qti-base-value></qti-set-outcome-value> <qti-set-outcome-value identifier=\"ASKSOLUTION\"><qti-base-value base-type=\"identifier\">null</qti-base-value></qti-set-outcome-value></qti-response-else></qti-response-condition></qti-response-else></qti-response-condition><qti-response-condition><qti-response-if><qti-variable identifier=\"seenSolution\"/><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-multiple><qti-variable identifier=\"FEEDBACK\"/><qti-base-value base-type=\"identifier\">SEEN-SOLUTION</qti-base-value></qti-multiple></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">0.0</qti-base-value></qti-set-outcome-value></qti-response-if></qti-response-condition></qti-response-processing></qti-assessment-item>"
  },
  {
    "identifier": "ms-choice-templated-qti3",
    "guid": "0000-0009-0005",
    "xml": `<qti-assessment-item xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="ms-choice-templated-qti3" time-dependent="false" title="ms-choice-templated-qti3" xml:lang="en">
    <qti-response-declaration base-type="identifier" cardinality="multiple" identifier="RESPONSE">
      <qti-correct-response>
        <qti-value>D</qti-value>
        <qti-value>E</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-response-declaration base-type="boolean" cardinality="single" identifier="EndAttempt"/>
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE" normal-maximum="1.0" normal-minimum="0.0">
      <qti-default-value>
        <qti-value>0</qti-value>
      </qti-default-value>
    </qti-outcome-declaration>
    <qti-outcome-declaration base-type="identifier" cardinality="single" identifier="FEEDBACK" />
    <qti-template-declaration identifier="a" cardinality="single" base-type="integer" math-variable="true" param-variable="true"/>
    <qti-template-declaration identifier="b" cardinality="single" base-type="integer" math-variable="true" param-variable="true"/>
    <qti-template-declaration identifier="c" cardinality="single" base-type="integer" math-variable="true" param-variable="true"/>
    <qti-template-declaration identifier="d" cardinality="single" base-type="integer" math-variable="true" param-variable="true"/>
    <qti-template-processing>
      <qti-set-template-value identifier="a">
        <qti-random-integer min="2" max="20"/>
      </qti-set-template-value>
      <qti-set-template-value identifier="b">
        <qti-random-integer min="3" max="13"/>
      </qti-set-template-value>
      <qti-set-template-value identifier="c">
        <qti-integer-divide>
          <qti-variable identifier="a"/>
          <qti-variable identifier="b"/>
        </qti-integer-divide>
      </qti-set-template-value>
      <qti-set-template-value identifier="d">
        <qti-integer-modulus>
          <qti-variable identifier="a"/>
          <qti-variable identifier="b"/>
        </qti-integer-modulus>
      </qti-set-template-value>
      <!-- Terminate template processing when the following constraints are true -->
      <qti-template-constraint>
        <qti-and>
          <qti-gt>
            <qti-variable identifier="a"/>
            <qti-variable identifier="b"/>
          </qti-gt>
          <qti-not>
            <qti-equal tolerance-mode="exact">
              <qti-variable identifier="c"/>
              <qti-variable identifier="d"/>
            </qti-equal>
          </qti-not>
          <qti-not>
            <qti-equal tolerance-mode="exact">
              <qti-variable identifier="d"/>
              <qti-base-value base-type="integer">0</qti-base-value>
            </qti-equal>
          </qti-not>
        </qti-and>
      </qti-template-constraint>
    </qti-template-processing>
    <qti-item-body>
      <div class="qti-layout-row">
        <div class="qti-layout-col8">
          <div class="qti3-player-item-card-bordered-rounded qti3-player-item-card-raised-rounded">
            <div class="qti3-player-item-card-body qti-padding-2">
              <qti-choice-interaction class="qti-labels-none" shuffle="true" max-choices="5" min-choices="1" response-identifier="RESPONSE">
                <qti-prompt>
                  <p>
                    Select <strong>all</strong> values equivalent to <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><mfrac bevelled="false"><mi>a</mi><mi>b</mi></mfrac></math>.
                  </p>
                </qti-prompt>
                <qti-simple-choice identifier="A">
                  <p>
                    <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac bevelled="false"><mrow><mo>-</mo><mi>a</mi></mrow><mrow><mo>-</mo><mi>b</mi></mrow></mfrac></math>
                  </p>
                </qti-simple-choice>
                <qti-simple-choice identifier="B">
                  <p>
                    <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><mi>d</mi><mfrac bevelled="false"><mi>c</mi><mi>b</mi></mfrac></math>
                  </p>
                </qti-simple-choice>
                <qti-simple-choice identifier="C">
                  <p>
                    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>c</mi><mfrac bevelled="false"><mi>d</mi><mi>b</mi></mfrac></math>
                  </p>
                </qti-simple-choice>
                <qti-simple-choice identifier="D">
                  <p>
                    <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><mfrac bevelled="false"><mrow><mo>-</mo><mi>a</mi></mrow><mrow><mo>-</mo><mi>b</mi></mrow></mfrac></math>
                  </p>
                </qti-simple-choice>
                <qti-simple-choice identifier="E">
                  <p>
                    <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><mi>c</mi><mfrac bevelled="false"><mi>d</mi><mi>b</mi></mfrac></math>
                  </p>
                </qti-simple-choice>
              </qti-choice-interaction>
            </div><!-- /card-body -->
            <div class="qti3-player-item-card-footer qti-height-14 qti-padding-2">
              <qti-end-attempt-interaction title="Check Answer" class="endattempt-controller-bar" response-identifier="EndAttempt" data-steps="1" data-hastemplates="true" data-hideprogress="true"/>
            </div> <!-- /card-footer -->
          </div> <!-- /card -->
        </div>
        <div class="qti-layout-col4">
          <div class="qti-well qti-margin-b-0">
            <strong>About This Item</strong>
            <p>
              <small>Template processing is used to compute four variables (numerator, denominator, quotient, and a remainder) with values that are constrained so that the prompt's numerator is always greater than the denominator.  The computed variable values are then "stamped" (using QTI's math variable templating capability) into the MathML expressions in the prompt and choices. The choices are then shuffled to randomize the order of the choices.</small>
            </p>
            <p class="qti-margin-b-0">
              <small>The template variables are re-computed each time you click the <strong>New Question</strong> button.  This permits a virtually-infinite number of items from one QTI item XML definition - all handled by the QTI 3 Player component.</small>
            </p>
          </div>
        </div>
      </div><!-- /row -->
    </qti-item-body>
    <qti-response-processing>
      <qti-response-condition>
        <qti-response-if>
          <qti-match>
            <qti-variable identifier="RESPONSE"/>
            <qti-correct identifier="RESPONSE"/>
          </qti-match>
          <qti-set-outcome-value identifier="SCORE">
            <qti-base-value base-type="float">1</qti-base-value>
          </qti-set-outcome-value>
          <qti-set-outcome-value identifier="FEEDBACK">
            <qti-base-value base-type="identifier">correct</qti-base-value>
          </qti-set-outcome-value>
        </qti-response-if>
        <qti-response-else>
          <qti-set-outcome-value identifier="SCORE">
            <qti-base-value base-type="float">0</qti-base-value>
          </qti-set-outcome-value>
          <qti-set-outcome-value identifier="FEEDBACK">
            <qti-base-value base-type="identifier">incorrect</qti-base-value>
          </qti-set-outcome-value>
        </qti-response-else>
      </qti-response-condition>
    </qti-response-processing>
    <qti-modal-feedback outcome-identifier="FEEDBACK" identifier="correct" show-hide="show">
      <qti-content-body>
        <div>Well done!</div>
      </qti-content-body>
    </qti-modal-feedback>
    <qti-modal-feedback outcome-identifier="FEEDBACK" identifier="incorrect" show-hide="show">
      <qti-content-body>
        <div>Sorry, your answer is not correct.</div>
      </qti-content-body>
    </qti-modal-feedback>
  </qti-assessment-item>`
  },
  {
    "identifier": "i19b-shared-css-vocab-1",
    "guid": "0000-0004-0001",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
      identifier="i19b-shared-css-vocab-1" title="i19b Shared CSS Vocabulary 1" 
      time-dependent="false" adaptive="false">
      <qti-item-body>
        <div>
          <![CDATA[<style>
          /* These styles not part of shared css */
          .muted {color:#999999;font-size:smaller;}
          /* For image spacing */
          .img-margin-04 {margin:0 4px;}
          </style>]]>
          
          <h4>Underline an Element</h4>
          <p>Look at the <span class="qti-underline">underlined text</span> in this sentence.</p>
          <h4>Italicize an Element</h4>
          <p>Look at the <span class="qti-italic">italicized text</span> in this sentence.</p>
          <h4>Horizontal Alignment - Left, Center, Right <span class="muted">- table border added for effect</span></h4>
          <table class="qti-fullwidth qti-bordered">
            <tbody>
              <tr><td class="qti-align-left">I am left-aligned text in a table cell.</td></tr>
              <tr><td class="qti-align-center">I am center-aligned text in a table cell.</td></tr>
              <tr><td class="qti-align-right">I am right-aligned text in a table cell.</td></tr>
            </tbody>
          </table>
          <h4>Vertical Alignment - Top, Middle, Baseline, Bottom <span class="muted">- 4x28 images and paragraph borders added for effect</span></h4>
          <p class="qti-bordered">
            <img class="qti-valign-top img-margin-04" alt="placeholder" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAFUlEQVR42mNkYPhfz4AEGEcFhosAAM7zKeUTvPB1AAAAAElFTkSuQmCC" width="4" height="28"/>I am top-valigned.
          </p>
          <p class="qti-bordered">
            <img class="qti-valign-middle img-margin-04" alt="placeholder" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAFUlEQVR42mNkYPhfz4AEGEcFhosAAM7zKeUTvPB1AAAAAElFTkSuQmCC" width="4" height="28"/>I am middle-valigned.
          </p>
          <p class="qti-bordered">
            <img class="qti-valign-baseline img-margin-04" alt="placeholder" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAFUlEQVR42mNkYPhfz4AEGEcFhosAAM7zKeUTvPB1AAAAAElFTkSuQmCC" width="4" height="28"/>I am baseline-valigned.
          </p>
          <p class="qti-bordered">
            <img class="qti-valign-bottom img-margin-04" alt="placeholder" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAFUlEQVR42mNkYPhfz4AEGEcFhosAAM7zKeUTvPB1AAAAAElFTkSuQmCC" width="4" height="28"/>I am bottom-valigned.
          </p>
          <h4>Make an Element Fullwidth (width=100%) <span class="muted">- table border added for effect</span></h4>
          <table class="qti-fullwidth qti-bordered">
            <tbody>
              <tr><td class="qti-align-left">I am left-aligned</td></tr>
              <tr><td class="qti-align-center">I am center-aligned</td></tr>
              <tr><td class="qti-align-right">I am right-aligned</td></tr>
            </tbody>
          </table>
          <h4>Add an Element Border <span class="muted">- second paragraph is bordered</span></h4>
          <p>Ho hum.  I am a non-bordered paragraph.</p>
          <p class="qti-bordered">Look at me! I am a bordered paragraph.</p>
          <p>I am yet another non-bordered paragraph.</p>
          <h4>Place an element in a Well <span class="muted">- second paragraph is in a well</span></h4>
          <p>Ho hum.  I am a non-bordered paragraph.</p>
          <p class="qti-well">Look at me! I am in a well!</p><p>I am yet another non-bordered paragraph.</p>
          <h4>Display: inline-block</h4>
          <div>
            This is some text with a nested table element <em>with</em> qti-display-inline-block: <table class="qti-display-inline-block qti-bordered qti-valign-middle">
            <tbody>
              <tr><td>Row 1 Cell 1</td></tr><tr><td>Row 2 Cell 1</td></tr>
            </tbody>
            </table> that is displayed inline with the surrounding text.
          </div>
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "i19b-shared-css-vocab-2",
    "guid": "0000-0004-0002",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item  
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
    identifier="i19b-shared-css-vocab-2" title="i19b Shared CSS Vocabulary 2"
    time-dependent="false" adaptive="false">
    <qti-item-body>
      <div>
        <![CDATA[<style>
        /* Utility CSS to demonstrate column virtual borders - no effect on layout. */
        [class*="qti-layout-col"] {background-color:#eee;}
        </style>]]>
        
        <h4>qti-layout-row, qti-layout-col</h4>
        <hr /><br />
        <div class="qti-layout-row">
          <div class="qti-layout-col1">The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col1">The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col1">The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col1">The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col1">The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col1">The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col1">The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col1">The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col1">The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col1">The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col1">The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col1">The quick brown fox jumps over the lazy dog.</div>
        </div>
        <hr />
        <div class="qti-layout-row">
          <div class="qti-layout-col2">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col2">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col2">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col2">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col2">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col2">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
        </div>
        <hr />
        <div class="qti-layout-row">
          <div class="qti-layout-col3">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col3">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col3">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col3">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
        </div>
        <hr />
        <div class="qti-layout-row">
          <div class="qti-layout-col4">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col4">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col4">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
        </div>
        <hr />
        <div class="qti-layout-row">
          <div class="qti-layout-col5">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col7">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
        </div>
        <hr />
        <div class="qti-layout-row">
          <div class="qti-layout-col6">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col6">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
        </div>
        <hr />
        <div class="qti-layout-row">
          <div class="qti-layout-col12">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
        </div>
        <hr />
        <h4>qti-layout-row, qti-layout-col, qti-layout-offset</h4>
        <hr />
        <div class="qti-layout-row">
          <div class="qti-layout-col6 qti-layout-offset3">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
        </div>
        <hr />
        <div class="qti-layout-row">
          <div class="qti-layout-col4 qti-layout-offset2">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col4">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
        </div>
        <hr />
        <div class="qti-layout-row">
          <div class="qti-layout-col2 qti-layout-offset1">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col4 qti-layout-offset1">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
          <div class="qti-layout-col2 qti-layout-offset1">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</div>
        </div>
        <hr />
      </div>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "i19b-shared-css-vocab-3",
    "guid": "0000-0004-003",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
    identifier="i19b-shared-css-vocab-3" title="i19b Shared CSS Vocabulary 3 (Margin/Padding)"
    time-dependent="false" adaptive="false">
    <qti-item-body>
      <div>
        <![CDATA[<style>
        /* ========================================== Utility CSS to demonstrate margin/padding. These styles not part of shared css ========================================== */
        .container-200x100 { width: 200px; height: 100px; }
        .muted { color: #999999;font-size: smaller; }
        .border-1 { border: 1px solid #888888; }
        .pad-0 { padding: 0; }
        [class*="qti-layout-col"] { background-color: #fff; }
        </style>]]>
        
        <div class="qti-well">
          <p>The <strong>Margin</strong> and <strong>Padding</strong> utility classes are named using the format:</p><pre>.qti-{property}{-sides}-{size}</pre><p>Where <strong>property</strong> is one of:</p><p>  <strong>margin</strong> - for classes that set <strong>margin</strong><br />  <strong>padding</strong> - for classes that set <strong>padding</strong></p><p>Where <strong>sides</strong> is one of:</p><p>   <strong>t</strong> - for classes that set margin-top or padding-top<br />   <strong>b</strong> - for classes that set margin-bottom or padding-bottom<br />   <strong>s</strong> - (start) for classes that set margin-left or padding-left in LTR, margin-right or padding-right in RTL<br />   <strong>e</strong> - (end) for classes that set margin-right or padding-right in LTR, margin-left or padding-left in RTL<br />   <strong>x</strong> - for classes that set both *-left and *-right<br />   <strong>y</strong> - for classes that set both *-top and *-bottom<br />   blank - for classes that set a margin or padding on all 4 sides of the element</p><p>Where <strong>size</strong> is one of (assuming a default $spacer = 1rem):</p><p>  <strong>0</strong> - for classes that eliminate the margin or padding by setting it to 0<br />  <strong>1</strong> - (by default) for classes that set the margin or padding to 1rem * .25<br />  <strong>2</strong> - (by default) for classes that set the margin or padding to 1rem * .5<br />  <strong>3</strong> - (by default) for classes that set the margin or padding to 1rem<br />  <strong>4</strong> - (by default) for classes that set the margin or padding to 1rem * 1.5<br />  <strong>5</strong> - (by default) for classes that set the margin or padding to 1rem * 3<br />  <strong>auto</strong> - for classes that set the margin to auto</p>
        </div> <!-- /well -->
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>Padding qti-padding-{ 0 | 1 | 2 | 3 | 4 | 5 }</h4>
            <div class="qti-display-inline-block"><table><tbody><tr><td class="border-1 qti-padding-0">qti-padding-0</td></tr></tbody></table></div>
            <div class="qti-display-inline-block"><table><tbody><tr><td class="border-1 qti-padding-1">qti-padding-1</td></tr></tbody></table></div>
            <div class="qti-display-inline-block"><table><tbody><tr><td class="border-1 qti-padding-2">qti-padding-2</td></tr></tbody></table></div>
            <div class="qti-display-inline-block"><table><tbody><tr><td class="border-1 qti-padding-3">qti-padding-3</td></tr></tbody></table></div>
            <div class="qti-display-inline-block"><table><tbody><tr><td class="border-1 qti-padding-4">qti-padding-4</td></tr></tbody></table></div>
            <div class="qti-display-inline-block"><table><tbody><tr><td class="border-1 qti-padding-5">qti-padding-5</td></tr></tbody></table></div>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>Padding qti-padding-x-{ 0 | 1 | 2 | 3 | 4 | 5 }</h4>
            <table><tbody><tr><td class="border-1 pad-0 qti-padding-x-0">qti-padding-x-0</td><td class="border-1 pad-0 qti-padding-x-1">qti-padding-x-1</td><td class="border-1 pad-0 qti-padding-x-2">qti-padding-x-2</td><td class="border-1 pad-0 qti-padding-x-3">qti-padding-x-3</td><td class="border-1 pad-0 qti-padding-x-4">qti-padding-x-4</td><td class="border-1 pad-0 qti-padding-x-5">qti-padding-x-5</td></tr></tbody></table>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>Padding qti-paddding-s-{ 0 | 1 | 2 | 3 | 4 | 5 } LTR</h4>
            <table><tbody><tr><td class="border-1 qti-padding-s-0">qti-padding-s-0</td><td class="border-1 qti-padding-s-1">qti-padding-s-1</td><td class="border-1 qti-padding-s-2">qti-padding-s-2</td><td class="border-1 qti-padding-s-3">qti-padding-s-3</td><td class="border-1 qti-padding-s-4">qti-padding-s-4</td><td class="border-1 qti-padding-s-5">qti-padding-s-5</td></tr></tbody></table>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>Padding qti-padding-e-{ 0 | 1 | 2 | 3 | 4 | 5 } LTR</h4>
            <table><tbody><tr><td class="border-1 qti-padding-e-0">qti-padding-e-0</td><td class="border-1 qti-padding-e-1">qti-padding-e-1</td><td class="border-1 qti-padding-e-2">qti-padding-e-2</td><td class="border-1 qti-padding-e-3">qti-padding-e-3</td><td class="border-1 qti-padding-e-4">qti-padding-e-4</td><td class="border-1 qti-padding-e-5">qti-padding-e-5</td></tr></tbody></table>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col4">
            <h4>Padding qti-padding-y-{ 0 | 1 | 2 | 3 | 4 | 5 }</h4>
            <table><tbody><tr><td class="border-1 pad-0 qti-padding-y-0">qti-padding-y-0</td></tr><tr><td class="border-1 pad-0 qti-padding-y-1">qti-padding-y-1</td></tr><tr><td class="border-1 pad-0 qti-padding-y-2">qti-padding-y-2</td></tr><tr><td class="border-1 pad-0 qti-padding-y-3">qti-padding-y-3</td></tr><tr><td class="border-1 pad-0 qti-padding-y-4">qti-padding-y-4</td></tr><tr><td class="border-1 pad-0 qti-padding-y-5">qti-padding-y-5</td></tr></tbody></table>
          </div>
          <div class="qti-layout-col4">
            <h4>Padding padding-t-{ 0 | 1 | 2 | 3 | 4 | 5 }</h4>
            <table><tbody><tr><td class="border-1 pad-0 qti-padding-t-0">qti-padding-t-0</td></tr><tr><td class="border-1 pad-0 qti-padding-t-1">qti-padding-t-1</td></tr><tr><td class="border-1 pad-0 qti-padding-t-2">qti-padding-t-2</td></tr><tr><td class="border-1 pad-0 qti-padding-t-3">qti-padding-t-3</td></tr><tr><td class="border-1 pad-0 qti-padding-t-4">qti-padding-t-4</td></tr><tr><td class="border-1 pad-0 qti-padding-t-5">qti-padding-t-5</td></tr></tbody></table>
          </div>
          <div class="qti-layout-col4">
            <h4>Padding padding-b-{ 0 | 1 | 2 | 3 | 4 | 5 }</h4>
            <table><tbody><tr><td class="border-1 pad-0 qti-padding-b-0">qti-padding-b-0</td></tr><tr><td class="border-1 pad-0 qti-padding-b-1">qti-padding-b-1</td></tr><tr><td class="border-1 pad-0 qti-padding-b-2">qti-padding-b-2</td></tr><tr><td class="border-1 pad-0 qti-padding-b-3">qti-padding-b-3</td></tr><tr><td class="border-1 pad-0 qti-padding-b-4">qti-padding-b-4</td></tr><tr><td class="border-1 pad-0 qti-padding-b-5">qti-padding-b-5</td></tr></tbody></table>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>Margin qti-margin-{ 0 | 1 | 2 | 3 | 4 | 5 | auto }</h4>
            <div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-0">qti-margin-0</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-1">qti-margin-1</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-2">qti-margin-2</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-3">qti-margin-3</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-4">qti-margin-4</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-5">qti-margin-5</div></div>
            <!-- display set to flex so the auto height works as expected -->
            <div class="container-200x100 qti-display-flex qti-bordered qti-padding-0"><div class="qti-bordered qti-margin-auto">qti-margin-auto</div></div>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>Margin qti-margin-x-{ 0 | 1 | 2 | 3 | 4 | 5 | auto }</h4>
            <div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-x-0">qti-margin-x-0</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-x-1">qti-margin-x-1</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-x-2">qti-margin-x-2</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-x-3">qti-margin-x-3</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-x-4">qti-margin-x-4</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-x-5">qti-margin-x-5</div></div><div class="container-200x100 qti-display-flex qti-bordered qti-padding-0"><div class="qti-bordered qti-margin-x-auto">qti-margin-x-auto</div></div>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>Margin qti-margin-y-{ 0 | 1 | 2 | 3 | 4 | 5 | auto }</h4>
            <div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-y-0">qti-margin-y-0</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-y-1">qti-margin-y-1</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-y-2">qti-margin-y-2</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-y-3">qti-margin-y-3</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-y-4">qti-margin-y-4</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-y-5">qti-margin-y-5</div></div><div class="container-200x100 qti-display-flex qti-bordered qti-padding-0"><div class="qti-bordered qti-margin-y-auto">qti-margin-y-auto</div></div>
          </div>
        </div>
            
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>Margin qti-margin-t-{ 0 | 1 | 2 | 3 | 4 | 5 | auto }</h4>
            <div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-t-0">qti-margin-t-0</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-t-1">qti-margin-t-1</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-t-2">qti-margin-t-2</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-t-3">qti-margin-t-3</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-t-4">qti-margin-t-4</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-t-5">qti-margin-t-5</div></div><div class="container-200x100 qti-display-flex qti-bordered qti-padding-0"><div class="qti-bordered qti-margin-t-auto">qti-margin-t-auto</div></div>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>Margin qti-margin-b-{ 0 | 1 | 2 | 3 | 4 | 5 | auto }</h4>
            <div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-b-0">qti-margin-b-0</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-b-1">qti-margin-b-1</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-b-2">qti-margin-b-2</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-b-3">qti-margin-b-3</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-b-4">qti-margin-b-4</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-b-5">qti-margin-b-5</div></div><div class="container-200x100 qti-display-flex qti-bordered qti-padding-0"><div class="qti-bordered qti-margin-b-auto">qti-margin-b-auto</div></div>
          </div>
        </div>
            
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>Margin qti-margin-s-{ 0 | 1 | 2 | 3 | 4 | 5 | auto }</h4>
            <div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-s-0">qti-margin-s-0</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-s-1">qti-margin-s-1</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-s-2">qti-margin-s-2</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-s-3">qti-margin-s-3</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-s-4">qti-margin-s-4</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-s-5">qti-margin-s-5</div></div><div class="container-200x100 qti-display-flex qti-bordered qti-padding-0"><div class="qti-bordered qti-margin-s-auto">qti-margin-s-auto</div></div>
          </div>
        </div>
            
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>Margin qti-margin-e-{ 0 | 1 | 2 | 3 | 4 | 5 | auto }</h4>
            <div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-e-0">qti-margin-e-0</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-e-1">qti-margin-e-1</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-e-2">qti-margin-e-2</div</div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-e-3">qti-margin-e-3</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-e-4">qti-margin-e-4</div></div><div class="qti-display-inline-block qti-bordered qti-padding-0"><div class="qti-display-inline-block qti-bordered qti-margin-e-5">qti-margin-e-5</div></div><div class="container-200x100 qti-display-flex qti-bordered qti-p-0"><div class="qti-bordered qti-margin-e-auto">qti-margin-e-auto</div></div>
          </div>
        </div>
      </div>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "i19b-shared-css-vocab-4",
    "guid": "0000-0004-004",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="i19b-shared-css-vocab-4" title="i19b Shared CSS Vocabulary 4 (Display)"
    time-dependent="false" adaptive="false">
    <qti-item-body>
      <div>
        <![CDATA[<style>/* ==========================================  Utility CSS to demonstrate display. These styles not part of shared css  ========================================== */
        [class*="qti-layout-col"] { background-color: #fff; }
        body { font-family: helvetica, arial, sans-serif; font-size: 16px; line-height: 2rem; }
        h4 { margin-top: 1rem; margin-bottom: 1rem; }
        div.code { font-size: smaller;line-height: .85rem; }
        div.element {
          /* blue */
          background-color: #3d8ef8;
        }
        div.element span {
          background-color: black; 
          color: white; letter-spacing: 1px;
        }
        div.element, span { border-radius: 5px; }
        </style>]]>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <div class="qti-well">
              <p>The <strong>Display</strong> utility classes are named using the format:</p>
              <pre>.qti-display-{displaystyle}</pre>
              <p>Where <strong>{displaystyle}</strong> is one of:</p>
              <p>
                <strong>block</strong>, <strong>inline</strong>, <strong>inline-block</strong>, <strong>none</strong>, <strong>flex</strong>, <strong>inline-flex</strong>, <strong>grid</strong>, <strong>inline-grid</strong>, <strong>table</strong>, <strong>table-row</strong>,<strong>list-item</strong>
              </p>
              <p>The following markup is used to demonstrate the Display utility classes:</p>
              <div class="code">
                <pre>&lt;div class="qti-padding-2 qti-margin-3"&gt;</pre><pre>  &lt;span class="qti-margin-1 qti-padding-1"&gt;First&lt;/span&gt;</pre><pre>  &lt;span class="qti-margin-1 qti-padding-1"&gt;Second&lt;/span&gt;</pre><pre>  &lt;span class="qti-margin-1 qti-padding-1"&gt;Third&lt;/span&gt;</pre><pre>&lt;/div&gt;</pre><pre>&lt;div class="qti-padding-2 qti-margin-3"&gt;</pre><pre>  &lt;span class="qti-margin-1 qti-padding-1"&gt;First&lt;/span&gt;</pre><pre>  &lt;span class="qti-margin-1 qti-padding-1"&gt;Second&lt;/span&gt;</pre><pre>  &lt;span class="qti-margin-1 qti-padding-1"&gt;Third&lt;/span&gt;</pre><pre>&lt;/div&gt;</pre>
              </div> <!-- /code -->
            </div> <!-- /well -->
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>qti-display-block</h4>
            <div class="element qti-display-block qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div><div class="element qti-display-block qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div>
          </div>
        </div>
            
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>qti-display-inline</h4>
            <div class="element qti-display-inline qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div><div class="element qti-display-inline qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div>
          </div>
        </div>
            
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>qti-display-inline-block</h4>
            <div class="element qti-display-inline-block qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div><div class="element qti-display-inline-block qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>qti-display-none</h4>
            <div class="element qti-display-none qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div><div class="element qti-display-none qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>qti-display-flex</h4>
            <div class="element qti-display-flex qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div><div class="element qti-display-flex qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>qti-display-inline-flex</h4>
            <div class="element qti-display-inline-flex qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div><div class="element qti-display-inline-flex qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>qti-display-grid</h4>
            <div class="element qti-display-grid qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div><div class="element qti-display-grid qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>qti-display-inline-grid</h4>
            <div class="element qti-display-inline-grid qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div><div class="element qti-display-inline-grid qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>qti-display-table</h4>
            <div class="element qti-display-table qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div><div class="element qti-display-table qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>qti-display-table-row</h4>
            <div class="element qti-display-table-row qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div><div class="element qti-display-table-row qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div>
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <h4>qti-display-list-item</h4>
            <div class="element qti-display-list-item qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div><div class="element qti-display-list-item qti-padding-2 qti-margin-3"><span class="qti-margin-1 qti-padding-1">First</span><span class="qti-margin-1 qti-padding-1">Second</span><span class="qti-margin-1 qti-padding-1">Third</span></div>
          </div>
        </div>
      </div>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "i19b-shared-css-vocab-5",
    "guid": "0000-0004-005",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="i19b-shared-css-vocab-5" title="i19b Shared CSS Vocabulary 5 (Height)"
    time-dependent="false" adaptive="false">
    <qti-item-body>
      <div>
        <![CDATA[<style>
        /* ==========================================         Utility CSS to demonstrate display.         These styles not part of shared css         ========================================== */
        [class*="qti-layout-col"] { background-color: #fff; }
        .container-height-200 { height: 200px;background-color: #ddd; }
        div.code { font-size: smaller; line-height: .75rem; }
        div.element {
          /* blue */
          background-color: #3d8ef8;
          color: white;
          letter-spacing: 1px;
          text-align: center;
          width: 100%;
          padding: 1;
          margin-bottom: .5rem;
          margin-top: 1rem;
          border-radius: 5px;
        }
        div.bar { background-color: black;color: white; letter-spacing: 1px; padding: 0; border-radius: 5px; }
        </style>]]>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <div class="qti-well">
              <p>The <strong>Height</strong> utility classes are named using the format:</p>
              <pre>.qti-height-{heightstyle}</pre>
              <p>Where <strong>{heightstyle}</strong> is one of (including the heightstyle definition):</p>
              <div class="code">
                <pre>0       { height: 0px; }</pre>
                <pre>px      { height: 1px; }</pre>
                <pre>0p5     { height: 0.125rem; }</pre>
                <pre>1       { height: 0.25rem; }</pre>
                <pre>1p5     { height: 0.375rem; }</pre>
                <pre>2       { height: 0.5rem; }</pre>
                <pre>2p5     { height: 0.625rem; }</pre>
                <pre>3       { height: 0.75rem; }</pre>
                <pre>3p5     { height: 0.875rem; }</pre>
                <pre>4       { height: 1rem; }</pre>
                <pre>5       { height: 1.25rem; }</pre>
                <pre>6       { height: 1.5rem; }</pre>
                <pre>7       { height: 1.75rem; }</pre>
                <pre>8       { height: 2rem; }</pre>
                <pre>9       { height: 2.25rem; }</pre>
                <pre>10      { height: 2.5rem; }</pre>
                <pre>11      { height: 2.75rem; }</pre>
                <pre>12      { height: 3rem; }</pre>
                <pre>14      { height: 3.5rem; }</pre>
                <pre>16      { height: 4rem; }</pre>
                <pre>20      { height: 5rem; }</pre>
                <pre>24      { height: 6rem; }</pre>
                <pre>28      { height: 7rem; }</pre>
                <pre>32      { height: 8rem; }</pre>
                <pre>36      { height: 9rem; }</pre>
                <pre>40      { height: 10rem; }</pre>
                <pre>44      { height: 11rem; }</pre>
                <pre>48      { height: 12rem; }</pre>
                <pre>52      { height: 13rem; }</pre>
                <pre>56      { height: 14rem; }</pre>
                <pre>60      { height: 15rem; }</pre>
                <pre>64      { height: 16rem; }</pre>
                <pre>72      { height: 18rem; }</pre>
                <pre>80      { height: 20rem; }</pre>
                <pre>96      { height: 24rem; }</pre>
                <pre>1-2     { height: 50%; }</pre>
                <pre>1-3     { height: 33.333333%; }</pre>
                <pre>2-3     { height: 66.666667%; }</pre>
                <pre>1-4     { height: 25%; }</pre>
                <pre>2-4     { height: 50%; }</pre>
                <pre>3-4     { height: 75%; }</pre>
                <pre>1-5     { height: 20%; }</pre>
                <pre>2-5     { height: 40%; }</pre>
                <pre>3-5     { height: 60%; }</pre>
                <pre>4-5     { height: 80%; }</pre>
                <pre>1-6     { height: 16.666667%; }</pre>
                <pre>2-6     { height: 33.333333%; }</pre>
                <pre>3-6     { height: 50%; }</pre>
                <pre>4-6     { height: 66.666667%; }</pre>
                <pre>5-6     { height: 83.333333%; }</pre>
                <pre>full    { height: 100%; }</pre>
                <pre>auto    { height: auto; }</pre>
              </div>
            </div><!-- /well -->
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">0</div></div><div class="qti-layout-col1"><div class="element">px</div></div><div class="qti-layout-col1"><div class="element">0p5</div></div><div class="qti-layout-col1"><div class="element">1</div></div><div class="qti-layout-col1"><div class="element">1p5</div></div><div class="qti-layout-col1"><div class="element">2</div></div><div class="qti-layout-col1"><div class="element">2p5</div></div><div class="qti-layout-col1"><div class="element">3</div></div><div class="qti-layout-col1"><div class="element">3p5</div></div><div class="qti-layout-col1"><div class="element">4</div></div><div class="qti-layout-col1"><div class="element">5</div></div><div class="qti-layout-col1"><div class="element">6</div></div>
        </div>
          
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-0"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-px"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-0p5"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-1"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-1p5"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-2"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-2p5"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-3"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-3p5"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-4"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-5"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-6"></div></div>
        </div>
          
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">7</div></div><div class="qti-layout-col1"><div class="element">8</div></div><div class="qti-layout-col1"><div class="element">9</div></div><div class="qti-layout-col1"><div class="element">10</div></div><div class="qti-layout-col1"><div class="element">11</div></div><div class="qti-layout-col1"><div class="element">12</div></div><div class="qti-layout-col1"><div class="element">14</div></div><div class="qti-layout-col1"><div class="element">16</div></div><div class="qti-layout-col1"><div class="element">20</div></div><div class="qti-layout-col1"><div class="element">24</div></div><div class="qti-layout-col1"><div class="element">28</div></div><div class="qti-layout-col1"><div class="element">32</div></div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-7"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-8"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-9"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-10"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-11"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-12"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-14"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-16"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-20"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-24"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-28"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-32"></div></div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">36</div></div><div class="qti-layout-col1"><div class="element">40</div></div><div class="qti-layout-col1"><div class="element">44</div></div><div class="qti-layout-col1"><div class="element">48</div></div><div class="qti-layout-col1"><div class="element">52</div></div><div class="qti-layout-col1"><div class="element">56</div></div><div class="qti-layout-col1"><div class="element">60</div></div><div class="qti-layout-col1"><div class="element">64</div></div><div class="qti-layout-col1"><div class="element">72</div></div><div class="qti-layout-col1"><div class="element">80</div></div><div class="qti-layout-col1"><div class="element">96</div></div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-36"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-40"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-44"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-48"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-52"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-56"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-60"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-64"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-72"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-80"></div></div><div class="qti-layout-col1"><div class="qti-display-flex bar qti-height-96"></div></div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">1-2</div></div><div class="qti-layout-col1"><div class="element">1-3</div></div><div class="qti-layout-col1"><div class="element">2-3</div></div><div class="qti-layout-col1"><div class="element">1-4</div></div><div class="qti-layout-col1"><div class="element">2-4</div></div><div class="qti-layout-col1"><div class="element">3-4</div></div><div class="qti-layout-col1"><div class="element">1-5</div></div><div class="qti-layout-col1"><div class="element">2-5</div></div><div class="qti-layout-col1"><div class="element">3-5</div></div><div class="qti-layout-col1"><div class="element">4-5</div></div><div class="qti-layout-col1"><div class="element">full</div></div><div class="qti-layout-col1"><div class="element">auto</div></div>
        </div>
          
        <div class="qti-layout-row">
          <div class="qti-layout-col1 container-height-200"><div class="qti-display-flex bar qti-height-1-2"></div></div><div class="qti-layout-col1 container-height-200"><div class="qti-display-flex bar qti-height-1-3"></div></div><div class="qti-layout-col1 container-height-200"><div class="qti-display-flex bar qti-height-2-3"></div></div><div class="qti-layout-col1 container-height-200"><div class="qti-display-flex bar qti-height-1-4"></div></div><div class="qti-layout-col1 container-height-200"><div class="qti-display-flex bar qti-height-2-4"></div></div><div class="qti-layout-col1 container-height-200"><div class="qti-display-flex bar qti-height-3-4"></div></div><div class="qti-layout-col1 container-height-200"><div class="qti-display-flex bar qti-height-1-5"></div></div><div class="qti-layout-col1 container-height-200"><div class="qti-display-flex bar qti-height-2-5"></div></div><div class="qti-layout-col1 container-height-200"><div class="qti-display-flex bar qti-height-3-5"></div></div><div class="qti-layout-col1 container-height-200"><div class="qti-display-flex bar qti-height-4-5"></div></div><div class="qti-layout-col1 container-height-200"><div class="qti-display-flex bar qti-height-full"></div></div><div class="qti-layout-col1 container-height-200"><div class="qti-display-flex bar qti-height-auto">I am in a height auto div</div></div>
        </div>
        
      </div>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "i19b-shared-css-vocab-6",
    "guid": "0000-0004-006",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
    identifier="i19b-shared-css-vocab-6" title="i19b Shared CSS Vocabulary 6 (Width)"
    time-dependent="false" adaptive="false">
    <qti-item-body>
      <div>
        <![CDATA[<style>
        /* ==========================================         Utility CSS to demonstrate display.         These styles not part of shared css         ========================================== */
        [class*="qti-layout-col"] { background-color: #fff; }
        .container-background { background-color: #ddd; }
        div.code { font-size: smaller; line-height: .75rem; }
        div.element {
          /* blue */
          background-color: #3d8ef8;
          color: white;
          font-size: 15px;
          line-height: 1.5rem;
          letter-spacing: 1px;
          text-align: center;
          vertical-align: middle;
          width: 100%;
          padding: 1px;
          margin-bottom: .5rem;
          border-radius: 5px;
        }
        div.bar { display: block;background-color: black;color: white; letter-spacing: 1px; padding: 0;border-radius: 5px;height: 1.65rem; }            div.bar.inline { display:inline-block; font-size: 15px; line-height: 1.5rem; letter-spacing: 1px; padding-top: 1px; }
        </style>]]>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <div class="qti-well">
              <p>The <strong>Width</strong> utility classes are named using the format:</p>
              <pre>.qti-width-{widthstyle}</pre>
              <p>Where <strong>{widthstyle}</strong> is one of (including the widthstyle definition):</p>
              <div class="code">
                <pre>0       { width: 0px; }</pre>
                <pre>px      { width: 1px; }</pre>
                <pre>0p5     { width: 0.125rem; }</pre>
                <pre>1       { width: 0.25rem; }</pre>
                <pre>1p5     { width: 0.375rem; }</pre>
                <pre>2       { width: 0.5rem; }</pre>
                <pre>2p5     { width: 0.625rem; }</pre>
                <pre>3       { width: 0.75rem; }</pre>
                <pre>3p5     { width: 0.875rem; }</pre>
                <pre>4       { width: 1rem; }</pre>
                <pre>5       { width: 1.25rem; }</pre>
                <pre>6       { width: 1.5rem; }</pre>
                <pre>7       { width: 1.75rem; }</pre>
                <pre>8       { width: 2rem; }</pre>
                <pre>9       { width: 2.25rem; }</pre>
                <pre>10      { width: 2.5rem; }</pre>
                <pre>11      { width: 2.75rem; }</pre>
                <pre>12      { width: 3rem; }</pre>
                <pre>14      { width: 3.5rem; }</pre>
                <pre>16      { width: 4rem; }</pre>
                <pre>20      { width: 5rem; }</pre>
                <pre>24      { width: 6rem; }</pre>
                <pre>28      { width: 7rem; }</pre>
                <pre>32      { width: 8rem; }</pre>
                <pre>36      { width: 9rem; }</pre>
                <pre>40      { width: 10rem; }</pre>
                <pre>44      { width: 11rem; }</pre>
                <pre>48      { width: 12rem; }</pre>
                <pre>52      { width: 13rem; }</pre>
                <pre>56      { width: 14rem; }</pre>
                <pre>60      { width: 15rem; }</pre>
                <pre>64      { width: 16rem; }</pre>
                <pre>72      { width: 18rem; }</pre>
                <pre>80      { width: 20rem; }</pre>
                <pre>96      { width: 24rem; }</pre>
                <pre>1-2     { width: 50%; }</pre>
                <pre>1-3     { width: 33.333333%; }</pre>
                <pre>2-3     { width: 66.666667%; }</pre>
                <pre>1-4     { width: 25%; }</pre>
                <pre>2-4     { width: 50%; }</pre>
                <pre>3-4     { width: 75%; }</pre>
                <pre>1-5     { width: 20%; }</pre>
                <pre>2-5     { width: 40%; }</pre>
                <pre>3-5     { width: 60%; }</pre>
                <pre>4-5     { width: 80%; }</pre>
                <pre>1-6     { width: 16.666667%; }</pre>
                <pre>2-6     { width: 33.333333%; }</pre>
                <pre>3-6     { width: 50%; }</pre>
                <pre>4-6     { width: 66.666667%; }</pre>
                <pre>5-6     { width: 83.333333%; }</pre>
                <pre>1-12    { width: 8.333333%; }</pre>
                <pre>2-12    { width: 16.666667%; }</pre>
                <pre>3-12    { width: 25%; }</pre>
                <pre>4-12    { width: 33.333333%; }</pre>
                <pre>5-12    { width: 41.666667%; }</pre>
                <pre>6-12    { width: 50%; }</pre>
                <pre>7-12    { width: 58.333333%; }</pre>
                <pre>8-12    { width: 66.666667%; }</pre>
                <pre>9-12    { width: 75%; }</pre>
                <pre>10-12   { width: 83.333333%; }</pre>
                <pre>11-12   { width: 91.666667%; }</pre>
                <pre>full    { width: 100%; }</pre>
                <pre>auto    { width: auto; }</pre>
              </div><!-- /code -->
            </div><!-- /well -->
          </div>
        </div>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">0</div></div><div class="qti-layout-col11"><div class="bar qti-width-0"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">px</div></div><div class="qti-layout-col11"><div class="bar qti-width-px"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">0p5</div></div><div class="qti-layout-col11"><div class="bar qti-width-0p5"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">1</div></div><div class="qti-layout-col11"><div class="bar qti-width-1"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">1p5</div></div><div class="qti-layout-col11"><div class="bar qti-width-1p5"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">2</div></div><div class="qti-layout-col11"><div class="bar qti-width-2"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">2p5</div></div><div class="qti-layout-col11"><div class="bar qti-width-2p5"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">3</div></div><div class="qti-layout-col11"><div class="bar qti-width-3"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">3p5</div></div><div class="qti-layout-col11"><div class="bar qti-width-3p5"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">4</div></div><div class="qti-layout-col11"><div class="bar qti-width-4"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">5</div></div><div class="qti-layout-col11"><div class="bar qti-width-5"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">6</div></div><div class="qti-layout-col11"><div class="bar qti-width-6"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">7</div></div><div class="qti-layout-col11"><div class="bar qti-width-7"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">8</div></div><div class="qti-layout-col11"><div class="bar qti-width-8"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">9</div></div><div class="qti-layout-col11"><div class="bar qti-width-9"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">10</div></div><div class="qti-layout-col11"><div class="bar qti-width-10"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">11</div></div><div class="qti-layout-col11"><div class="bar qti-width-11"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">12</div></div><div class="qti-layout-col11"><div class="bar qti-width-12"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">14</div></div><div class="qti-layout-col11"><div class="bar qti-width-14"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">16</div></div><div class="qti-layout-col11"><div class="bar qti-width-16"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">20</div></div><div class="qti-layout-col11"><div class="bar qti-width-20"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">24</div></div><div class="qti-layout-col11"><div class="bar qti-width-24"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">28</div></div><div class="qti-layout-col11"><div class="bar qti-width-28"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">32</div></div><div class="qti-layout-col11"><div class="bar qti-width-32"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">36</div></div><div class="qti-layout-col11"><div class="bar qti-width-36"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">40</div></div><div class="qti-layout-col11"><div class="bar qti-width-40"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">44</div></div><div class="qti-layout-col11"><div class="bar qti-width-44"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">48</div></div><div class="qti-layout-col11"><div class="bar qti-width-48"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">52</div></div><div class="qti-layout-col11"><div class="bar qti-width-52"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">56</div></div><div class="qti-layout-col11"><div class="bar qti-width-56"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">60</div></div><div class="qti-layout-col11"><div class="bar qti-width-60"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">64</div></div><div class="qti-layout-col11"><div class="bar qti-width-64"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">72</div></div><div class="qti-layout-col11"><div class="bar qti-width-72"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">80</div></div><div class="qti-layout-col11"><div class="bar qti-width-80"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">96</div></div><div class="qti-layout-col11"><div class="bar qti-width-96"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">1-2</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-1-2"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">1-3</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-1-3"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">2-3</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-2-3"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">1-4</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-1-4"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">2-4</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-2-4"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">1-5</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-1-5"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">2-5</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-2-5"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">3-5</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-3-5"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">4-5</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-4-5"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">1-6</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-1-6"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">2-6</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-2-6"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">3-6</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-3-6"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">4-6</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-4-6"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">5-6</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-5-6"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">1-12</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-1-12"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">2-12</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-2-12"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">3-12</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-3-12"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">4-12</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-4-12"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">5-12</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-5-12"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">6-12</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-6-12"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">7-12</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-7-12"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">8-12</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-8-12"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">9-12</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-9-12"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">10-12</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-10-12"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">11-12</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-11-12"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">full</div></div><div class="qti-layout-col11 container-background"><div class="bar qti-width-full"></div></div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col1"><div class="element">auto</div></div><div class="qti-layout-col11 container-background"><div class="bar inline qti-width-auto">I am content in a width auto div</div></div>
        </div>
      </div>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "i19b-shared-css-vocab-7",
    "guid": "0000-0004-0007",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
    identifier="i19b-shared-css-vocab-7" title="i19b Shared CSS Vocabulary 7 (Text Indent Styles)"
    time-dependent="false" adaptive="false">
    <qti-item-body>
      <div>
        <![CDATA[<style>
        /* ==========================================         Utility CSS to demonstrate display.         These styles not part of shared css         ========================================== */
        [class*="qti-layout-col"] { background-color: #fff; }
        div.code { font-size: smaller; line-height: .75rem; }
        </style>]]>
      
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <div class="qti-well">
              <p>The <strong>Text-Indent</strong> utility classes are named using the format:</p>
              <pre>.qti-text-indent-{indentstyle}</pre>
              <p>Where <strong>{indentstyle}</strong> is one of (including the indentstyle definition):</p>
              <div class="code">
              <pre>0       { text-indent: 0px; }</pre>
              <pre>px      { text-indent: 1px; }</pre>
              <pre>0p5     { text-indent: 0.125rem; }</pre>
              <pre>1       { text-indent: 0.25rem; }</pre>
              <pre>1p5     { text-indent: 0.375rem; }</pre>
              <pre>2       { text-indent: 0.5rem; }</pre>
              <pre>2p5     { text-indent: 0.625rem; }</pre>
              <pre>3       { text-indent: 0.75rem; }</pre>
              <pre>3p5     { text-indent: 0.875rem; }</pre>
              <pre>4       { text-indent: 1rem; }</pre>
              <pre>5       { text-indent: 1.25rem; }</pre>
              <pre>6       { text-indent: 1.5rem; }</pre>
              <pre>7       { text-indent: 1.75rem; }</pre>
              <pre>8       { text-indent: 2rem; }</pre>
              <pre>12      { text-indent: 3rem; }</pre>
              <pre>16      { text-indent: 4rem; }</pre>
              <pre>20      { text-indent: 5rem; }</pre>
              <pre>24      { text-indent: 6rem; }</pre>
              <pre>28      { text-indent: 7rem; }</pre>
              <pre>32      { text-indent: 8rem; }</pre>
            </div>
          </div> <!-- /well -->
        </div>
      </div>
    
      <div class="qti-layout-row">
        <div class="qti-layout-col6">
      
          <h4>qti-text-indent-0</h4>
          <p class="qti-bordered qti-text-indent-0"> Paragraph with class="qti-text-indent-0".  The quick brown fox jumps over the lazy dog.             The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-px</h4>
          <p class="qti-bordered qti-text-indent-px">Paragraph with class="qti-text-indent-px".  The quick brown fox jumps over the lazy dog.            The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-0p5</h4>
          <p class="qti-bordered qti-text-indent-0p5">Paragraph with class="qti-text-indent-0p5".  The quick brown fox jumps over the lazy dog.            The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-1</h4>
          <p class="qti-bordered qti-text-indent-1">Paragraph with class="qti-text-indent-1".  The quick brown fox jumps over the lazy dog.            The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-1p5</h4>
          <p class="qti-bordered qti-text-indent-1p5">Paragraph with class="qti-text-indent-1p5".  The quick brown fox jumps over the lazy dog.            The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-2</h4>
          <p class="qti-bordered qti-text-indent-2">Paragraph with class="qti-text-indent-2".  The quick brown fox jumps over the lazy dog.            The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-2p5</h4>
          <p class="qti-bordered qti-text-indent-2p5">Paragraph with class="qti-text-indent-2p5".  The quick brown fox jumps over the lazy dog.            The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-3</h4>
          <p class="qti-bordered qti-text-indent-3">Paragraph with class="qti-text-indent-3".  The quick brown fox jumps over the lazy dog.            The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-3p5</h4>
          <p class="qti-bordered qti-text-indent-3p5">Paragraph with class="qti-text-indent-3p5".  The quick brown fox jumps over the lazy dog.            The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-4</h4>
          <p class="qti-bordered qti-text-indent-4">Paragraph with class="qti-text-indent-4".  The quick brown fox jumps over the lazy dog.            The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        </div>
        
        <div class="qti-layout-col6">
          <h4>qti-text-indent-5</h4>
          <p class="qti-bordered qti-text-indent-5">Paragraph with with class="qti-text-indent-5".  The quick brown fox jumps over the lazy dog.              The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-6</h4>
          <p class="qti-bordered qti-text-indent-6">Paragraph with class="qti-text-indent-6".  The quick brown fox jumps over the lazy dog.              The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-7</h4>
          <p class="qti-bordered qti-text-indent-7">Paragraph with class="qti-text-indent-7".  The quick brown fox jumps over the lazy dog.              The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-8</h4>
          <p class="qti-bordered qti-text-indent-8">Paragraph with class="qti-text-indent-8".  The quick brown fox jumps over the lazy dog.              The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-12</h4>
          <p class="qti-bordered qti-text-indent-12">Paragraph with class="qti-text-indent-12".  The quick brown fox jumps over the lazy dog.              The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-16</h4>
          <p class="qti-bordered qti-text-indent-16">Paragraph with class="qti-text-indent-16".  The quick brown fox jumps over the lazy dog.              The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-20</h4>
          <p class="qti-bordered qti-text-indent-20">Paragraph with class="qti-text-indent-20".  The quick brown fox jumps over the lazy dog.              The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          
          <h4>qti-text-indent-24</h4>
          <p class="qti-bordered qti-text-indent-24">Paragraph with class="qti-text-indent-24".  The quick brown fox jumps over the lazy dog.              The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>            
          
          <h4>qti-text-indent-28</h4>
          <p class="qti-bordered qti-text-indent-28">Paragraph with class="qti-text-indent-28".  The quick brown fox jumps over the lazy dog.              The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>            
          
          <h4>qti-text-indent-32</h4>
          <p class="qti-bordered qti-text-indent-32"> Paragraph with class="qti-text-indent-32".  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          </div>
        </div>
      </div>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "i19b-shared-css-vocab-8",
    "guid": "0000-0004-0008",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
    identifier="i19b-shared-css-vocab-8" title="i19b Shared CSS Vocabulary 8 (List Styles)"
    time-dependent="false" adaptive="false">
    <qti-item-body>
      <div>
        <![CDATA[<style>
        /* ==========================================         Utility CSS to demonstrate display.         These styles not part of shared css         ========================================== */
        [class*="qti-layout-col"] { background-color: #fff; }
        div.code { font-size: smaller; line-height: .75rem; }
        </style>]]>
          
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <div class="qti-well">
              <p>The <strong>List Style Type</strong> utility classes are named using the format:</p>
              <pre>.qti-list-style-type-{typestyle}</pre>
              <p>Where <strong>{typestyle}</strong> is one of (including the typestyle definition):</p>
              <div class="code">
                <pre>none                    { list-type-style: none; }</pre>
                <pre>disc                    { list-type-style: disc; }</pre>
                <pre>circle                  { list-type-style: circle; }</pre>
                <pre>square                  { list-type-style: square; }</pre>
                <pre>decimal                 { list-type-style: decimal; }</pre>
                <pre>decimal-leading-zero    { list-style-type: decimal-leading-zero; }</pre>
                <pre>lower-alpha             { list-style-type: lower-alpha; }</pre>
                <pre>upper-alpha             { list-style-type: upper-alpha; }</pre>
                <pre>lower-roman             { list-style-type: lower-roman; }</pre>
                <pre>upper-roman             { list-style-type: upper-roman; }</pre>
                <pre>lower-latin             { list-style-type: lower-latin; }</pre>
                <pre>upper-latin             { list-style-type: upper-latin; }</pre>
                <pre>lower-greek             { list-style-type: lower-greek; }</pre>
                <pre>arabic-indic            { list-style-type: arabic-indic; }</pre>
                <pre>armenian                { list-style-type: armenian; }</pre>
                <pre>lower-armenian          { list-style-type: lower-armenian; }</pre>
                <pre>upper-armenian          { list-style-type: upper-armenian; }</pre>
                <pre>bengali                 { list-style-type: bengali; }</pre>
                <pre>cambodian               { list-style-type: cambodian; }</pre>
                <pre>simp-chinese-formal     { list-style-type: simp-chinese-formal; }</pre>
                <pre>simp-chinese-informal   { list-style-type: simp-chinese-informal; }</pre>
                <pre>trad-chinese-formal     { list-style-type: trad-chinese-formal; }</pre>
                <pre>trad-chinese-informal   { list-style-type: trad-chinese-informal; }</pre>
                <pre>cjk-ideographic         { list-style-type: cjk-ideographic; }</pre>
                <pre>cjk-heavenly-stem       { list-style-type: cjk-heavenly-stem; }</pre>
                <pre>cjk-earthly-branch      { list-style-type: cjk-earthly-branch; }</pre>
                <pre>devanagari              { list-style-type: devanagari; }</pre>
                <pre>ethiopic-halehame-ti-er { list-style-type: ethiopic-halehame-ti-er; }</pre>
                <pre>ethiopic-halehame-ti-et { list-style-type: ethiopic-halehame-ti-et; }</pre>
                <pre>ethiopic-halehame-am    { list-style-type: ethiopic-halehame-am; }</pre>
                <pre>ethiopic-halehame       { list-style-type: ethiopic-halehame; }</pre>
                <pre>georgian                { list-style-type: georgian; }</pre>
                <pre>gujarati                { list-style-type: gujarati; }</pre>
                <pre>gurmukhi                { list-style-type: gurmukhi; }</pre>
                <pre>hangul                  { list-style-type: hangul; }</pre>
                <pre>hangul-consonant        { list-style-type: hangul-consonant; }</pre>
                <pre>hebrew                  { list-style-type: hebrew; }</pre>
                <pre>hiragana                { list-style-type: hiragana; }</pre>
                <pre>hiragana-iroha          { list-style-type: hiragana-iroha; }</pre>
                <pre>khmer                   { list-style-type: khmer; }</pre>
                <pre>korean-hangul-formal    { list-style-type: korean-hangul-formal; }</pre>
                <pre>korean-hanja-formal     { list-style-type: korean-hanja-formal; }</pre>
                <pre>korean-hanja-informal   { list-style-type: korean-hanja-informal; }</pre>
                <pre>lao                     { list-style-type: lao; }</pre>
                <pre>malayalam               { list-style-type: malayalam; }</pre>
                <pre>mongolian               { list-style-type: mongolian; }</pre>
                <pre>myanmar                 { list-style-type: myanmar; }</pre>
                <pre>oriya                   { list-style-type: oriya; }</pre>
                <pre>persian                 { list-style-type: persian; }</pre>
                <pre>thai                    { list-style-type: thai; }</pre>
                <pre>tibetan                 { list-style-type: tibetan; }</pre>
                <pre>telugu                  { list-style-type: telugu; }</pre>
                <pre>urdu                    { list-style-type: urdu; }</pre>
              </div> <!-- /code -->
            </div><!-- /well -->
          </div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col4">
            <h4>qti-list-style-type-none</h4><ol class="qti-list-style-type-none"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-disc</h4><ol class="qti-list-style-type-disc"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-square</h4><ol class="qti-list-style-type-square"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-circle</h4><ol class="qti-list-style-type-circle"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-decimal</h4><ol class="qti-list-style-type-decimal"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-decimal-leading-zero</h4><ol class="qti-list-style-type-decimal-leading-zero"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-lower-alpha</h4><ol class="qti-list-style-type-lower-alpha"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-upper-alpha</h4><ol class="qti-list-style-type-upper-alpha"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-lower-roman</h4><ol class="qti-list-style-type-lower-roman"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-upper-roman</h4><ol class="qti-list-style-type-upper-roman"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-lower-latin</h4><ol class="qti-list-style-type-lower-latin"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-upper-latin</h4><ol class="qti-list-style-type-upper-latin"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-lower-greek</h4><ol class="qti-list-style-type-lower-greek"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-arabic-indic</h4><ol class="qti-list-style-type-arabic-indic"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-armenian</h4><ol class="qti-list-style-type-armenian"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-lower-armenian</h4><ol class="qti-list-style-type-lower-armenian"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-upper-armenian</h4><ol class="qti-list-style-type-upper-armenian"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-bengali</h4><ol class="qti-list-style-type-bengali"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol>
          </div>
          <div class="qti-layout-col4">
            <h4>qti-list-style-type-cambodian</h4><ol class="qti-list-style-type-cambodian"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-simp-chinese-formal</h4><ol class="qti-list-style-type-simp-chinese-formal"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-simp-chinese-informal</h4><ol class="qti-list-style-type-simp-chinese-informal"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-trad-chinese-formal</h4><ol class="qti-list-style-type-trad-chinese-formal"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-trad-chinese-informal</h4><ol class="qti-list-style-type-trad-chinese-informal"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-cjk-ideographic</h4><ol class="qti-list-style-type-cjk-ideographic "><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-cjk-heavenly-stem</h4><ol class="qti-list-style-type-cjk-heavenly-stem"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-cjk-earthly-branch</h4><ol class="qti-list-style-type-cjk-earthly-branch"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-devanagari</h4><ol class="qti-list-style-type-devanagari"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-ethiopic-halehame-ti-er</h4><ol class="qti-list-style-type-ethiopic-halehame-ti-er"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-ethiopic-halehame-ti-et</h4><ol class="qti-list-style-type-ethiopic-halehame-ti-et"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-ethiopic-halehame-am</h4><ol class="qti-list-style-type-ethiopic-halehame-am"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-ethiopic-halehame</h4><ol class="qti-list-style-type-ethiopic-halehame"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-georgian</h4><ol class="qti-list-style-type-georgian"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-gujarati</h4><ol class="qti-list-style-type-gujarati"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-gurmukhi</h4><ol class="qti-list-style-type-gurmukhi"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-hangul</h4><ol class="qti-list-style-type-hangul"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-hangul-consonant</h4><ol class="qti-list-style-type-hangul-consonant"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol>
          </div>
          <div class="qti-layout-col4">
            <h4>qti-list-style-type-hebrew</h4><ol class="qti-list-style-type-hebrew"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-hiragana</h4><ol class="qti-list-style-type-hiragana"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-hiragana-iroha</h4><ol class="qti-list-style-type-hiragana-iroha"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-khmer</h4><ol class="qti-list-style-type-khmer"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-korean-hangul-formal</h4><ol class="qti-list-style-type-korean-hangul-formal"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-korean-hanja-formal</h4><ol class="qti-list-style-type-korean-hanja-formal"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-korean-hanja-informal</h4><ol class="qti-list-style-type-korean-hanja-informal"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-lao</h4><ol class="qti-list-style-type-lao"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-malayalam</h4><ol class="qti-list-style-type-malayalam"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-mongolian</h4><ol class="qti-list-style-type-mongolian"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-myanmar</h4><ol class="qti-list-style-type-myanmar"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-oriya</h4><ol class="qti-list-style-type-oriya"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-persian</h4><ol class="qti-list-style-type-persian"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-thai</h4><ol class="qti-list-style-type-thai"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-tibetan</h4><ol class="qti-list-style-type-tibetan"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-telugu</h4><ol class="qti-list-style-type-telugu"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol><h4>qti-list-style-type-urdu</h4><ol class="qti-list-style-type-urdu"><li>Apollo</li><li>Hubble</li><li>Chandra</li><li>Cassini-Huygens</li><li>Spitzer</li></ol>
          </div>
        </div>
      </div>
          
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "i9b-response-processing-fixed-template-match-correct-identifier",
    "guid": "0000-0005-0001",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<qti-assessment-item xmlns=\"http://www.imsglobal.org/xsd/imsqtiasi_v3p0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd\" identifier=\"i9b-response-processing-fixed-template-match_correct-identifier\" title=\"I9b - Response Processing Fixed Template - Match Correct Identifier\" adaptive=\"false\" time-dependent=\"false\">\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\">\n        <qti-correct-response>\n            <qti-value>choice_a</qti-value>\n        </qti-correct-response>\n    </qti-response-declaration>\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"/>\n    <qti-item-body>\n        <qti-choice-interaction response-identifier=\"RESPONSE\" max-choices=\"1\">\n            <qti-prompt>Select a SimpleChoice below or do not select any SimpleChoice, and trigger Response Processing by ending the attempt.</qti-prompt>\n            <qti-simple-choice identifier=\"choice_a\">Correct</qti-simple-choice>\n            <qti-simple-choice identifier=\"choice_b\">Incorrect</qti-simple-choice>\n        </qti-choice-interaction>\n    </qti-item-body>\n    <qti-response-processing template=\"https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml\"/>\n</qti-assessment-item>"
  },
  {
    "identifier": "i9b-response-processing-fixed-template-map-response-identifier",
    "guid": "0000-0005-0002",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<qti-assessment-item xmlns=\"http://www.imsglobal.org/xsd/imsqtiasi_v3p0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd\" identifier=\"i9b-response-processing-fixed-template-map-response-identifier\" title=\"I9b - Response Processing Fixed Template - Map Response Identifier\" adaptive=\"false\" time-dependent=\"false\">\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\">\n        <!-- Optimal Response -->\n        <qti-correct-response>\n            <qti-value>choice_a</qti-value>\n            <qti-value>choice_b</qti-value>\n            <qti-value>choice_c</qti-value>\n        </qti-correct-response>\n        <qti-mapping lower-bound=\"0\" upper-bound=\"6\" default-value=\"0\">\n            <qti-map-entry map-key=\"choice_a\" mapped-value=\"1\"/>\n            <qti-map-entry map-key=\"choice_b\" mapped-value=\"2.0\"/>\n            <qti-map-entry map-key=\"choice_c\" mapped-value=\"5\"/>\n            <qti-map-entry map-key=\"choice_d\" mapped-value=\"-1\"/>\n            <qti-map-entry map-key=\"choice_e\" mapped-value=\"-2.0\"/>\n            <qti-map-entry map-key=\"choice_f\" mapped-value=\"-5\"/>\n        </qti-mapping>\n    </qti-response-declaration>\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"/>\n    <qti-item-body>\n        <qti-choice-interaction response-identifier=\"RESPONSE\" min-choices=\"0\" max-choices=\"6\">\n            <qti-prompt>Select 0 to 6 SimpleChoices below and trigger Response Processing by ending the attempt.</qti-prompt>\n            <qti-simple-choice identifier=\"choice_a\">Mapped Value = 1.0</qti-simple-choice>\n            <qti-simple-choice identifier=\"choice_b\">Mapped Value = 2.0</qti-simple-choice>\n            <qti-simple-choice identifier=\"choice_c\">Mapped Value = 5.0</qti-simple-choice>\n            <qti-simple-choice identifier=\"choice_d\">Mapped Value = -1.0</qti-simple-choice>\n            <qti-simple-choice identifier=\"choice_e\">Mapped Value = -2.0</qti-simple-choice>\n            <qti-simple-choice identifier=\"choice_f\">Mapped Value = -5.0</qti-simple-choice>\n        </qti-choice-interaction>\n    </qti-item-body>\n    <qti-response-processing template=\"https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/map_response.xml\"/>\n</qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry",
    "guid": "0000-0009-0001",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  identifier=\"q20-textentry\" title=\"Q20 - Text Entry Interaction\" adaptive=\"false\" time-dependent=\"false\">\r\n  <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"string\"\/>\r\n  <qti-item-body>\r\n    <p>Complete the sentence.<\/p>\r\n    <p>The cow\r\n      <qti-text-entry-interaction response-identifier=\"RESPONSE\"\/>\r\n      over the moon.<\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-1",
    "guid": "0000-0009-0002",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\" time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-1\" title=\"TextEntry - (SV 1)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Identify the missing word in this famous quote from Shakespeare's Richard III.<\/p>\t\t\r\n    <blockquote>\r\n      <p>\r\n        Now is the winter of our discontent<br\/>\r\n        Made glorious summer by this sun of\r\n        <qti-text-entry-interaction response-identifier=\"RESPONSE\"\/>;<br\/>\r\n        And all the clouds that lour'd upon our house<br\/> In the deep bosom of the ocean\r\n        buried.\r\n      <\/p>\r\n    <\/blockquote>   \r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2a",
    "guid": "0000-0009-0003",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2a\" title=\"TextEntry - (SV 2a)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-1<\/em>.<\/p>\t\t\r\n    <p>qti-input-width-1 : <qti-text-entry-interaction class=\"qti-input-width-1\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2b",
    "guid": "0000-0009-0004",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2b\" title=\"TextEntry - (SV 2b)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-2<\/em>.<\/p>\t\t\r\n    <p>qti-input-width-2 : <qti-text-entry-interaction class=\"qti-input-width-2\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2c",
    "guid": "0000-0009-0005",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2c\" title=\"TextEntry - (SV 2c)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-3<\/em>.<\/p>\t\t\r\n    <p>qti-input-width-3 : <qti-text-entry-interaction class=\"qti-input-width-3\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2d",
    "guid": "0000-0009-0006",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2d\" title=\"TextEntry - (SV 2d)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-4<\/em>.<\/p>\r\n    <p>qti-input-width-4 : <qti-text-entry-interaction class=\"qti-input-width-4\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2j",
    "guid": "0000-0009-0012",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2j\" title=\"TextEntry - (SV 2j)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-5<\/em>.<\/p>\r\n    <p>qti-input-width-5 : <qti-text-entry-interaction class=\"qti-input-width-5\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2e",
    "guid": "0000-0009-0007",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2e\" title=\"TextEntry - (SV 2e)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-6<\/em>.<\/p>\r\n    <p>qti-input-width-6 : <qti-text-entry-interaction class=\"qti-input-width-6\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2f",
    "guid": "0000-0009-0008",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2f\" title=\"TextEntry - (SV 2f)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-10<\/em>.<\/p>\t\t\r\n    <p>qti-input-width-10: <qti-text-entry-interaction class=\"qti-input-width-10\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2g",
    "guid": "0000-0009-0009",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2g\" title=\"TextEntry - (SV 2g)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-15<\/em>.<\/p>\t\t\r\n    <p>qti-input-width-15: <qti-text-entry-interaction class=\"qti-input-width-15\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2h",
    "guid": "0000-0009-0010",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2h\" title=\"TextEntry - (SV 2h)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-20<\/em>.<\/p>\t\t\r\n    <p>qti-input-width-20: <qti-text-entry-interaction class=\"qti-input-width-20\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2k",
    "guid": "0000-0009-0013",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2k\" title=\"TextEntry - (SV 2k)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-25<\/em>.<\/p>\r\n    <p>qti-input-width-25 : <qti-text-entry-interaction class=\"qti-input-width-25\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2l",
    "guid": "0000-0009-0014",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2l\" title=\"TextEntry - (SV 2l)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-30<\/em>.<\/p>\r\n    <p>qti-input-width-30 : <qti-text-entry-interaction class=\"qti-input-width-30\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2m",
    "guid": "0000-0009-0015",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2m\" title=\"TextEntry - (SV 2m)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-35<\/em>.<\/p>\r\n    <p>qti-input-width-35 : <qti-text-entry-interaction class=\"qti-input-width-35\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2n",
    "guid": "0000-0009-0016",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2n\" title=\"TextEntry - (SV 2n)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-40<\/em>.<\/p>\r\n    <p>qti-input-width-40 : <qti-text-entry-interaction class=\"qti-input-width-40\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2o",
    "guid": "0000-0009-0017",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2o\" title=\"TextEntry - (SV 2o)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-45<\/em>.<\/p>\r\n    <p>qti-input-width-45 : <qti-text-entry-interaction class=\"qti-input-width-45\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2p",
    "guid": "0000-0009-0018",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2p\" title=\"TextEntry - (SV 2p)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-50<\/em>.<\/p>\r\n    <p>qti-input-width-50 : <qti-text-entry-interaction class=\"qti-input-width-50\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-2i",
    "guid": "0000-0009-0011",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-2i\" title=\"TextEntry - (SV 2i)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>qti-input-width-72<\/em>.<\/p>\t\t\r\n    <p>qti-input-width-72: <qti-text-entry-interaction class=\"qti-input-width-72\" response-identifier=\"RESPONSE\"\/><\/p>\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-sv-3",
    "guid": "0000-0009-0019",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd http:\/\/www.w3.org\/1998\/Math\/MathML https:\/\/purl.imsglobal.org\/spec\/mathml\/v3p0\/schema\/xsd\/mathml3.xsd\"\r\n  adaptive=\"false\"  time-dependent=\"false\" \r\n  identifier=\"q20-textentry-sv-3\" title=\"TextEntry - (SV 3)\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\" \/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Demonstrates <em>pattern mask and pattern mask message<\/em>.<\/p>\t\t\r\n\r\n    <p>\r\n      qti-input-width-6, patternmask=\"([0-9.]{0,6})\", data-patternmask-message=\"Maximum of 6 digits or decimal points permitted\"<br\/>\r\n      <math xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\">\r\n        <mrow> <mn>14<\/mn> <mo class=\"sign\">\u00D7<\/mo> <mrow> <mi>tan<\/mi> <mo>\u2061<\/mo> <mfenced> <mrow> <mn>67<\/mn> <\/mrow> <\/mfenced> <\/mrow>\r\n        <\/mrow> \r\n      <\/math> = <qti-text-entry-interaction class=\"qti-input-width-6\" pattern-mask=\"([0-9.]{0,6})\" data-patternmask-message=\"Maximum of 6 digits or decimal points permitted\" response-identifier=\"RESPONSE\"\/>\r\n    <\/p>\r\n\r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q20-textentry-composite",
    "guid": "0000-0009-0020",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" \r\n  xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n  identifier=\"q20-text-entry-composite\" title=\"Q20 Text Entry Composite - widths\"\r\n  adaptive=\"false\" time-dependent=\"false\">\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE\">\r\n    <qti-correct-response>\r\n      <qti-value>York<\/qti-value>\r\n    <\/qti-correct-response>\r\n  <\/qti-response-declaration>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE1\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE2\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE3\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE4\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE5\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE6\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE7\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE8\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE9\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE10\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE11\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE12\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE13\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE14\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE15\"\/>\r\n  <qti-response-declaration base-type=\"string\" cardinality=\"single\" identifier=\"RESPONSE16\"\/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Identify the missing word in this famous quote from Shakespeare's Richard III.<\/p>\r\n    <blockquote>\r\n      <p>Now is the winter of our discontent\r\n      <br\/>Made glorious summer by this sun of <qti-text-entry-interaction class=\"qti-valign-baseline\" response-identifier=\"RESPONSE\"\/>;\r\n      <br\/>And all the clouds that lour'd upon our house\r\n      <br\/>In the deep bosom of the ocean buried.<\/p>\r\n    <\/blockquote>\r\n\r\n    <p>qti-input-width-1 : <qti-text-entry-interaction class=\"qti-input-width-1 qti-valign-baseline\" response-identifier=\"RESPONSE1\"\/><\/p>\r\n\r\n    <p>qti-input-width-2 : <qti-text-entry-interaction class=\"qti-input-width-2 qti-valign-baseline\" response-identifier=\"RESPONSE2\"\/><\/p>\r\n\r\n    <p>qti-input-width-3 : <qti-text-entry-interaction class=\"qti-input-width-3 qti-valign-baseline\" response-identifier=\"RESPONSE3\"\/><\/p>\r\n\r\n    <p>qti-input-width-4 : <qti-text-entry-interaction class=\"qti-input-width-4 qti-valign-baseline\" response-identifier=\"RESPONSE4\"\/><\/p>\r\n\r\n    <p>qti-input-width-5 : <qti-text-entry-interaction class=\"qti-input-width-5 qti-valign-baseline\" response-identifier=\"RESPONSE5\"\/><\/p>\r\n\r\n    <p>qti-input-width-6 : <qti-text-entry-interaction class=\"qti-input-width-6 qti-valign-baseline\" response-identifier=\"RESPONSE6\"\/><\/p>\r\n\r\n    <p>qti-input-width-10 : <qti-text-entry-interaction class=\"qti-input-width-10 qti-valign-baseline\" response-identifier=\"RESPONSE7\"\/><\/p>\r\n\r\n    <p>qti-input-width-15 : <qti-text-entry-interaction class=\"qti-input-width-15 qti-valign-baseline\" response-identifier=\"RESPONSE8\"\/><\/p>\r\n\r\n    <p>qti-input-width-20 : <qti-text-entry-interaction class=\"qti-input-width-20 qti-valign-baseline\" response-identifier=\"RESPONSE9\"\/><\/p>\r\n\r\n    <p>qti-input-width-25 : <qti-text-entry-interaction class=\"qti-input-width-25 qti-valign-baseline\" response-identifier=\"RESPONSE10\"\/><\/p>\r\n\r\n    <p>qti-input-width-30 : <qti-text-entry-interaction class=\"qti-input-width-30 qti-valign-baseline\" response-identifier=\"RESPONSE11\"\/><\/p>\r\n\r\n    <p>qti-input-width-35 : <qti-text-entry-interaction class=\"qti-input-width-35 qti-valign-baseline\" response-identifier=\"RESPONSE12\"\/><\/p>\r\n\r\n    <p>qti-input-width-40 : <qti-text-entry-interaction class=\"qti-input-width-40 qti-valign-baseline\" response-identifier=\"RESPONSE13\"\/><\/p>\r\n\r\n    <p>qti-input-width-45 : <qti-text-entry-interaction class=\"qti-input-width-45 qti-valign-baseline\" response-identifier=\"RESPONSE14\"\/><\/p>\r\n\r\n    <p>qti-input-width-50 : <qti-text-entry-interaction class=\"qti-input-width-50 qti-valign-baseline\" response-identifier=\"RESPONSE15\"\/><\/p>\r\n\r\n    <p>qti-input-width-72 : <qti-text-entry-interaction class=\"qti-input-width-72 qti-valign-baseline\" response-identifier=\"RESPONSE16\"\/><\/p>\r\n    \r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "amp-07-nextgen",
    "guid": "0000-0009-00021",
    "submissionMode": "simultaneous",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><qti-assessment-item xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://www.imsglobal.org/xsd/imsqtiasi_v3p0\" xsi:schemaLocation=\"http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd\" adaptive=\"true\" identifier=\"Example03-feedbackBlock-solution-qti3\" time-dependent=\"false\" title=\"Example 3 - Using feedbackBlock to show a solution (random)\" tool-name=\"Mathqurate\" tool-version=\"0.9.7b\"><qti-response-declaration base-type=\"float\" cardinality=\"single\" identifier=\"RESPONSE\"/><qti-response-declaration base-type=\"boolean\" cardinality=\"single\" identifier=\"SOLREQUEST\"/><qti-response-declaration base-type=\"boolean\" cardinality=\"single\" identifier=\"EndAttempt\"/><qti-outcome-declaration base-type=\"identifier\" cardinality=\"multiple\" identifier=\"FEEDBACK\"/><qti-outcome-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"EMPTY\"/><qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\" normal-maximum=\"10.0\" normal-minimum=\"0.0\"><qti-default-value><qti-value>0.0</qti-value></qti-default-value></qti-outcome-declaration> <qti-outcome-declaration base-type=\"boolean\" cardinality=\"single\" identifier=\"seenSolution\"><qti-default-value><qti-value>false</qti-value></qti-default-value></qti-outcome-declaration><qti-outcome-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"ASKSOLUTION\"><qti-default-value><qti-value>asksolution</qti-value></qti-default-value></qti-outcome-declaration><qti-template-declaration base-type=\"integer\" cardinality=\"single\" identifier=\"iA\" math-variable=\"true\" param-variable=\"false\"/><qti-template-declaration base-type=\"float\" cardinality=\"single\" identifier=\"fAns\" math-variable=\"true\" param-variable=\"false\"/><qti-template-declaration base-type=\"float\" cardinality=\"single\" identifier=\"fR\" math-variable=\"true\" param-variable=\"false\"/><qti-template-processing><qti-set-template-value identifier=\"iA\"><qti-random-integer max=\"4\" min=\"1\"/></qti-set-template-value><qti-set-template-value identifier=\"fAns\"><qti-math-operator name=\"exp\"><qti-variable identifier=\"iA\"/></qti-math-operator></qti-set-template-value><qti-set-template-value identifier=\"fR\"><qti-round-to figures=\"3\" rounding-mode=\"decimalPlaces\"><qti-variable identifier=\"fAns\"/></qti-round-to></qti-set-template-value></qti-template-processing><qti-item-body><div class=\"qti3-player-item-card qti-bordered\"><div class=\"qti3-player-item-card-body qti-padding-2\"><p class=\"\">Find the value of <math xmlns=\"http://www.w3.org/1998/Math/MathML\" id=\"mathML0\"><semantics><mrow><msup><mn>e</mn><mi>iA</mi></msup></mrow><annotation encoding=\"LaTeX\">\\[\\e^\\qv{iA}\\]</annotation></semantics></math> to 3 decimal places.</p><div class=\"\"><table class=\"\"><tbody class=\"\"><tr class=\"\"><td class=\"\"><qti-text-entry-interaction class=\"qti-input-width-10\" pattern-mask=\"([0-9.\\-]{0,10})\" id=\"textEntryInteraction0\" label=\"mathInput\" response-identifier=\"RESPONSE\"/></td><td class=\"\"><qti-feedback-inline id=\"feedbackInline0\" identifier=\"CORRECT\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\"> Correct </qti-feedback-inline><qti-feedback-inline id=\"feedbackInline1\" identifier=\"INCORRECT\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\"> No, that is not the correct answer</qti-feedback-inline></td></tr>\</tbody></table><p></p></div><!-- this feedbackBlock contains the solution --><qti-feedback-block class=\"\" id=\"feedbackBlock2\" identifier=\"SOLUTION\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\"><qti-content-body><div class=\"qti-well qti-margin-t-2\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" id=\"mathML1\"><semantics><mtable><mtr><mtd columnalign=\"right\"> <msup><mi>e</mi><mi>iA</mi></msup></mtd><mtd columnalign=\"center\"><mo>=</mo></mtd><mtd columnalign=\"left\"><mi>exp</mi><mfenced close=\")\" ><mi>iA</mi></mfenced></mtd></mtr><mtr><mtd columnalign=\"right\"/><mtd columnalign=\"center\"><mo>=</mo></mtd><mtd columnalign=\"left\"><mi>fR</mi></mtd></mtr> </mtable><annotation encoding=\"SnuggleTeX\">\\begin{eqnarray*}e^\\qv{iA} &amp;=&amp; \\exp(\\qv{iA})\\\\ &amp;=&amp; \\qv{fR}\\end{eqnarray*}</annotation></semantics></math></div></qti-content-body></qti-feedback-block><!-- Explain why the score is zero (after viewing solution) --><qti-feedback-block id=\"feedbackBlock4\" identifier=\"SEEN-SOLUTION\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\"><qti-content-body><p>Since you have viewed the solution, your score for this question will be 0. </p></qti-content-body></qti-feedback-block><!-- show the solution button --><qti-feedback-block id=\"feedbackBlock7\" identifier=\"asksolution\" outcome-identifier=\"ASKSOLUTION\" show-hide=\"show\"><qti-content-body><p class=\"qti-margin-t-2\"><qti-end-attempt-interaction id=\"endAttemptInteraction2\" response-identifier=\"SOLREQUEST\" title=\"Show Solution\"/></p></qti-content-body></qti-feedback-block></div><div class=\"qti3-player-item-card-footer qti-height-14 qti-padding-2\"><qti-end-attempt-interaction title=\"Check Answer\" class=\"\" response-identifier=\"EndAttempt\" data-steps=\"1\" /></div></div></qti-item-body><qti-response-processing><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-multiple><qti-variable identifier=\"EMPTY\"/></qti-multiple></qti-set-outcome-value><qti-response-condition><qti-response-if><qti-variable identifier=\"SOLREQUEST\"/><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-multiple><qti-base-value base-type=\"identifier\">SOLUTION</qti-base-value></qti-multiple></qti-set-outcome-value><qti-set-outcome-value identifier=\"seenSolution\"><qti-base-value base-type=\"boolean\">true</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"completionStatus\"><qti-base-value base-type=\"identifier\">completed</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"ASKSOLUTION\"><qti-base-value base-type=\"identifier\">null</qti-base-value></qti-set-outcome-value></qti-response-if><qti-response-else><qti-response-condition><qti-response-if><qti-is-null><qti-variable identifier=\"RESPONSE\"/></qti-is-null><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-multiple><qti-base-value base-type=\"identifier\">INCORRECT</qti-base-value></qti-multiple></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">0</qti-base-value></qti-set-outcome-value></qti-response-if><qti-response-else><qti-response-condition><qti-response-if><qti-equal-rounded figures=\"3\" rounding-mode=\"decimalPlaces\"><qti-variable identifier=\"RESPONSE\"/><qti-variable identifier=\"fAns\"/></qti-equal-rounded><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-multiple><qti-base-value base-type=\"identifier\">CORRECT</qti-base-value></qti-multiple></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">2</qti-base-value></qti-set-outcome-value></qti-response-if><qti-response-else><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-multiple><qti-base-value base-type=\"identifier\">INCORRECT</qti-base-value></qti-multiple></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">0</qti-base-value></qti-set-outcome-value></qti-response-else></qti-response-condition><qti-set-outcome-value identifier=\"completionStatus\"><qti-base-value base-type=\"identifier\">completed</qti-base-value></qti-set-outcome-value> <qti-set-outcome-value identifier=\"ASKSOLUTION\"><qti-base-value base-type=\"identifier\">null</qti-base-value></qti-set-outcome-value><qti-response-condition><qti-response-if><qti-variable identifier=\"seenSolution\"/><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-multiple><qti-variable identifier=\"FEEDBACK\"/><qti-base-value base-type=\"identifier\">SEEN-SOLUTION</qti-base-value></qti-multiple></qti-set-outcome-value><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">0.0</qti-base-value></qti-set-outcome-value></qti-response-if></qti-response-condition></qti-response-else></qti-response-condition></qti-response-else></qti-response-condition></qti-response-processing></qti-assessment-item>"
  },
  {
    "identifier": "amp-07-nextgen-a",
    "guid": "0000-0009-00021a",
    "submissionMode": "simultaneous",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n  adaptive=\"true\" identifier=\"Example03-feedbackBlock-solution-qti3\" time-dependent=\"false\" \r\n  title=\"Example 3 - Using feedbackBlock to show a solution (random)\" tool-name=\"Mathqurate\" tool-version=\"0.9.7b\">\r\n    <qti-response-declaration base-type=\"float\" cardinality=\"single\" identifier=\"RESPONSE\"\/>\r\n    <qti-response-declaration base-type=\"boolean\" cardinality=\"single\" identifier=\"SOLREQUEST\"\/>\r\n    <qti-response-declaration base-type=\"boolean\" cardinality=\"single\" identifier=\"EndAttempt\"\/>\r\n    <qti-outcome-declaration base-type=\"identifier\" cardinality=\"multiple\" identifier=\"FEEDBACK\"\/>\r\n    <qti-outcome-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"EMPTY\"\/>\r\n    <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\" normal-maximum=\"10.0\" normal-minimum=\"0.0\">\r\n        <qti-default-value>\r\n            <qti-value>0.0<\/qti-value>\r\n        <\/qti-default-value>\r\n    <\/qti-outcome-declaration>\r\n    <qti-outcome-declaration base-type=\"boolean\" cardinality=\"single\" identifier=\"seenSolution\">\r\n        <qti-default-value>\r\n            <qti-value>false<\/qti-value>\r\n        <\/qti-default-value>\r\n    <\/qti-outcome-declaration>\r\n    <qti-outcome-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"ASKSOLUTION\">\r\n        <qti-default-value>\r\n            <qti-value>asksolution<\/qti-value>\r\n        <\/qti-default-value>\r\n    <\/qti-outcome-declaration>\r\n    <qti-template-declaration base-type=\"integer\" cardinality=\"single\" identifier=\"iA\" math-variable=\"true\" param-variable=\"false\"\/>\r\n    <qti-template-declaration base-type=\"float\" cardinality=\"single\" identifier=\"fAns\" math-variable=\"true\" param-variable=\"false\"\/>\r\n    <qti-template-declaration base-type=\"float\" cardinality=\"single\" identifier=\"fR\" math-variable=\"true\" param-variable=\"false\"\/>\r\n    <qti-template-processing>\r\n        <qti-set-template-value identifier=\"iA\">\r\n            <qti-random-integer max=\"4\" min=\"1\"\/>\r\n        <\/qti-set-template-value>\r\n        <qti-set-template-value identifier=\"fAns\">\r\n            <qti-math-operator name=\"exp\">\r\n                <qti-variable identifier=\"iA\"\/>\r\n            <\/qti-math-operator>\r\n        <\/qti-set-template-value>\r\n        <qti-set-template-value identifier=\"fR\">\r\n            <qti-round-to figures=\"3\" rounding-mode=\"decimalPlaces\">\r\n                <qti-variable identifier=\"fAns\"\/>\r\n            <\/qti-round-to>\r\n        <\/qti-set-template-value>\r\n    <\/qti-template-processing>\r\n    <qti-item-body>\r\n      <div class=\"qti3-player-item-card\">\r\n        <div class=\"qti3-player-item-card-body qti-padding-2\">\r\n            <p class=\"\">Find the value of <math xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\" id=\"mathML0\">\r\n                    <semantics>\r\n                        <mrow>\r\n                            <msup>\r\n                                <mn>e<\/mn>\r\n                                <mi>iA<\/mi>\r\n                            <\/msup>\r\n                        <\/mrow>\r\n                        <annotation encoding=\"LaTeX\">\\[\\e^\\qv{iA}\\]<\/annotation>\r\n                    <\/semantics>\r\n                <\/math> to 3 decimal places.<\/p>\r\n                <p>\r\n                                <qti-text-entry-interaction class=\"qti-input-width-10\" pattern-mask=\"([0-9.\\-]{0,10})\" id=\"textEntryInteraction0\" label=\"mathInput\" response-identifier=\"RESPONSE\"\/>\r\n\r\n                                <qti-feedback-inline id=\"feedbackInline0\" identifier=\"CORRECT\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\"> Correct <\/qti-feedback-inline>\r\n                                <qti-feedback-inline id=\"feedbackInline1\" identifier=\"INCORRECT\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\"> No, that is not\r\n                                    the correct answer<\/qti-feedback-inline>\r\n                <\/p>\r\n                \r\n            <!-- this feedbackBlock contains the solution -->\r\n            <qti-feedback-block class=\"\" id=\"feedbackBlock2\" identifier=\"SOLUTION\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\"><qti-content-body>\r\n                <div class=\"qti-well\">\r\n                    <math xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\" display=\"block\" id=\"mathML1\">\r\n                        <semantics>\r\n                            <mtable>\r\n                                <mtr>\r\n                                    <mtd columnalign=\"right\">\r\n                                        <msup>\r\n                                            <mi>e<\/mi>\r\n                                            <mi>iA<\/mi>\r\n                                        <\/msup>\r\n                                    <\/mtd>\r\n                                    <mtd columnalign=\"center\">\r\n                                        <mo>=<\/mo>\r\n                                    <\/mtd>\r\n                                    <mtd columnalign=\"left\">\r\n                                        <mi>exp<\/mi>\r\n                                        <mfenced close=\")\" >\r\n                                            <mi>iA<\/mi>\r\n                                        <\/mfenced>\r\n                                    <\/mtd>\r\n                                <\/mtr>\r\n                                <mtr>\r\n                                    <mtd columnalign=\"right\"\/>\r\n                                    <mtd columnalign=\"center\">\r\n                                        <mo>=<\/mo>\r\n                                    <\/mtd>\r\n                                    <mtd columnalign=\"left\">\r\n                                        <mi>fR<\/mi>\r\n                                    <\/mtd>\r\n                                <\/mtr>\r\n                            <\/mtable>\r\n                            <annotation encoding=\"SnuggleTeX\">\\begin{eqnarray*}e^\\qv{iA}\r\n                                &amp;=&amp; \\exp(\\qv{iA})\\\\ &amp;=&amp;\r\n                                \\qv{fR}\\end{eqnarray*}<\/annotation>\r\n                        <\/semantics>\r\n                    <\/math>\r\n                <\/div>\r\n            <\/qti-content-body><\/qti-feedback-block>\r\n            <!-- Explain why the score is zero (after viewing solution) -->\r\n            <qti-feedback-block id=\"feedbackBlock4\" identifier=\"SEEN-SOLUTION\" outcome-identifier=\"FEEDBACK\" show-hide=\"show\"><qti-content-body>\r\n                <p> Since you have viewed the solution, your score for this question will be 0. <\/p>\r\n            <\/qti-content-body><\/qti-feedback-block>\r\n            <!-- show the solution button -->\r\n            <qti-feedback-block id=\"feedbackBlock7\" identifier=\"asksolution\" outcome-identifier=\"ASKSOLUTION\" show-hide=\"show\"><qti-content-body>\r\n                <p><\/p>\r\n                <p>\r\n                    <qti-end-attempt-interaction id=\"endAttemptInteraction2\" response-identifier=\"SOLREQUEST\" title=\"Show Solution\"\/>\r\n                <\/p>\r\n            <\/qti-content-body><\/qti-feedback-block>\r\n            \r\n    <\/div> <!-- \/card-body -->\r\n    \r\n    <div class=\"qti3-player-item-card-footer qti-height-14 qti-padding-2\">\r\n      <qti-end-attempt-interaction title=\"Check Answer\" class=\"mxl-controller-bar\" response-identifier=\"EndAttempt\" data-steps=\"1\" data-hastemplates=\"true\" \/>\r\n    <\/div> <!-- \/card-footer -->\r\n        \r\n    <\/div> <!-- \/card -->\r\n    <\/qti-item-body>\r\n    <qti-response-processing>\r\n        <qti-set-outcome-value identifier=\"FEEDBACK\">\r\n            <qti-multiple>\r\n                <qti-variable identifier=\"EMPTY\"\/>\r\n            <\/qti-multiple>\r\n        <\/qti-set-outcome-value>\r\n        <qti-response-condition>\r\n            <qti-response-if>\r\n                <qti-variable identifier=\"SOLREQUEST\"\/>\r\n                <qti-set-outcome-value identifier=\"FEEDBACK\">\r\n                    <qti-multiple>\r\n                        <qti-base-value base-type=\"identifier\">SOLUTION<\/qti-base-value>\r\n                    <\/qti-multiple>\r\n                <\/qti-set-outcome-value>\r\n                <qti-set-outcome-value identifier=\"seenSolution\">\r\n                    <qti-base-value base-type=\"boolean\">true<\/qti-base-value>\r\n                <\/qti-set-outcome-value>\r\n                <qti-set-outcome-value identifier=\"completionStatus\">\r\n                    <qti-base-value base-type=\"identifier\">completed<\/qti-base-value>\r\n                <\/qti-set-outcome-value>\r\n                <qti-set-outcome-value identifier=\"ASKSOLUTION\">\r\n                    <qti-base-value base-type=\"identifier\">null<\/qti-base-value>\r\n                <\/qti-set-outcome-value>\r\n            <\/qti-response-if>\r\n            <qti-response-else>\r\n                <qti-response-condition>\r\n                    <qti-response-if>\r\n                        <qti-is-null>\r\n                            <qti-variable identifier=\"RESPONSE\"\/>\r\n                        <\/qti-is-null>\r\n                        <qti-set-outcome-value identifier=\"FEEDBACK\">\r\n\t\t\t    <qti-multiple>\r\n\t\t\t        <qti-base-value base-type=\"identifier\">INCORRECT<\/qti-base-value>\r\n\t\t\t    <\/qti-multiple>\r\n                        <\/qti-set-outcome-value>\r\n                        <qti-set-outcome-value identifier=\"SCORE\">\r\n                            <qti-base-value base-type=\"float\">0<\/qti-base-value>\r\n                        <\/qti-set-outcome-value>\r\n                    <\/qti-response-if>\r\n                    <qti-response-else>\r\n                        <qti-response-condition>\r\n                            <qti-response-if>\r\n                                <qti-equal-rounded figures=\"3\" rounding-mode=\"decimalPlaces\">\r\n                                    <qti-variable identifier=\"RESPONSE\"\/>\r\n                                    <qti-variable identifier=\"fAns\"\/>\r\n                                <\/qti-equal-rounded>\r\n                                <qti-set-outcome-value identifier=\"FEEDBACK\">\r\n                                    <qti-multiple>\r\n                                        <qti-base-value base-type=\"identifier\">CORRECT<\/qti-base-value>\r\n                                    <\/qti-multiple>\r\n                                <\/qti-set-outcome-value>\r\n                                <qti-set-outcome-value identifier=\"SCORE\">\r\n                                    <qti-base-value base-type=\"float\">2<\/qti-base-value>\r\n                                <\/qti-set-outcome-value>\r\n                            <\/qti-response-if>\r\n                            <qti-response-else>\r\n                                <qti-set-outcome-value identifier=\"FEEDBACK\">\r\n                                    <qti-multiple>\r\n                                        <qti-base-value base-type=\"identifier\">INCORRECT<\/qti-base-value>\r\n                                    <\/qti-multiple>\r\n                                <\/qti-set-outcome-value>\r\n                                <qti-set-outcome-value identifier=\"SCORE\">\r\n                                    <qti-base-value base-type=\"float\">0<\/qti-base-value>\r\n                                <\/qti-set-outcome-value>\r\n                            <\/qti-response-else>\r\n                        <\/qti-response-condition>\r\n                        <qti-set-outcome-value identifier=\"completionStatus\">\r\n                            <qti-base-value base-type=\"identifier\">completed<\/qti-base-value>\r\n                        <\/qti-set-outcome-value>\r\n                        <qti-set-outcome-value identifier=\"ASKSOLUTION\">\r\n                            <qti-base-value base-type=\"identifier\">null<\/qti-base-value>\r\n                        <\/qti-set-outcome-value>\r\n                        <qti-response-condition>\r\n                            <qti-response-if>\r\n                                <qti-variable identifier=\"seenSolution\"\/>\r\n                                <qti-set-outcome-value identifier=\"FEEDBACK\">\r\n                                    <qti-multiple>\r\n                                        <qti-variable identifier=\"FEEDBACK\"\/>\r\n                                        <qti-base-value base-type=\"identifier\">SEEN-SOLUTION<\/qti-base-value>\r\n                                    <\/qti-multiple>\r\n                                <\/qti-set-outcome-value>\r\n                                <qti-set-outcome-value identifier=\"SCORE\">\r\n                                    <qti-base-value base-type=\"float\">0.0<\/qti-base-value>\r\n                                <\/qti-set-outcome-value>\r\n                            <\/qti-response-if>\r\n                        <\/qti-response-condition>\r\n                    <\/qti-response-else>\r\n                <\/qti-response-condition>\r\n            <\/qti-response-else>\r\n        <\/qti-response-condition>\r\n    <\/qti-response-processing>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-cardinality",
    "guid": "0000-0000-0001",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-cardinality\" title=\"Q2 - Choice Interaction - Single Cardinality\" adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\"\/>\r\n    <qti-item-body>\r\n        <qti-choice-interaction response-identifier=\"RESPONSE\" min-choices=\"0\" max-choices=\"1\">\r\n            <qti-prompt>Select 0 to 1 SimpleChoice below and end the attempt by submitting the response.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"choice_a\">choice_a<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"choice_b\">choice_b<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"choice_c\">choice_c<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-1",
    "guid": "0000-0000-0002",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"identifier="q2-choice-interaction-single-sv-1" title="Choice Interaction - Single (SV 1)" adaptive="false" time-dependent="false">
      <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="identifier">
        <qti-correct-response><qti-value>ChoiceA</qti-value></qti-correct-response>
      </qti-response-declaration>
      <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
        <qti-default-value><qti-value>0</qti-value></qti-default-value>
      </qti-outcome-declaration>
      <qti-item-body>
        <p>Look at the text in the picture.</p>
        <p>
          <img src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/sign.png" alt="NEVER LEAVE LUGGAGE UNATTENDED"/>
        </p>

        <qti-choice-interaction max-choices="1" response-identifier="RESPONSE">
          <qti-prompt>What does it say?</qti-prompt>
          <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
          <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
          <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
        </qti-choice-interaction>
      </qti-item-body>
      <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "q2-choice-interaction-single-sv-2a",
    "guid": "0000-0000-0003",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-2a\" title=\"Choice Interaction - Single (SV 2a) - label\/ctrl options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-none\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-none<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-2b",
    "guid": "0000-0000-0004",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-2b\" title=\"Choice Interaction - Single (SV 2b) - label\/ctrl options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>    \r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-decimal\" max-choices=\"1\"  response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-decimal<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-2c",
    "guid": "0000-0000-0005",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-2c\" title=\"Choice Interaction - Single (SV 2c) - label\/ctrl options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>   \r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-lower-alpha\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-lower-alpha<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-2d",
    "guid": "0000-0000-0006",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-2d\" title=\"Choice Interaction - Single (SV 2d) - label\/ctrl options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>    \r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-upper-alpha\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-upper-alpha<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-3a",
    "guid": "0000-0000-0007",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-3a\" title=\"Choice Interaction - Single (SV 3a) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>    \r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-lower-alpha qti-labels-suffix-none\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-lower-alpha<\/em> and <em>qti-labels-suffix-none<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-3b",
    "guid": "0000-0000-0008",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-3b\" title=\"Choice Interaction - Single (SV 3b) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>\r\n    \r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-lower-alpha qti-labels-suffix-period\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-lower-alpha<\/em> and <em>qti-labels-suffix-period<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-3c",
    "guid": "0000-0000-0009",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item\r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-3c\" title=\"Choice Interaction - Single (SV 3c) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>    \r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-lower-alpha qti-labels-suffix-parenthesis\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-lower-alpha<\/em> and  <em>qti-labels-suffix-parenthesis<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-3d",
    "guid": "0000-0000-0010",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item\r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-3d\" title=\"Choice Interaction - Single (SV 3d) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-upper-alpha qti-labels-suffix-none\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-upper-alpha<\/em> and <em>qti-labels-suffix-none<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-3e",
    "guid": "0000-0000-0011",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item\r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-3e\" title=\"Choice Interaction - Single (SV 3e) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-upper-alpha qti-labels-suffix-period\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-upper-alpha<\/em> and <em>qti-labels-suffix-period<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-3f",
    "guid": "0000-0000-0012",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item\r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-3f\" title=\"Choice Interaction - Single (SV 3f) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-upper-alpha qti-labels-suffix-parenthesis\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-upper-alpha<\/em> and  <em>qti-labels-suffix-parenthesis<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-3g",
    "guid": "0000-0000-0013",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item\r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-3g\" title=\"Choice Interaction - Single (SV 3g) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-decimal qti-labels-suffix-none\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-decimal<\/em> and <em>qti-labels-suffix-none<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-3h",
    "guid": "0000-0000-0014",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item\r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-3h\" title=\"Choice Interaction - Single (SV 3h) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n        \r\n        <qti-choice-interaction class=\"qti-labels-decimal qti-labels-suffix-period\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-decimal<\/em> and <em>qti-labels-suffix-period<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-3i",
    "guid": "0000-0000-0015",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item\r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-3i\" title=\"Choice Interaction - Single (SV 3i) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>    \r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-decimal qti-labels-suffix-parenthesis\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-decimal<\/em> and  <em>qti-labels-suffix-parenthesis<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-3j",
    "guid": "0000-0000-0016",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item\r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-3j\" title=\"Choice Interaction - Single (SV 3j) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>    \r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n        \r\n        <qti-choice-interaction class=\"qti-labels-suffix-none\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-suffix-none<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-3k",
    "guid": "0000-0000-0017",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item\r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-3k\" title=\"Choice Interaction - Single (SV 3k) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-suffix-period\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-suffix-period<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-3l",
    "guid": "0000-0000-0018",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item\r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"\r\n    identifier=\"q2-choice-interaction-single-sv-3l\" title=\"Choice Interaction - Single (SV 3l) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"single\" base-type=\"identifier\" \/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\" \/>\r\n    <qti-item-body>\r\n        <p>Look at the text in the picture.  What does it say?<\/p>\r\n        <p>\r\n            <img src=\"https:\/\/s3.amazonaws.com\/grud-amp-bucket-1\/items\/1\/a8c5bf34-f8fd-4a87-a098-0d7213292cb6\/images\/sign.png\" alt=\"NEVER LEAVE LUGGAGE UNATTENDED\"\/>\r\n        <\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-suffix-parenthesis\" max-choices=\"1\" response-identifier=\"RESPONSE\">\r\n            <qti-prompt>Demonstrates <em>qti-labels-suffix-parenthesis<\/em>.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"ChoiceA\">You must stay with your luggage at all times.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceB\">Do not let someone else look after your luggage.<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"ChoiceC\">Remember your luggage when you leave.<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-cardinality",
    "guid": "0000-0001-0000",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-cardinality\" title=\"Q2 - Choice Interaction - Multiple Cardinality\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-item-body>\r\n        <qti-choice-interaction response-identifier=\"RESPONSE\" min-choices=\"0\" max-choices=\"3\">\r\n            <qti-prompt>Select 0 to N SimpleChoices below and end the attempt by submitting the response.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"choice_a\">choice_a<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"choice_b\">choice_b<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"choice_c\">choice_c<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-1",
    "guid": "0000-0001-0001",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-1\" title=\"Choice Interaction - Multiple (SV 1)\" adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\">\r\n        <qti-correct-response>\r\n            <qti-value>H<\/qti-value>\r\n            <qti-value>O<\/qti-value>\r\n        <\/qti-correct-response>\r\n        <qti-mapping lower-bound=\"0\" upper-bound=\"2\" default-value=\"-2\">\r\n            <qti-map-entry map-key=\"H\" mapped-value=\"1\"\/>\r\n            <qti-map-entry map-key=\"O\" mapped-value=\"1\"\/>\r\n            <qti-map-entry map-key=\"Cl\" mapped-value=\"-1\"\/>\r\n        <\/qti-mapping>\r\n    <\/qti-response-declaration>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <qti-choice-interaction response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Which of the following elements are used to form water?<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n    <qti-response-processing template=\"https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/rptemplates\/map_response.xml\"\/>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-2a",
    "guid": "0000-0001-0002",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-2a\" title=\"Choice Interaction - Multiple (SV 2a) - label\/ctrl options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-lower-alpha\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-lower-alpha.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-2b",
    "guid": "0000-0001-0003",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-2b\" title=\"Choice Interaction - Multiple (SV 2b) - label\/ctrl options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-upper-alpha\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-upper-alpha.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-2c",
    "guid": "0000-0001-0004",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-2c\" title=\"Choice Interaction - Multiple (SV 2c) - label\/ctrl options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-decimal\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-decimal.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-2d",
    "guid": "0000-0001-0005",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-2d\" title=\"Choice Interaction - Multiple (SV 2d) - label\/ctrl options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-none\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-none.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-3a",
    "guid": "0000-0001-0006",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-3a\" title=\"Choice Interaction - Multiple (SV 3a) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-lower-alpha qti-labels-suffix-parenthesis\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-lower-alpha and qti-labels-suffix-parenthesis.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-3b",
    "guid": "0000-0001-0007",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-3b\" title=\"Choice Interaction - Multiple (SV 3b) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-lower-alpha qti-labels-suffix-period\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-lower-alpha and qti-labels-suffix-period.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-3c",
    "guid": "0000-0001-0008",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-3c\" title=\"Choice Interaction - Multiple (SV 3c) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n        \r\n        <qti-choice-interaction class=\"qti-labels-lower-alpha qti-labels-suffix-none\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-lower-alpha and qti-labels-suffix-none.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-3d",
    "guid": "0000-0001-0009",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-3d\" title=\"Choice Interaction - Multiple (SV 3d) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-upper-alpha qti-labels-suffix-parenthesis\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-upper-alpha and qti-labels-suffix-parenthesis.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-3e",
    "guid": "0000-0001-0010",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-3e\" title=\"Choice Interaction - Multiple (SV 3e) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-upper-alpha qti-labels-suffix-period\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-upper-alpha and qti-labels-suffix-period.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-3f",
    "guid": "0000-0001-0011",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-3f\" title=\"Choice Interaction - Multiple (SV 3f) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n        \r\n        <qti-choice-interaction class=\"qti-labels-upper-alpha qti-labels-suffix-none\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-upper-alpha and qti-labels-suffix-none.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-3g",
    "guid": "0000-0001-0012",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-3g\" title=\"Choice Interaction - Multiple (SV 3g) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-decimal qti-labels-suffix-parenthesis\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-decimal and qti-labels-suffix-parenthesis.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-3h",
    "guid": "0000-0001-0013",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-3h\" title=\"Choice Interaction - Multiple (SV 3h) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n\r\n        <qti-choice-interaction class=\"qti-labels-decimal qti-labels-suffix-period\" response-identifier=\"RESPONSE\" max-choices=\"0\"><qti-prompt>Demonstrates qti-labels-decimal and qti-labels-suffix-period.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice><qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-3i",
    "guid": "0000-0001-0014",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-3i\" title=\"Choice Interaction - Multiple (SV 3i) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n        \r\n        <qti-choice-interaction class=\"qti-labels-decimal qti-labels-suffix-none\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-decimal and qti-labels-suffix-none.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-3j",
    "guid": "0000-0001-0015",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-3j\" title=\"Choice Interaction - Multiple (SV 3j) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n        <qti-choice-interaction class=\"qti-labels-suffix-none\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-suffix-none.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-3k",
    "guid": "0000-0001-0016",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-3k\" title=\"Choice Interaction - Multiple (SV 3k) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n        <qti-choice-interaction class=\"qti-labels-suffix-period\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-suffix-period.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-3l",
    "guid": "0000-0001-0017",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n    xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n    xsi:schemaLocation=\" http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n    identifier=\"q2-choice-interaction-multiple-sv-3l\" title=\"Choice Interaction - Multiple (SV 3l) - label\/suffix options\" \r\n    adaptive=\"false\" time-dependent=\"false\">\r\n    <qti-response-declaration identifier=\"RESPONSE\" cardinality=\"multiple\" base-type=\"identifier\"\/>\r\n    <qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"\/>\r\n    <qti-item-body>\r\n        <p>Which of the following elements are used to form water?<\/p>\r\n        <qti-choice-interaction class=\"qti-labels-suffix-parenthesis\" response-identifier=\"RESPONSE\" max-choices=\"0\">\r\n            <qti-prompt>Demonstrates qti-labels-suffix-parenthesis.<\/qti-prompt>\r\n            <qti-simple-choice identifier=\"H\" fixed=\"false\">Hydrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"He\" fixed=\"false\">Helium<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"C\" fixed=\"false\">Carbon<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"O\" fixed=\"false\">Oxygen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"N\" fixed=\"false\">Nitrogen<\/qti-simple-choice>\r\n            <qti-simple-choice identifier=\"Cl\" fixed=\"false\">Chlorine<\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n    <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q2-choice-interaction-single-sv-4a",
    "guid": "0000-0002-0001",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"identifier="q2-choice-interaction-single-sv-4a" title="Choice Interaction - Single (SV 4a) - input control options" adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE1" cardinality="single" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE2" cardinality="single" base-type="identifier"/>
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
    <qti-item-body>
      <p>
        Look at the text in the picture.  What does it say?
      </p>
      <p>
        <img src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/sign.png" alt="NEVER LEAVE LUGGAGE UNATTENDED"/>
      </p>

      <qti-choice-interaction class="qti-input-control-hidden" max-choices="1" response-identifier="RESPONSE1">
        <qti-prompt>Demonstrates <em>qti-input-control-hidden</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
      </qti-choice-interaction>
      
      <qti-choice-interaction class="qti-input-control-hidden qti-labels-none" max-choices="1" response-identifier="RESPONSE2">
        <qti-prompt>Demonstrates <em>qti-input-control-hidden qti-labels-none</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
      </qti-choice-interaction>
    </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q2-choice-interaction-single-sv-4b",
    "guid": "0000-0002-0002",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="q2-choice-interaction-single-sv-4b" title="Choice Interaction - Single (SV 4b)- orientation options" adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE1" cardinality="single" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE2" cardinality="single" base-type="identifier"/>
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
    <qti-item-body>
      <p>
        Look at the text in the picture.  What does it say?
      </p>
      <p>
        <img src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/sign.png" alt="NEVER LEAVE LUGGAGE UNATTENDED"/>
      </p>
      <qti-choice-interaction class="qti-orientation-horizontal" max-choices="1" response-identifier="RESPONSE1">
        <qti-prompt>Demonstrates <em>qti-orientation-horizontal</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
      </qti-choice-interaction>
      
      <qti-choice-interaction class="qti-orientation-vertical" max-choices="1" response-identifier="RESPONSE2">
        <qti-prompt>Demonstrates <em>qti-orientation-vertical</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
      </qti-choice-interaction>
    </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q2-choice-interaction-single-sv-4c",
    "guid": "0000-0002-0003",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="q2-choice-interaction-single-sv-4c" title="Choice Interaction - Single (SV 4c)- stacking options" adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE1" cardinality="single" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE2" cardinality="single" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE3" cardinality="single" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE4" cardinality="single" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE5" cardinality="single" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE6" cardinality="single" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE7" cardinality="single" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE8" cardinality="single" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE9" cardinality="single" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE10" cardinality="single" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE11" cardinality="single" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE12" cardinality="single" base-type="identifier"/>
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
    <qti-item-body>
      <p>Look at the text in the picture.  What does it say?</p>
      <p>
        <img src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/sign.png" alt="NEVER LEAVE LUGGAGE UNATTENDED"/>
      </p>
      <qti-choice-interaction class="qti-choices-stacking-4" max-choices="1" response-identifier="RESPONSE1">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-4</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceD">It's a good idea to leave your luggage unattended.</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-3" max-choices="1" response-identifier="RESPONSE2">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-3</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceD">It's a good idea to leave your luggage unattended.</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-2" max-choices="1" response-identifier="RESPONSE3">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-2</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceD">It's a good idea to leave your luggage unattended.</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-1" max-choices="1" response-identifier="RESPONSE4">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-1</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceD">It's a good idea to leave your luggage unattended.</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-4 qti-orientation-horizontal" max-choices="1" response-identifier="RESPONSE5">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-4 and qti-orientation-horizontal</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceD">It's a good idea to leave your luggage unattended.</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-3 qti-orientation-horizontal" max-choices="1" response-identifier="RESPONSE6">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-3 and qti-orientation-horizontal</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceD">It's a good idea to leave your luggage unattended.</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-2 qti-orientation-horizontal" max-choices="1" response-identifier="RESPONSE7">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-2 and qti-orientation-horizontal</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceD">It's a good idea to leave your luggage unattended.</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-1 qti-orientation-horizontal" max-choices="1" response-identifier="RESPONSE8">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-1 and qti-orientation-horizontal</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceD">It's a good idea to leave your luggage unattended.</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-4 qti-orientation-vertical" max-choices="1" response-identifier="RESPONSE9">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-4 and qti-orientation-vertical</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceD">It's a good idea to leave your luggage unattended.</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-3 qti-orientation-vertical" max-choices="1" response-identifier="RESPONSE10">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-3 and qti-orientation-vertical</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceD">It's a good idea to leave your luggage unattended.</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-2 qti-orientation-vertical" max-choices="1" response-identifier="RESPONSE11">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-2 and qti-orientation-vertical</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceD">It's a good idea to leave your luggage unattended.</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-1 qti-orientation-vertical" max-choices="1" response-identifier="RESPONSE12">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-1 and qti-orientation-vertical</em>.</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceD">It's a good idea to leave your luggage unattended.</qti-simple-choice>
        </qti-choice-interaction>
    </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q2-choice-interaction-single-sv-4d",
    "guid": "0000-0002-0004",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"    identifier="q2-choice-interaction-single-sv-4d" title="Choice Interaction - Single (SV 4d) - min Choices Messages" adaptive="false" time-dependent="false">
      <qti-response-declaration identifier="RESPONSE1" cardinality="single" base-type="identifier"/>
      <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
      <qti-item-body>
        <p>
          <img src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/sign.png" alt="NEVER LEAVE LUGGAGE UNATTENDED"/>
        </p>
        <qti-choice-interaction max-choices="1" min-choices="1" data-min-selections-message="Not enough selected! You must select one choice." response-identifier="RESPONSE1">
          <qti-prompt>Demonstrates min-choices="1" and <em>custom data-min-selections-message.</em></qti-prompt>
          <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
          <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
          <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
        </qti-choice-interaction>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-4a",
    "guid": "0000-0003-0001",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"    identifier="q2-choice-interaction-multiple-sv-4a" title="Choice Interaction - Multiple (SV 4a) - input control options" 
    adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE1" cardinality="multiple" base-type="identifier" />
    <qti-response-declaration identifier="RESPONSE2" cardinality="multiple" base-type="identifier" />
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float" />
    <qti-item-body>
      <p>Which of the following elements are used to form water?</p>
      <qti-choice-interaction class="qti-input-control-hidden" max-choices="0" response-identifier="RESPONSE1">
        <qti-prompt>Demonstrates <em>qti-input-control-hidden</em>.</qti-prompt>
        <qti-simple-choice identifier="H" fixed="false">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He" fixed="false">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C" fixed="false">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O" fixed="false">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N" fixed="false">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl" fixed="false">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-input-control-hidden qti-labels-none" max-choices="0" response-identifier="RESPONSE2">
        <qti-prompt>Demonstrates <em>qti-input-control-hidden qti-labels-none</em>.</qti-prompt>
        <qti-simple-choice identifier="H" fixed="false">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He" fixed="false">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C" fixed="false">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O" fixed="false">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N" fixed="false">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl" fixed="false">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-4b",
    "guid": "0000-0003-0002",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"    identifier="q2-choice-interaction-multiple-sv-4b" title="Choice Interaction - Multiple (SV 4b)- orientation options"
    adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE1" cardinality="multiple" base-type="identifier" />
    <qti-response-declaration identifier="RESPONSE2" cardinality="multiple" base-type="identifier" />
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float" />
    <qti-item-body>
      <qti-choice-interaction class="qti-orientation-horizontal" max-choices="0" response-identifier="RESPONSE1">
        <qti-prompt>Demonstrates <em>qti-orientation-horizontal</em>.</qti-prompt>
        <qti-simple-choice identifier="H">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-orientation-vertical" max-choices="0" response-identifier="RESPONSE2">
        <qti-prompt>Demonstrates <em>qti-orientation-vertical</em>.</qti-prompt>
        <qti-simple-choice identifier="H">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-4c",
    "guid": "0000-0003-0003",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"    
    identifier="q2-choice-interaction-multiple-sv-4c" title="Choice Interaction - Multiple (SV 4c)- stacking options"
    adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE1" cardinality="multiple" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE2" cardinality="multiple" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE3" cardinality="multiple" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE4" cardinality="multiple" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE5" cardinality="multiple" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE6" cardinality="multiple" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE7" cardinality="multiple" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE8" cardinality="multiple" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE9" cardinality="multiple" base-type="identifier"/>
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float" />
    <qti-item-body>
      <p>Which of the following elements are used to form water?</p>
      <qti-choice-interaction class="qti-choices-stacking-5" response-identifier="RESPONSE1" max-choices="0">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-5</em>.</qti-prompt>
        <qti-simple-choice identifier="H">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-4" response-identifier="RESPONSE2" max-choices="0">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-4</em>.</qti-prompt>
        <qti-simple-choice identifier="H">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-3" response-identifier="RESPONSE3" max-choices="0">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-3</em>.</qti-prompt>
        <qti-simple-choice identifier="H">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-2" response-identifier="RESPONSE4" max-choices="0">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-2</em>.</qti-prompt>
        <qti-simple-choice identifier="H">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-1" response-identifier="RESPONSE5" max-choices="0">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-1</em>.</qti-prompt>
        <qti-simple-choice identifier="H">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-2 qti-orientation-horizontal" response-identifier="RESPONSE6" max-choices="0">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-2 and qti-orientation-horizontal</em>.</qti-prompt>
        <qti-simple-choice identifier="H">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-3 qti-orientation-horizontal" response-identifier="RESPONSE7" max-choices="0">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-3 and qti-orientation-horizontal</em>.</qti-prompt>
        <qti-simple-choice identifier="H">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-2 qti-orientation-vertical" response-identifier="RESPONSE8" max-choices="0">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-2 and qti-orientation-vertical</em>.</qti-prompt>
        <qti-simple-choice identifier="H">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
      <qti-choice-interaction class="qti-choices-stacking-3 qti-orientation-vertical" response-identifier="RESPONSE9" max-choices="0">
        <qti-prompt>Demonstrates <em>qti-choices-stacking-3 and qti-orientation-vertical</em>.</qti-prompt>
        <qti-simple-choice identifier="H">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "q2-choice-interaction-multiple-sv-4d",
    "guid": "0000-0003-0004",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"    
    identifier="q2-choice-interaction-multiple-sv-4d" title="Choice Interaction - Multiple (SV 4d) - max/min Choices Messages"
    adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE1" cardinality="multiple" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE2" cardinality="multiple" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE3" cardinality="multiple" base-type="identifier"/>
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
    <qti-item-body>
      <p>Which of the following elements are used to form water?</p>
      <!-- Stacking specified here only to compress the presentation of the 6 choices -->
      <qti-choice-interaction class="qti-choices-stacking-3" data-max-selections-message="You've selected too many!" response-identifier="RESPONSE1" max-choices="2">
        <qti-prompt>Demonstrates max-choices="2" and <em>custom data-max-selections-message</em>.</qti-prompt>
        <qti-simple-choice identifier="H">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
      <!-- Stacking specified here only to compress the presentation of the 6 choices -->
      <qti-choice-interaction class="qti-choices-stacking-3" response-identifier="RESPONSE2" max-choices="2">
        <qti-prompt>Demonstrates max-choices="2" and <em>default/system Max Selections Message.</em></qti-prompt>
        <qti-simple-choice identifier="H">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
      <!-- Stacking specified here only to compress the presentation of the 6 choices -->
      <qti-choice-interaction class="qti-choices-stacking-3" data-min-selections-message="Not enough selected! Please select at least two." response-identifier="RESPONSE3" max-choices="0" min-choices="2">
        <qti-prompt>Demonstrates min-choices="2" and <em>custom data-min-selections-message.</em></qti-prompt>
        <qti-simple-choice identifier="H">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "q12-inline-choice-interaction",
    "guid": "0000-0007-0001",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
    identifier="inline-choice-1" title="Richard III (Take 2)" 
    adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="identifier">
      <qti-correct-response>
        <qti-value>Y</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
    <qti-item-body>
      <p>
        Identify the missing word in this famous quote from Shakespeare's Richard III.
      </p>
      <blockquote>
        <p>
          Now is the winter of our discontent<br/>
          Made glorious summer by this sun of <qti-inline-choice-interaction response-identifier="RESPONSE">
            <qti-inline-choice identifier="G">Gloucester</qti-inline-choice>
            <qti-inline-choice identifier="L">Lancaster</qti-inline-choice>
            <qti-inline-choice identifier="Y">York</qti-inline-choice>
          </qti-inline-choice-interaction>;<br/>
          And all the clouds that lour'd upon our house<br/> 
          In the deep bosom of the ocean buried.
        </p>
      </blockquote>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
  </qti-assessment-item>`
  },
  {
    "identifier": "q12-inline-choice-composite",
    "guid": "0000-0007-0002",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"   
    identifier="inline-choice-composite" title="Richard III (Take 2) - Composite"
    adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="identifier">
      <qti-correct-response>
        <qti-value>w</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-response-declaration identifier="RESPONSE_1" cardinality="single" base-type="identifier">
      <qti-correct-response>
        <qti-value>Y</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
    <qti-item-body>
      <p>
        Identify the missing word in this famous quote from Shakespeare's Richard III.
      </p>
      <blockquote>
        <p>
          Now is the <qti-inline-choice-interaction response-identifier="RESPONSE">
          <qti-inline-choice identifier="w">winter</qti-inline-choice>
          <qti-inline-choice identifier="s">summer</qti-inline-choice>
          <qti-inline-choice identifier="a">autumn</qti-inline-choice>
          </qti-inline-choice-interaction> of our discontent<br/>
          Made glorious summer by this sun of <qti-inline-choice-interaction response-identifier="RESPONSE_1">
          <qti-inline-choice identifier="G">Gloucester</qti-inline-choice>
          <qti-inline-choice identifier="L">Lancaster</qti-inline-choice>
          <qti-inline-choice identifier="Y">York</qti-inline-choice>
          </qti-inline-choice-interaction>;<br/>
          And all the clouds that lour'd upon our house<br/>
          In the deep bosom of the ocean buried.
        </p>
      </blockquote>
    </qti-item-body>
    <qti-response-processing>
      <qti-response-condition>
        <qti-response-if>
          <qti-match>
            <qti-variable identifier="RESPONSE"/>
            <qti-correct identifier="RESPONSE"/>
          </qti-match>
          <qti-set-outcome-value identifier="SCORE">
            <qti-sum>
              <qti-variable identifier="SCORE"/>
              <qti-base-value base-type="integer">1</qti-base-value>
            </qti-sum>
          </qti-set-outcome-value>
        </qti-response-if>
      </qti-response-condition>
      <qti-response-condition>
        <qti-response-if>
          <qti-match>
            <qti-variable identifier="RESPONSE_1"/>
            <qti-correct identifier="RESPONSE_1"/>
          </qti-match>
          <qti-set-outcome-value identifier="SCORE">
            <qti-sum>
              <qti-variable identifier="SCORE"/>
              <qti-base-value base-type="integer">1</qti-base-value>
            </qti-sum>
          </qti-set-outcome-value>
        </qti-response-if>
      </qti-response-condition>
    </qti-response-processing>
  </qti-assessment-item>`
  },
  {
    "identifier": "q12-inline-choice-mathml",
    "guid": "0000-0007-0003",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:m="http://www.w3.org/1998/Math/MathML"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd  http://www.w3.org/1998/Math/MathML https://purl.imsglobal.org/spec/mathml/v3p0/schema/xsd/mathml3.xsd"
    identifier="inline-choice-mathml" title="Inline Choice with MathML"
    adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="identifier">
      <qti-correct-response>
        <qti-value>choice2</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
    <qti-item-body>
      <p>Answer the question.</p>
      <blockquote>
        <p>
          If <math><mrow><mi>a</mi><mo>=</mo><mi>b</mi></mrow></math> and <math><mrow><mi>b</mi><mo>=</mo><mi>c</mi></mrow></math> then 
          <qti-inline-choice-interaction response-identifier="RESPONSE">
            <qti-inline-choice identifier="choice1"><math><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math></qti-inline-choice>
            <qti-inline-choice identifier="choice2"><math><mrow><mi>a</mi><mo>=</mo><mi>c</mi></mrow></math></qti-inline-choice>
            <qti-inline-choice identifier="choice3"><math><mrow><mi>b</mi><mo>=</mo><mi>d</mi></mrow></math></qti-inline-choice>
          </qti-inline-choice-interaction>.
        </p>
      </blockquote>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
  </qti-assessment-item>`
  },
  {
    "identifier": "q12-inline-choice-sv-1",
    "guid": "0000-0007-0004",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?><qti-assessment-item xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" adaptive=\"false\" identifier=\"q12-inline-choice-sv-1\" time-dependent=\"false\" title=\"Q12 Inline Choice - (SV 1) - widths\" xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\">\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE\">\r\n    <qti-correct-response>\r\n      <qti-value>Y<\/qti-value>\r\n    <\/qti-correct-response>\r\n  <\/qti-response-declaration>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE1\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE2\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE3\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE4\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE5\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE6\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE7\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE8\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE9\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE10\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE11\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE12\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE13\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE14\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE15\"\/>\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE16\"\/>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n    <p>Identify the missing word in this famous quote from Shakespeare's Richard III.<\/p>\r\n    <blockquote>\r\n      <p>Now is the winter of our discontent\r\n      <br\/>Made glorious summer by this sun of \r\n      <qti-inline-choice-interaction class=\"\" response-identifier=\"RESPONSE\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction>;\r\n      <br\/>And all the clouds that lour'd upon our house\r\n      <br\/>In the deep bosom of the ocean buried.<\/p>\r\n    <\/blockquote>\r\n\r\n    <p>qti-input-width-1 : <qti-inline-choice-interaction class=\"qti-input-width-1\" data-prompt=\"M\" response-identifier=\"RESPONSE1\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-2 : <qti-inline-choice-interaction class=\"qti-input-width-2\" data-prompt=\"MM\" response-identifier=\"RESPONSE2\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-3 : <qti-inline-choice-interaction class=\"qti-input-width-3\" data-prompt=\"MMM\" response-identifier=\"RESPONSE3\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-4 : <qti-inline-choice-interaction class=\"qti-input-width-4\" data-prompt=\"MMMM\" response-identifier=\"RESPONSE4\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-5 : <qti-inline-choice-interaction class=\"qti-input-width-5\" data-prompt=\"MMMMM\" response-identifier=\"RESPONSE5\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-6 : <qti-inline-choice-interaction class=\"qti-input-width-6\" data-prompt=\"MMMMMM\" response-identifier=\"RESPONSE6\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-10 : <qti-inline-choice-interaction class=\"qti-input-width-10\" data-prompt=\"MMMMMMMMMM\" response-identifier=\"RESPONSE7\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-15 : <qti-inline-choice-interaction class=\"qti-input-width-15\" data-prompt=\"MMMMMMMMMMMMMMM\" response-identifier=\"RESPONSE8\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-20 : <qti-inline-choice-interaction class=\"qti-input-width-20\" data-prompt=\"MMMMMMMMMMMMMMMMMMMM\"response-identifier=\"RESPONSE9\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-25 : <qti-inline-choice-interaction class=\"qti-input-width-25\" data-prompt=\"MMMMMMMMMMMMMMMMMMMMMMMMM\" response-identifier=\"RESPONSE10\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-30 : <qti-inline-choice-interaction class=\"qti-input-width-30\" data-prompt=\"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\" response-identifier=\"RESPONSE11\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-35 : <qti-inline-choice-interaction class=\"qti-input-width-35\" data-prompt=\"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\" response-identifier=\"RESPONSE12\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-40 : <qti-inline-choice-interaction class=\"qti-input-width-40 \" data-prompt=\"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\" response-identifier=\"RESPONSE13\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-45 : <qti-inline-choice-interaction class=\"qti-input-width-45\" data-prompt=\"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\" response-identifier=\"RESPONSE14\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-50 : <qti-inline-choice-interaction class=\"qti-input-width-50\" data-prompt=\"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\" response-identifier=\"RESPONSE15\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n\r\n    <p>qti-input-width-72 : <qti-inline-choice-interaction class=\"qti-input-width-72 qti-valign-baseline\" response-identifier=\"RESPONSE16\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction><\/p>\r\n    \r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q12-inline-choice-sv-2",
    "guid": "0000-0007-0005",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" \r\n  xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n  identifier=\"q12-inline-choice-sv-2\" title=\"Q12 Inline Choice - (SV 2) - custom prompt\"\r\n  adaptive=\"false\" time-dependent=\"false\">\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE\">\r\n    <qti-correct-response>\r\n      <qti-value>Y<\/qti-value>\r\n    <\/qti-correct-response>\r\n  <\/qti-response-declaration>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n      \r\n    <p>\r\n      data-prompt=\"Select an Answer\" qti-input-width-15:<qti-inline-choice-interaction class=\"qti-input-width-15 qti-valign-baseline\" data-prompt=\"Select an Answer\" response-identifier=\"RESPONSE\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction>      \r\n    <\/p>\r\n    \r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q12-inline-choice-sv-3",
    "guid": "0000-0007-0006",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<qti-assessment-item \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" \r\n  xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n  identifier=\"q12-inline-choice-sv-3\" title=\"Q12 Inline Choice - (SV 3) - custom messages\"\r\n  adaptive=\"false\" time-dependent=\"false\">\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"RESPONSE\">\r\n    <qti-correct-response>\r\n      <qti-value>Y<\/qti-value>\r\n    <\/qti-correct-response>\r\n  <\/qti-response-declaration>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\"\/>\r\n  <qti-item-body>\r\n      \r\n    <p>\r\n      Because qti-inline-choice-interaction's have single cardinality only, there is no need for a data-max-selections-message.  Accordingly, there is no \r\n      conformance statement for data-max-selections-message.\r\n    <\/p>\r\n    \r\n    <p>\r\n      data-min-selections-message=\"More selections, please! You need at least one.\" qti-input-width-10:<qti-inline-choice-interaction class=\"qti-input-width-10 qti-valign-baseline\" min-choices=\"1\" data-min-selections-message=\"More selections, please! You need at least one.\" response-identifier=\"RESPONSE\">\r\n        <qti-inline-choice identifier=\"G\">Gloucester<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"L\">Lancaster<\/qti-inline-choice>\r\n        <qti-inline-choice identifier=\"Y\">York<\/qti-inline-choice>\r\n      <\/qti-inline-choice-interaction>      \r\n    <\/p>\r\n    \r\n  <\/qti-item-body>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "q5-extended-text-base-type-string",
    "guid": "0000-0011-0001",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
    identifier="q5-extended-text-base-type-string" title="Q5 - Extended Text Interaction - BaseType String" 
    adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="string"/>
    <qti-item-body>
      <p>A Haiku poem consists of 3 lines.  The first and last lines of a Haiku have 5 syllables while the middle line has 7 syllables.</p>
      <qti-extended-text-interaction response-identifier="RESPONSE">
        <qti-prompt>Write your own Haiku.</qti-prompt>
      </qti-extended-text-interaction>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "q5-extendedtext-sv-1",
    "guid": "0000-0011-0002",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
    adaptive="false" time-dependent="false" 
    identifier="q5-extendedtext-sv-1" title="Extended Text - (SV 1)">
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE"/>
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-item-body>
      <p>Read this postcard from your English pen-friend, Sam.</p>
      <blockquote>
        <p>
          Here is a postcard of my town. Please send me<br/>
          a postcard from your town.  What size is your<br/>
          town? What is the nicest part of your town?<br/>
          Where do you go in the evenings?<br/>
          Sam.
        </p>
      </blockquote>
      <qti-extended-text-interaction response-identifier="RESPONSE">
        <qti-prompt>Write Sam a postcard. Answer the questions. Write 25-35 words.</qti-prompt>
      </qti-extended-text-interaction>
    </qti-item-body>
  </qti-assessment-item>`
 },
  {
    "identifier": "q5-extendedtext-sv-2a",
    "guid": "0000-0011-0003",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
    adaptive="false" time-dependent="false" 
    identifier="q5-extendedtext-sv-2a" title="Extended Text - (SV 2a)">
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE"/>
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-item-body>
      <p>Read this postcard from your English pen-friend, Sam.</p>
      <blockquote>
        <p>Here is a postcard of my town. Please send me<br/>
        a postcard from your town. What size is your<br/>
        town? What is the nicest part of your town?<br/>
        Where do you go in the evenings?<br/>
        Sam.</p>
      </blockquote>
      <qti-extended-text-interaction class="qti-height-lines-3" response-identifier="RESPONSE">
        <qti-prompt>
          <p>Demonstrates <em>qti-height-lines-3</em></p>
        </qti-prompt>
      </qti-extended-text-interaction>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "q5-extendedtext-sv-2b",
    "guid": "0000-0011-0004",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
    adaptive="false" time-dependent="false"
    identifier="q5-extendedtext-sv-2b" title="Extended Text - (SV 2b)">
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE"/>
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-item-body>
      <p>Read this postcard from your English pen-friend, Sam.</p>
      <blockquote>
        <p>
          Here is a postcard of my town. Please send me<br/>
          a postcard from your town. What size is your<br/>
          town? What is the nicest part of your town?<br/>
          Where do you go in the evenings?<br/>
          Sam.
        </p>
      </blockquote>
      <qti-extended-text-interaction class="qti-height-lines-6" response-identifier="RESPONSE">
        <qti-prompt>
          <p>Demonstrates <em>qti-height-lines-6</em></p>
        </qti-prompt>
      </qti-extended-text-interaction>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "q5-extendedtext-sv-2c",
    "guid": "0000-0011-0005",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
    adaptive="false" time-dependent="false" 
    identifier="q5-extendedtext-sv-2c" title="Extended Text - (SV 2c)">
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE"/>
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-item-body>
      <p>Read this postcard from your English pen-friend, Sam.</p>
      <blockquote>
        <p>
          Here is a postcard of my town. Please send me<br/>
          a postcard from your town. What size is your<br/>
          town? What is the nicest part of your town?<br/>
          Where do you go in the evenings?<br/>
          Sam.
        </p>
      </blockquote>
      <qti-extended-text-interaction class="qti-height-lines-15" response-identifier="RESPONSE">
        <qti-prompt>
          <p>Demonstrates <em>qti-height-lines-15</em></p>
        </qti-prompt>
      </qti-extended-text-interaction>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "q5-extendedtext-sv-3",
    "guid": "0000-0011-0006",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
    adaptive="false" time-dependent="false"
    identifier="q5-extendedtext-sv-3" title="Extended Text - (SV 3) - formats plain/xhtml, counters">
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE1"/>
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE2"/>
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE3"/>
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE4"/>
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE5"/>
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE6"/>
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE7"/>
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE8"/>
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE9"/>
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE10"/>
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-item-body>
      <div class="qti-layout-row">
        <div class="qti-layout-col8">
          <p>Read this postcard from your English pen-friend, Sam.</p>
          <div>
            <object aria-label="Postcard from Sam." aria-describedby="postcard-description" data="https://grud-amp-bucket-1.s3.amazonaws.com/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/postcard.png" type="image/png" />
            <blockquote id="postcard-description" class="qti-visually-hidden">
              <p>
                Here is a postcard of my town. Please send me a postcard from your town. What 
                size is your town? What is the nicest part of your town? Where do you go in 
                the evenings? Sam.
              </p>
              End of Postcard.
            </blockquote>
          </div>
          <qti-extended-text-interaction class="qti-height-lines-3" format="plain" expected-length="200" response-identifier="RESPONSE1">
            <qti-prompt><p>Demonstrates qti-height-lines-3 format: plain</p></qti-prompt>
          </qti-extended-text-interaction>
          
          <qti-extended-text-interaction class="qti-height-lines-6" format="plain" expected-length="200" response-identifier="RESPONSE2">
            <qti-prompt class="qti-margin-t-3"><p>Demonstrates qti-height-lines-6 format: plain</p></qti-prompt>
          </qti-extended-text-interaction>
          
          <qti-extended-text-interaction class="qti-height-lines-15" format="plain" expected-length="200" response-identifier="RESPONSE3">
            <qti-prompt class="qti-margin-t-3"><p>Demonstrates qti-height-lines-15 format: plain</p></qti-prompt>
          </qti-extended-text-interaction>
          
          <qti-extended-text-interaction class="qti-height-lines-3" format="xhtml" expected-length="200" response-identifier="RESPONSE4">
            <qti-prompt class="qti-margin-t-3"><p>Demonstrates qti-height-lines-3 format: xhtml</p></qti-prompt>
          </qti-extended-text-interaction>
          
          <qti-extended-text-interaction class="qti-height-lines-6" format="xhtml" expected-length="200" response-identifier="RESPONSE5">
            <qti-prompt class="qti-margin-t-4"><p>Demonstrates qti-height-lines-6 format: xhtml</p></qti-prompt>
          </qti-extended-text-interaction>
          
          <qti-extended-text-interaction class="qti-height-lines-15" format="xhtml" expected-length="200" response-identifier="RESPONSE6">
            <qti-prompt class="qti-margin-t-4"><p>Demonstrates qti-height-lines-15 format: xhtml</p></qti-prompt>
          </qti-extended-text-interaction>
          
          <qti-extended-text-interaction class="qti-height-lines-3 qti-counter-down" format="plain" expected-length="200" response-identifier="RESPONSE7">
            <qti-prompt class="qti-margin-t-4"><p>Demonstrates qti-height-lines-3, qti-counter-down, format: plain</p></qti-prompt>
          </qti-extended-text-interaction>
          
          <qti-extended-text-interaction class="qti-height-lines-3 qti-counter-up" format="plain" expected-length="200" response-identifier="RESPONSE8">
            <qti-prompt class="qti-margin-t-3"><p>Demonstrates qti-height-lines-3, qti-counter-up, format: plain</p></qti-prompt>
          </qti-extended-text-interaction>
          
          <qti-extended-text-interaction class="qti-height-lines-3 qti-counter-down" format="xhtml" expected-length="200" response-identifier="RESPONSE9">
            <qti-prompt class="qti-margin-t-3"><p>Demonstrates qti-height-lines-3, qti-counter-down, format: xhtml</p></qti-prompt>
          </qti-extended-text-interaction>
          
          <qti-extended-text-interaction class="qti-height-lines-3 qti-counter-up" format="xhtml" expected-length="200" response-identifier="RESPONSE10">
            <qti-prompt class="qti-margin-t-3"><p>Demonstrates qti-height-lines-3, qti-counter-up, format: xhtml</p></qti-prompt>
          </qti-extended-text-interaction>
          
        </div>
      </div>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "q5-extendedtext-sv-4",
    "guid": "0000-0011-0007",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd http://www.w3.org/1998/Math/MathML https://purl.imsglobal.org/spec/mathml/v3p0/schema/xsd/mathml3.xsd"
    adaptive="false" time-dependent="false" 
    identifier="q5-extendedtext-sv-4" title="Extended Text - (SV 4) - patternmask">
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE"/>
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-item-body>
      <p>Read this postcard from your English pen-friend, Sam.</p>
      <div>
        <object aria-label="Postcard from Sam." aria-describedby="postcard-description" data="https://grud-amp-bucket-1.s3.amazonaws.com/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/postcard.png" type="image/png"/>
        <blockquote id="postcard-description" class="qti-visually-hidden">
          <p>
            Here is a postcard of my town. Please send me a postcard from your town. What size is your
            town? What is the nicest part of your town? Where do you go in the evenings?
            Sam.
          </p>
          End of Postcard.
        </blockquote>
      </div>
      <p>
        qti-height-lines-3<br />
        format="plain"<br />
        placeholder-text="Enter a decimal number..."<br />
        pattern-mask="([0-9.]{0,6})"<br />
        data-patternmask-message="Maximum of 6 digits or decimal points permitted"<br/>
      </p>
      <qti-extended-text-interaction 
        class="qti-height-lines-3" 
        placeholder-text="Enter a decimal number..." pattern-mask="([0-9.]{0,6})" 
        data-patternmask-message="Maximum of 6 digits or decimal points permitted" 
        format="plain" expected-length="6" response-identifier="RESPONSE">
        <qti-prompt>
          <p><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>14</mn><mo class="sign">\u00D7</mo><mrow><mi>tan</mi><mo>\u2061</mo><mfenced><mrow><mn>67</mn></mrow></mfenced></mrow></mrow></math> = </p>
        </qti-prompt>
      </qti-extended-text-interaction>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "mc-calc5-qti3",
    "guid": "0000-0010-0000",
    "submissionMode": "simultaneous",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<qti-assessment-item \r\n  xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\" \r\n  identifier=\"Template_MC_001\" title=\"Product of a fraction by a number\" adaptive=\"false\" time-dependent=\"false\">\r\n <qti-response-declaration identifier=\"REPONSE0\" cardinality=\"single\" base-type=\"identifier\">\r\n  <qti-correct-response>\r\n   <qti-value>Item1<\/qti-value>\r\n  <\/qti-correct-response>\r\n <\/qti-response-declaration>\r\n <qti-outcome-declaration identifier=\"FEEDBACK1\" cardinality=\"single\" base-type=\"identifier\"\/>\r\n <qti-outcome-declaration identifier=\"FEEDBACK0\" cardinality=\"single\" base-type=\"identifier\"\/>\r\n <qti-outcome-declaration identifier=\"FEEDBACK2\" cardinality=\"single\" base-type=\"identifier\"\/>\r\n <qti-outcome-declaration identifier=\"FEEDBACK3\" cardinality=\"single\" base-type=\"identifier\"\/>\r\n <qti-outcome-declaration identifier=\"SCORE0\" cardinality=\"single\" base-type=\"float\"\/>\r\n <qti-template-declaration identifier=\"a\" cardinality=\"single\" base-type=\"integer\" math-variable=\"true\" param-variable=\"true\"\/>\r\n <qti-template-declaration identifier=\"b\" cardinality=\"single\" base-type=\"integer\" math-variable=\"true\" param-variable=\"true\"\/>\r\n <qti-template-declaration identifier=\"c\" cardinality=\"single\" base-type=\"integer\" math-variable=\"true\" param-variable=\"true\"\/>\r\n <qti-template-declaration identifier=\"p\" cardinality=\"single\" base-type=\"integer\" math-variable=\"true\" param-variable=\"true\"\/>\r\n <qti-template-declaration identifier=\"Choix0\" cardinality=\"single\" base-type=\"integer\" math-variable=\"true\" param-variable=\"true\"\/>\r\n <qti-template-declaration identifier=\"Choix1\" cardinality=\"single\" base-type=\"integer\" math-variable=\"true\" param-variable=\"true\"\/>\r\n <qti-template-declaration identifier=\"Choix2\" cardinality=\"single\" base-type=\"integer\" math-variable=\"true\" param-variable=\"true\"\/>\r\n <qti-template-declaration identifier=\"Choix3\" cardinality=\"single\" base-type=\"integer\" math-variable=\"true\" param-variable=\"true\"\/>\r\n\r\n <qti-template-processing>\r\n  <qti-set-template-value identifier=\"a\">\r\n   <qti-random-integer min=\"1\" max=\"10\"\/>\r\n  <\/qti-set-template-value>\r\n  <qti-set-template-value identifier=\"b\">\r\n   <qti-random-integer min=\"2\" max=\"20\"\/>\r\n  <\/qti-set-template-value>\r\n  <qti-set-template-value identifier=\"c\">\r\n   <qti-random-integer min=\"-20\" max=\"-10\"\/>\r\n  <\/qti-set-template-value>\r\n  <qti-set-template-value identifier=\"p\">\r\n   <qti-product>\r\n    <qti-variable identifier=\"a\"\/>\r\n    <qti-variable identifier=\"c\"\/>\r\n   <\/qti-product>\r\n  <\/qti-set-template-value>\r\n  <qti-set-template-value identifier=\"Choix0\">\r\n   <qti-subtract>\r\n    <qti-base-value base-type=\"integer\">0<\/qti-base-value>\r\n    <qti-product>\r\n     <qti-variable identifier=\"a\"\/>\r\n     <qti-variable identifier=\"c\"\/>\r\n    <\/qti-product>\r\n   <\/qti-subtract>\r\n  <\/qti-set-template-value>\r\n  <qti-set-template-value identifier=\"Choix1\">\r\n   <qti-subtract>\r\n    <qti-base-value base-type=\"integer\">0<\/qti-base-value>\r\n    <qti-product>\r\n     <qti-variable identifier=\"b\"\/>\r\n     <qti-variable identifier=\"c\"\/>\r\n    <\/qti-product>\r\n   <\/qti-subtract>\r\n  <\/qti-set-template-value>\r\n  <qti-set-template-value identifier=\"Choix2\">\r\n   <qti-round>\r\n    <qti-divide>\r\n     <qti-product>\r\n      <qti-variable identifier=\"a\"\/>\r\n      <qti-variable identifier=\"c\"\/>\r\n     <\/qti-product>\r\n     <qti-variable identifier=\"b\"\/>\r\n    <\/qti-divide>\r\n   <\/qti-round>\r\n  <\/qti-set-template-value>\r\n  <qti-set-template-value identifier=\"Choix3\">\r\n   <qti-subtract>\r\n    <qti-base-value base-type=\"integer\">0<\/qti-base-value>\r\n    <qti-round>\r\n     <qti-divide>\r\n      <qti-product>\r\n       <qti-variable identifier=\"a\"\/>\r\n       <qti-variable identifier=\"c\"\/>\r\n      <\/qti-product>\r\n      <qti-variable identifier=\"b\"\/>\r\n     <\/qti-divide>\r\n    <\/qti-round>\r\n   <\/qti-subtract>\r\n  <\/qti-set-template-value>\r\n  <qti-template-constraint>\r\n   <qti-equal tolerance-mode=\"exact\">\r\n    <qti-gcd>\r\n     <qti-variable identifier=\"a\"\/>\r\n     <qti-variable identifier=\"b\"\/>\r\n    <\/qti-gcd>\r\n    <qti-base-value base-type=\"integer\">1<\/qti-base-value>\r\n   <\/qti-equal>\r\n  <\/qti-template-constraint>\r\n  <qti-template-constraint>\r\n   <qti-lt>\r\n    <qti-variable identifier=\"a\"\/>\r\n    <qti-variable identifier=\"b\"\/>\r\n   <\/qti-lt>\r\n  <\/qti-template-constraint>\r\n  <qti-template-constraint>\r\n   <qti-equal tolerance-mode=\"exact\">\r\n    <qti-integer-modulus>\r\n     <qti-variable identifier=\"p\"\/>\r\n     <qti-variable identifier=\"b\"\/>\r\n    <\/qti-integer-modulus>\r\n    <qti-base-value base-type=\"integer\">0<\/qti-base-value>\r\n   <\/qti-equal>\r\n  <\/qti-template-constraint>\r\n <\/qti-template-processing>\r\n <qti-item-body>\r\n  <div>\r\n   <qti-choice-interaction response-identifier=\"REPONSE0\" class=\"qti-labels-none\" shuffle=\"true\" max-choices=\"1\">\r\n    <qti-prompt>\r\n      <p>\r\n       <math xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\">\r\n        <mfrac>\r\n          <mi>a<\/mi>\r\n          <mi>b<\/mi>\r\n        <\/mfrac>\r\n       <\/math> of <math xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\">\r\n        <mi>c<\/mi>\r\n       <\/math>\r\n       <br\/> is equal to:<br\/>\r\n      <\/p> \r\n     <\/qti-prompt>\r\n    <qti-simple-choice identifier=\"Item0\" fixed=\"false\"> - <math xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\">\r\n      <mfrac>\r\n       <mi>Choix0<\/mi>\r\n       <mi>Choix1<\/mi>\r\n      <\/mfrac>\r\n     <\/math>\r\n    <\/qti-simple-choice>\r\n    <qti-simple-choice identifier=\"Item1\" fixed=\"false\">\r\n     <math xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\">\r\n      <mi>Choix2<\/mi>\r\n     <\/math>\r\n    <\/qti-simple-choice>\r\n    <qti-simple-choice identifier=\"Item2\" fixed=\"false\">\r\n     <math xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\">\r\n      <mi>Choix3<\/mi>\r\n     <\/math>\r\n    <\/qti-simple-choice>\r\n   <\/qti-choice-interaction>\r\n  <\/div>\r\n <\/qti-item-body>\r\n <qti-response-processing>\r\n  <qti-response-condition>\r\n   <qti-response-if>\r\n    <qti-match>\r\n     <qti-variable identifier=\"REPONSE0\"\/>\r\n     <qti-correct identifier=\"REPONSE0\"\/>\r\n    <\/qti-match>\r\n    <qti-set-outcome-value identifier=\"FEEDBACK1\">\r\n     <qti-base-value base-type=\"identifier\">FEEDBACK1<\/qti-base-value>\r\n    <\/qti-set-outcome-value>\r\n    <qti-set-outcome-value identifier=\"SCORE0\">\r\n     <qti-base-value base-type=\"float\">4<\/qti-base-value>\r\n    <\/qti-set-outcome-value>\r\n   <\/qti-response-if>\r\n   <qti-response-else-if>\r\n    <qti-match>\r\n     <qti-base-value base-type=\"identifier\">Item0<\/qti-base-value>\r\n     <qti-variable identifier=\"REPONSE0\"\/>\r\n    <\/qti-match>\r\n    <qti-set-outcome-value identifier=\"FEEDBACK0\">\r\n     <qti-base-value base-type=\"identifier\">FEEDBACK0<\/qti-base-value>\r\n    <\/qti-set-outcome-value>\r\n    <qti-set-outcome-value identifier=\"SCORE0\">\r\n     <qti-base-value base-type=\"float\">0<\/qti-base-value>\r\n    <\/qti-set-outcome-value>\r\n   <\/qti-response-else-if>\r\n   <qti-response-else-if>\r\n    <qti-match>\r\n     <qti-base-value base-type=\"identifier\">Item2<\/qti-base-value>\r\n     <qti-variable identifier=\"REPONSE0\"\/>\r\n    <\/qti-match>\r\n    <qti-set-outcome-value identifier=\"FEEDBACK2\">\r\n     <qti-base-value base-type=\"identifier\">FEEDBACK2<\/qti-base-value>\r\n    <\/qti-set-outcome-value>\r\n    <qti-set-outcome-value identifier=\"SCORE0\">\r\n     <qti-base-value base-type=\"float\">0<\/qti-base-value>\r\n    <\/qti-set-outcome-value>\r\n   <\/qti-response-else-if>\r\n   <qti-response-else>\r\n    <qti-set-outcome-value identifier=\"FEEDBACK3\">\r\n     <qti-base-value base-type=\"identifier\">FEEDBACK3<\/qti-base-value>\r\n    <\/qti-set-outcome-value>\r\n    <qti-set-outcome-value identifier=\"SCORE0\">\r\n     <qti-base-value base-type=\"float\">0<\/qti-base-value>\r\n    <\/qti-set-outcome-value>\r\n   <\/qti-response-else>\r\n  <\/qti-response-condition>\r\n <\/qti-response-processing>\r\n <qti-modal-feedback outcome-identifier=\"FEEDBACK1\" identifier=\"FEEDBACK1\" show-hide=\"show\">\r\n   <qti-content-body> Good answer. <\/qti-content-body>\r\n <\/qti-modal-feedback>\r\n <qti-modal-feedback outcome-identifier=\"FEEDBACK0\" identifier=\"FEEDBACK0\" show-hide=\"show\">\r\n   <qti-content-body> We must multiply the numerator only. <\/qti-content-body>\r\n <\/qti-modal-feedback>\r\n <qti-modal-feedback outcome-identifier=\"FEEDBACK2\" identifier=\"FEEDBACK2\" show-hide=\"show\">\r\n   <qti-content-body>Pay attention to the sign!<\/qti-content-body><\/qti-modal-feedback>\r\n <qti-modal-feedback outcome-identifier=\"FEEDBACK3\" identifier=\"FEEDBACK3\" show-hide=\"show\">\r\n  <qti-content-body>No comment.<\/qti-content-body><\/qti-modal-feedback>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "sbac-choice-qti3",
    "guid": "0000-0010-0001",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<!-- This example adapted from the Smarter Balanced IRP, copyright Smarter Balanced. -->\r\n<qti-assessment-item \r\n  xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\" \r\n  xmlns=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0\" \r\n  xsi:schemaLocation=\"http:\/\/www.imsglobal.org\/xsd\/imsqtiasi_v3p0 https:\/\/purl.imsglobal.org\/spec\/qti\/v3p0\/schema\/xsd\/imsqti_asiv3p0_v1p0.xsd\"  \r\n  identifier=\"sbac-200-183300\" time-dependent=\"false\" title=\"sbac-200-183300\" xml:lang=\"en\">\r\n  <qti-response-declaration base-type=\"identifier\" cardinality=\"multiple\" identifier=\"RESPONSE\">\r\n    <qti-correct-response>\r\n      <qti-value>D<\/qti-value>\r\n      <qti-value>E<\/qti-value>\r\n    <\/qti-correct-response>\r\n  <\/qti-response-declaration>\r\n  <qti-outcome-declaration base-type=\"float\" cardinality=\"single\" identifier=\"SCORE\" normal-maximum=\"1.0\" normal-minimum=\"0.0\">\r\n    <qti-default-value>\r\n      <qti-value>0<\/qti-value>\r\n    <\/qti-default-value>\r\n  <\/qti-outcome-declaration>\r\n  \r\n  <qti-outcome-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"FEEDBACK\" \/>\r\n  \r\n  <qti-item-body class=\"sbac sbac-global-item-catalog-ref\" data-catalog-idref=\"item-183300-global\">\r\n    <div class=\"qti-layout-row\">\r\n      <div class=\"qti-layout-col8 qti-layout-offset2\">\r\n        <div class=\"prompt\">\r\n          <strong>sbac-200-183300<\/strong><hr \/>\r\n          <p>\r\n            Select <strong>all<\/strong> values equivalent to <math xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\"><mo>-<\/mo><mfrac bevelled=\"false\"><mi>10<\/mi><mi>7<\/mi><\/mfrac><\/math>.\r\n          <\/p>\r\n        <\/div>\r\n        <qti-choice-interaction class=\"sbac qti-labels-none\" shuffle=\"true\" max-choices=\"5\" min-choices=\"1\" response-identifier=\"RESPONSE\">\r\n          <qti-simple-choice identifier=\"A\">\r\n            <p>\r\n              <math xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\"><mfrac bevelled=\"false\"><mrow><mo>-<\/mo><mi>10<\/mi><\/mrow><mrow><mo>-<\/mo><mi>7<\/mi><\/mrow><\/mfrac><\/math>\r\n            <\/p>\r\n          <\/qti-simple-choice>\r\n          <qti-simple-choice identifier=\"B\">\r\n            <p>\r\n              <math xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\"><mo>-<\/mo><mi>3<\/mi><mfrac bevelled=\"false\"><mi>1<\/mi><mi>7<\/mi><\/mfrac><\/math>\r\n            <\/p>\r\n          <\/qti-simple-choice>\r\n          <qti-simple-choice identifier=\"C\">\r\n            <p>\r\n              <math xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\"><mi>1<\/mi><mfrac bevelled=\"false\"><mi>3<\/mi><mi>7<\/mi><\/mfrac><\/math>\r\n            <\/p>\r\n          <\/qti-simple-choice>\r\n          <qti-simple-choice identifier=\"D\">\r\n            <p>\r\n              <math xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\"><mo>-<\/mo><mfrac bevelled=\"false\"><mrow><mo>-<\/mo><mi>10<\/mi><\/mrow><mrow><mo>-<\/mo><mi>7<\/mi><\/mrow><\/mfrac><\/math>\r\n            <\/p>\r\n          <\/qti-simple-choice>\r\n          <qti-simple-choice identifier=\"E\">\r\n            <p>\r\n              <math xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\"><mo>-<\/mo><mi>1<\/mi><mfrac bevelled=\"false\"><mi>3<\/mi><mi>7<\/mi><\/mfrac><\/math>\r\n            <\/p>\r\n          <\/qti-simple-choice>\r\n        <\/qti-choice-interaction>\r\n      <\/div>\r\n    <\/div>\r\n  <\/qti-item-body>\r\n  <qti-response-processing>\r\n    <qti-response-condition>\r\n      <qti-response-if>\r\n        <qti-match>\r\n          <qti-variable identifier=\"RESPONSE\"\/>\r\n          <qti-correct identifier=\"RESPONSE\"\/>\r\n        <\/qti-match>\r\n        <qti-set-outcome-value identifier=\"SCORE\">\r\n          <qti-base-value base-type=\"float\">\r\n          1\r\n          <\/qti-base-value>\r\n        <\/qti-set-outcome-value>\r\n        <qti-set-outcome-value identifier=\"FEEDBACK\">\r\n\t  <qti-base-value base-type=\"identifier\">correct<\/qti-base-value>\r\n        <\/qti-set-outcome-value>\r\n      <\/qti-response-if>\r\n      <qti-response-else>\r\n        <qti-set-outcome-value identifier=\"SCORE\">\r\n          <qti-base-value base-type=\"float\">\r\n          0\r\n          <\/qti-base-value>\r\n        <\/qti-set-outcome-value>\r\n        <qti-set-outcome-value identifier=\"FEEDBACK\">\r\n          <qti-base-value base-type=\"identifier\">incorrect<\/qti-base-value>\r\n        <\/qti-set-outcome-value>\r\n      <\/qti-response-else>\r\n    <\/qti-response-condition>\r\n  <\/qti-response-processing>\r\n  <qti-modal-feedback outcome-identifier=\"FEEDBACK\" identifier=\"correct\" show-hide=\"show\">\r\n    <qti-content-body>\r\n      <div class=\"alert alert-success d-flex align-items-center\" role=\"alert\">\r\n        <i class=\"mdi mdi-check-circle mdi-24px\"><\/i>\r\n        <div class=\"mxl-feedback-inline-msg\">Well done!<\/div>\r\n      <\/div>\r\n    <\/qti-content-body>\r\n  <\/qti-modal-feedback>\r\n  <qti-modal-feedback outcome-identifier=\"FEEDBACK\" identifier=\"incorrect\" show-hide=\"show\">\r\n    <qti-content-body>\r\n      <div class=\"alert alert-danger d-flex align-items-center\" role=\"alert\">\r\n        <i class=\"mdi mdi-close-circle mdi-24px\"><\/i>\r\n        <div class=\"mxl-feedback-inline-msg\">\r\n          <p>Sorry, your answer is not correct.<\/p>\r\n        <\/div>\r\n      <\/div>\r\n    <\/qti-content-body>\r\n  <\/qti-modal-feedback>\r\n<\/qti-assessment-item>"
  },
  {
    "identifier": "a13-a15-captions-glossary",
    "guid": "0000-0012-00001",
    "submissionMode": "simultaneous",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="a13-a15-captions-glossary" title="A13-A15 Video, Captions, Glossary" time-dependent="false" xml:lang="en-US" adaptive="false">
      <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE">
        <qti-correct-response>
          <qti-value>i2</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
        <qti-default-value>
          <qti-value>1</qti-value>
        </qti-default-value>
      </qti-outcome-declaration>
      <qti-item-body>
        <div class="qti-layout-row">
          <div class="qti-layout-col8">
            <div class="qti3-player-item-card-bordered-rounded qti3-player-item-card-raised-rounded">
              <div class="qti3-player-item-card-body qti-padding-2">
                <div class="qti-layout-row">
                  <div class="qti-layout-col6">
                    <p>
                      Watch the video below before answering the question.
                    </p>
                    <video width="100%" controls="true" crossorigin="anonymous">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/6ec4a16c-ad40-4938-bcb3-24d5bac132c3/media/QTI2018.mp4" type="video/mp4"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/6ec4a16c-ad40-4938-bcb3-24d5bac132c3/media/QTI2018.ogg" type="video/ogg"/>
                      <track src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/6ec4a16c-ad40-4938-bcb3-24d5bac132c3/media/QTI2018captions.vtt" kind="captions" label="English" srclang="en"/>
                    </video>
                  </div>
                  <div class="qti-layout-col6">
                    <p>
                      The letters on the man's sweatshirt are an <span data-catalog-idref="glosscat">acronym</span> for which institution?
                    </p>
                    <qti-choice-interaction class="sbac" max-choices="1" min-choices="1" response-identifier="RESPONSE">
                      <qti-simple-choice identifier="i1">
                        <p>Question and Test Interoperability Standard</p>
                      </qti-simple-choice>
                      <qti-simple-choice identifier="i2">
                        <p>Rhode Island School of Design</p>
                      </qti-simple-choice>
                      <qti-simple-choice identifier="i3">
                        <p>Region 1 Storage Device</p>
                      </qti-simple-choice>
                      <qti-simple-choice identifier="i4">
                        <p>Learning Impact Leadership Institute</p>
                      </qti-simple-choice>
                    </qti-choice-interaction>
                  </div>
                </div>
              </div>
            </div><!-- /card -->
          </div>
          <div class="qti-layout-col4">
            <div class="qti-well qti-margin-b-0">
              <strong>About This Item</strong>
              <p>
                <small>This demonstrates how a QTI3 delivery system binds <strong>Personal Needs and Preferences (PNP)</strong> settings and accessibility support content in a QTI3 "Catalog".</small>
              </p>
              <p>
                <small>In this item, the word "acronym" has a glossary support in this item's Catalog.  <strong>Click the word "acronym"</strong> and the glossary definition appears!</small>
              </p>
              <p class="qti-margin-b-0">
                <small>When this item's QTI3 XML is loaded, QTI3 Player analyzes the item's Catalog - along with current PNP Settings - to create the appropriate user experience.</small>
              </p>
            </div>
          </div>
        </div><!-- /row -->
      </qti-item-body>
      <qti-catalog-info>
        <qti-catalog id="glosscat">
          <qti-card support="glossary-on-screen">
            <qti-html-content>An abbreviation usually created using the first letters of other words and pronounced as a word.</qti-html-content>
          </qti-card>
        </qti-catalog>
      </qti-catalog-info>
      <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "sbac-choice-templated-qti3",
    "guid": "0000-0010-0002",
    "submissionMode": "individual",
    "xml": `<!-- This example adapted from the Smarter Balanced IRP, copyright Smarter Balanced. -->
      <qti-assessment-item xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"   xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="sbac-200-183300-templated" time-dependent="false" title="sbac-200-183300-templated" xml:lang="en">
        <qti-response-declaration base-type="identifier" cardinality="multiple" identifier="RESPONSE">
          <qti-correct-response>
            <qti-value>D</qti-value>
            <qti-value>E</qti-value>
          </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE" normal-maximum="1.0" normal-minimum="0.0">
          <qti-default-value>
            <qti-value>0</qti-value>
          </qti-default-value>
        </qti-outcome-declaration>
      <qti-outcome-declaration base-type="identifier" cardinality="single" identifier="FEEDBACK" />
      <qti-template-declaration identifier="a" cardinality="single" base-type="integer" math-variable="true" param-variable="true"/>
      <qti-template-declaration identifier="b" cardinality="single" base-type="integer" math-variable="true" param-variable="true"/>
      <qti-template-declaration identifier="c" cardinality="single" base-type="integer" math-variable="true" param-variable="true"/>
      <qti-template-declaration identifier="d" cardinality="single" base-type="integer" math-variable="true" param-variable="true"/>
      <qti-template-processing>
        <qti-set-template-value identifier="a">
          <qti-random-integer min="2" max="20"/>
        </qti-set-template-value>
        <qti-set-template-value identifier="b">
          <qti-random-integer min="3" max="13"/>
        </qti-set-template-value>
        <qti-set-template-value identifier="c">
          <qti-integer-divide>
            <qti-variable identifier="a"/>
            <qti-variable identifier="b"/>
          </qti-integer-divide>
        </qti-set-template-value>
        <qti-set-template-value identifier="d">
          <qti-integer-modulus>
            <qti-variable identifier="a"/>
            <qti-variable identifier="b"/>
          </qti-integer-modulus>
        </qti-set-template-value>
        <qti-template-constraint>
          <qti-and>
            <qti-gt>
              <qti-variable identifier="a"/>
              <qti-variable identifier="b"/>
            </qti-gt>
            <qti-not>
              <qti-equal tolerance-mode="exact">
                <qti-variable identifier="c"/>
                <qti-variable identifier="d"/>
              </qti-equal>
            </qti-not>
            <qti-not>
              <qti-equal tolerance-mode="exact">
                <qti-variable identifier="d"/>
                <qti-base-value base-type="integer">0</qti-base-value>
              </qti-equal>
            </qti-not>
          </qti-and>
        </qti-template-constraint>
      </qti-template-processing>
      <qti-item-body class="" data-catalog-idref="item-183300-global">
        <div class="qti-layout-row">
          <div class="qti-layout-col8 qti-layout-offset2">
            <div class="prompt">
              <strong>sbac-200-183300 <em>with templating</em></strong>
              <hr />
              <p>
                Select <strong>all</strong> values equivalent to <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><mfrac bevelled="false"><mi>a</mi><mi>b</mi></mfrac></math>.
              </p>
            </div>
            <qti-choice-interaction class="sbac qti-labels-none" shuffle="true" max-choices="5" min-choices="1" response-identifier="RESPONSE">
              <qti-simple-choice identifier="A">
                <p>
                  <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac bevelled="false"><mrow><mo>-</mo><mi>a</mi></mrow><mrow><mo>-</mo><mi>b</mi></mrow></mfrac></math>
                </p>
              </qti-simple-choice>
              <qti-simple-choice identifier="B">
                <p>
                  <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><mi>d</mi><mfrac bevelled="false"><mi>c</mi><mi>b</mi></mfrac></math>
                </p>
              </qti-simple-choice>
              <qti-simple-choice identifier="C">
                <p>
                  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>c</mi><mfrac bevelled="false"><mi>d</mi><mi>b</mi></mfrac></math>
                </p>
              </qti-simple-choice>
              <qti-simple-choice identifier="D">
                <p>
                  <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><mfrac bevelled="false"><mrow><mo>-</mo><mi>a</mi></mrow><mrow><mo>-</mo><mi>b</mi></mrow></mfrac></math>
                </p>
              </qti-simple-choice>
              <qti-simple-choice identifier="E">
                <p>
                  <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><mi>c</mi><mfrac bevelled="false"><mi>d</mi><mi>b</mi></mfrac></math>
                </p>
              </qti-simple-choice>
            </qti-choice-interaction>
          </div>
        </div>
      </qti-item-body>
      <qti-response-processing>
        <qti-response-condition>
          <qti-response-if>
            <qti-match>
              <qti-variable identifier="RESPONSE"/>
              <qti-correct identifier="RESPONSE"/>
            </qti-match>
            <qti-set-outcome-value identifier="SCORE">
              <qti-base-value base-type="float">1</qti-base-value>
            </qti-set-outcome-value>
            <qti-set-outcome-value identifier="FEEDBACK">
              <qti-base-value base-type="identifier">correct</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-if>
          <qti-response-else>
            <qti-set-outcome-value identifier="SCORE">
              <qti-base-value base-type="float">0</qti-base-value>
            </qti-set-outcome-value>
            <qti-set-outcome-value identifier="FEEDBACK">
              <qti-base-value base-type="identifier">incorrect</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-else>
        </qti-response-condition>
      </qti-response-processing>
      <qti-modal-feedback outcome-identifier="FEEDBACK" identifier="correct" show-hide="show">
        <qti-content-body>
          <p>Well done!</p>
        </qti-content-body>
      </qti-modal-feedback>
      <qti-modal-feedback outcome-identifier="FEEDBACK" identifier="incorrect" show-hide="show">
        <qti-content-body>
          <p>Sorry, your answer is not correct.</p>
        </qti-content-body>
      </qti-modal-feedback>
    </qti-assessment-item>`
  },
  {
    "identifier": "sbac-200-51246-partial",
    "guid": "0000-0012-00002",
    "submissionMode": "simultaneous",
    "xml": `<!-- This example adapted from the Smarter Balanced IRP, copyright Smarter Balanced. -->
      <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:m3="http://www.w3.org/1998/Math/MathML" xmlns:ssml11="http://www.w3.org/2001/10/synthesis" xmlns:xi="http://www.w3.org/2001/XInclude" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" identifier="sbac-200-51246" time-dependent="false" title="51246" tool-name="TIMS QTI 3.0 Export" tool-version="5.10.2" xml:lang="en" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd http://www.w3.org/1998/Math/MathML https://purl.imsglobal.org/spec/mathml/v3p0/schema/xsd/mathml3.xsd http://www.w3.org/2001/10/synthesis https://purl.imsglobal.org/spec/ssml/v1p1/schema/xsd/ssmlv1p1-core.xsd http://www.w3.org/2001/XInclude https://purl.imsglobal.org/spec/w3/2001/schema/xsd/XInclude.xsd ">
        <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE"/>
        <qti-outcome-declaration base-type="float" cardinality="single" external-scored="human" identifier="SCORE" interpretation="scoreSystem:human" normal-maximum="2.0" normal-minimum="0.0">
          <qti-default-value>
            <qti-value>0</qti-value>
          </qti-default-value>
        </qti-outcome-declaration>
        <qti-companion-materials-info>
          <qti-calculator>
            <qti-calculator-type>scientific</qti-calculator-type>
            <qti-description>all basic calculator functions, root, trigonometric, memory functions</qti-description>
          </qti-calculator>
        </qti-companion-materials-info>

        <qti-item-body data-catalog-idref="item-51246-global">
          <div class="qti-layout-row">
            <div class="qti-layout-col8">
              <div class="qti3-player-item-card-bordered-rounded qti3-player-item-card-raised-rounded">
                <div class="qti3-player-item-card-body qti-padding-2">
                  <div class="qti-layout-row">
                    <div class="qti-layout-col12">
                      <h2 class="qti-visually-hidden semantic-marker" data-qti-suppress-tts="computer-read-aloud">
                        Question
                      </h2>
                      <div class="prompt">
                        <p>
                          The town safety code <span data-catalog-idref="glossary-term-8" data-sbac-term="requires">requires</span> 10 square feet of <span data-catalog-idref="glossary-term-19" data-sbac-term="empty floor space">empty floor space</span> per <span data-catalog-idref="glossary-term-18" data-sbac-term="person">person</span>. <span data-catalog-idref="glossary-term-19" data-sbac-term="Empty floor space">Empty floor space</span> is defined as space where no <span data-catalog-idref="glossary-term-7" data-sbac-term="ramps">ramps</span> will be <span data-catalog-idref="glossary-term-17" data-sbac-term="built">built</span>.
                        </p>
                        <br/>
                        <p>
                          <span data-catalog-idref="glossary-term-1" data-sbac-term="Based on">Based on</span> the number of <span data-catalog-idref="glossary-term-7" data-sbac-term="ramps">ramps</span> you\u2019ve <span data-catalog-idref="glossary-term-5" data-sbac-term="chosen">chosen</span>, what is the maximum number of <span data-catalog-idref="glossary-term-20" data-sbac-term="people">people</span> that can be in the <span data-catalog-idref="glossary-term-16" data-sbac-term="skate park">skate park</span> at <span data-catalog-idref="glossary-term-11" data-sbac-term="any">any</span> given time?
                        </p>
                        <br/>
                        <p>
                          <span data-catalog-idref="glossary-term-4" data-sbac-term="Use">Use</span> information from previous questions to fully explain your answer.
                        </p>
                      </div>

                      <qti-extended-text-interaction class="qti-height-lines-3" format="xhtml" response-identifier="RESPONSE"/>
                    </div>
                  </div>
                </div>
              </div><!-- /card -->
            </div>
            
            <div class="qti-layout-col4">
              <div class="qti-well qti-margin-b-0">
                <strong>About This Item</strong>
                <p>
                  <small>In this item - excerpted from a released Smarter Balanced item - some words have <strong>Glossary</strong> support, some words have <strong>Keyword Translation</strong> support, some words have the custom <strong>Smarter Balanced Illustrated Glossary</strong> support, and some words have all three supports.</small>
                </p>
                <p class="qti-margin-b-0">
                  <small><strong>Click the Settings</strong> button in the upper right corner above, then select (or deselect) options in the PNP Settings panel.  As you adjust the PNP Settings, QTI3 Player <em>dynamically updates</em> the item's presentation according to the new PNP Settings and the available supporting content in the Catalog!</small>
                </p>
              </div>
            </div>
          </div><!-- /row -->
        </qti-item-body>
        <qti-catalog-info>
          <qti-catalog id="item-51246-global">
            <qti-card support="sign-language">
              <qti-card-entry default="true" xml:lang="ase">
                <qti-html-content>
                  <video controls="true">
                    <source src="https://grud-amp-bucket-1.s3.amazonaws.com/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/item_51246_ASL_STEM.webm" type="video/webm"/>
                    <source src="https://grud-amp-bucket-1.s3.amazonaws.com/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/item_51246_ASL_STEM.mp4" type="video/mp4"/>
                  </video>
                </qti-html-content>
              </qti-card-entry>
            </qti-card>
          </qti-catalog>
          <qti-catalog id="glossary-term-1">
            <qti-card support="keyword-translation">
              <qti-card-entry data-list-code="TDS_WL_ArabicGloss" data-list-type="glossary" xml:lang="ar">
                <qti-html-content>
                  <div>
                    <span>\u0628\u0646\u0627\u0621\u064B\u0627 \u0639\u0644\u0649\u060C \u0648\u0641\u0642\u064B\u0627 \u0644</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_arabic.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_arabic.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
              <qti-card-entry data-list-code="TDS_WL_BurmeseGloss" data-list-type="glossary" xml:lang="my">
                <qti-html-content>
                  <div>
                    <span>\u1021\u1001\u103C\u1031\u1001\u1036\u104D</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_burmese.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_burmese.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
              <qti-card-entry data-list-code="TDS_WL_CantoneseGloss" data-list-type="glossary" xml:lang="yue">
                <qti-html-content>
                  <div>
                    <span>\u6839\u636E</span>
                  </div>
                  <div>
                    <span>\u6839\u64DA</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_cantonese.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_cantonese.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
              <qti-card-entry data-list-code="TDS_WL_TagalGloss" data-list-type="glossary" xml:lang="tl">
                <qti-html-content>
                  <div>
                    <span>Batay sa</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_filipino_a.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_filipino_a.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                  <div>
                    <span>Basar iti  </span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_filipino_b.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_filipino_b.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
              <qti-card-entry data-list-code="TDS_WL_HmongGloss" data-list-type="glossary" xml:lang="hmn">
                <qti-html-content>
                  <div>
                    <span>Raws li</span>
                  </div>
                  <div>
                    <span>Raws le</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_hmong.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_hmong.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
              <qti-card-entry data-list-code="TDS_WL_KoreanGloss" data-list-type="glossary" xml:lang="ko">
                <qti-html-content>
                  <div>
                    <span>~\uC5D0 \uBC14\uD0D5\uC744 \uB454</span>
                  </div>
                  <div>
                    <span>~\uC5D0 \uAE30\uBC18\uD55C</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_korean.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_korean.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
              <qti-card-entry data-list-code="TDS_WL_MandarinGloss" data-list-type="glossary" xml:lang="cmn">
                <qti-html-content>
                  <div>
                    <span>\u6839\u636E</span></div><div><span>\u6839\u64DA</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_mandarin.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_mandarin.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
              <qti-card-entry data-list-code="TDS_WL_PunjabiGloss" data-list-type="glossary" xml:lang="pa">
                <qti-html-content>
                  <div>
                    <span>\u062F\u06CC \u0628\u0646\u06CC\u0627\u062F \u062A\u06D2  </span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_punjabi_a.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_punjabi_a.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                  <div>
                    <span> \u0A24\u0A47 \u0A05\u0A27\u0A3E\u0A30\u0A24</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_punjabi_b.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_punjabi_b.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
              <qti-card-entry data-list-code="TDS_WL_RussianGloss" data-list-type="glossary" xml:lang="ru">
                <qti-html-content>
                  <div>
                    <span>\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_russian.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_russian.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
              <qti-card-entry data-list-code="TDS_WL_SomaliGloss" data-list-type="glossary" xml:lang="so">
                <qti-html-content>
                  <div>
                    <span>Ku saleysan</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_somali.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_somali.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
              <qti-card-entry data-list-code="TDS_WL_ESNGlossary" data-list-type="glossary" xml:lang="es">
                <qti-html-content>
                  <div>
                    <span>bas\u00E1ndote en</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_spanish.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_spanish.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
              <qti-card-entry data-list-code="TDS_WL_UkrainianGloss" data-list-type="glossary" xml:lang="uk">
                <qti-html-content>
                  <div>
                    <span>\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0456</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_ukrainian.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_ukrainian.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
              <qti-card-entry data-list-code="TDS_WL_VietnameseGloss" data-list-type="glossary" xml:lang="vi">
                <qti-html-content>
                  <div>
                    <span>D\u1EF1a tr\u00EAn</span>
                  </div>
                  <div>
                    <span>D\u1EF1a v\u00E0o</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_vietnamese.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_based-on_1_vietnamese.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
            </qti-card>
          </qti-catalog>
          <qti-catalog id="glossary-term-10">
            <qti-card support="keyword-translation">
              <qti-card-entry data-list-code="TDS_WL_ArabicGloss" data-list-type="glossary" xml:lang="ar">
                <qti-html-content>
                  <div>
                    <span>\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_arabic.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_arabic.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
              <qti-card-entry data-list-code="TDS_WL_BurmeseGloss" data-list-type="glossary" xml:lang="my">
                <qti-html-content>
                  <div>
                    <span>\u1016\u103C\u1005\u103A\u101B\u1019\u100A\u103A</span>
                    <audio controls="true">
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_burmese.ogg" type="audio/ogg"/>
                      <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_burmese.m4a" type="audio/mp4"/>
                    </audio>
                  </div>
                </qti-html-content>
              </qti-card-entry>
              <qti-card-entry data-list-code="TDS_WL_CantoneseGloss" data-list-type="glossary" xml:lang="yue">
              <qti-html-content>
                <div>
                  <span>\u5FC5\u9808\u4FC2</span>
                  <audio controls="true">
                    <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_cantonese.ogg" type="audio/ogg"/>
                    <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_cantonese.m4a" type="audio/mp4"/>
                  </audio>
                </div>
              </qti-html-content>
            </qti-card-entry>
            <qti-card-entry data-list-code="TDS_WL_TagalGloss" data-list-type="glossary" xml:lang="tl">
              <qti-html-content>
                <div>
                  <span>ay dapat</span>
                  <audio controls="true">
                    <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_filipino_a.ogg" type="audio/ogg"/>
                    <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_filipino_a.m4a" type="audio/mp4"/>
                  </audio>
                </div>
                <div>
                  <span>nasken a</span>
                  <audio controls="true">
                    <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_filipino_b.ogg" type="audio/ogg"/>
                    <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_filipino_b.m4a" type="audio/mp4"/>
                  </audio>
                </div>
              </qti-html-content>
            </qti-card-entry>
            <qti-card-entry data-list-code="TDS_WL_HmongGloss" data-list-type="glossary" xml:lang="hmn">
              <qti-html-content>
                <div>
                  <span>yuav tsum yog</span>
                  <audio controls="true">
                    <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_hmong.ogg" type="audio/ogg"/>
                    <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_hmong.m4a" type="audio/mp4"/>
                  </audio>
                </div>
              </qti-html-content>
            </qti-card-entry>
            <qti-card-entry data-list-code="TDS_WL_KoreanGloss" data-list-type="glossary" xml:lang="ko">
              <qti-html-content><div><span>~\uC784\uC5D0 \uD2C0\uB9BC\uC5C6\uB2E4</span>
                <audio controls="true">
                  <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_korean.ogg" type="audio/ogg"/>
                  <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_korean.m4a" type="audio/mp4"/>
                </audio>
              </div>
            </qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_MandarinGloss" data-list-type="glossary" xml:lang="cmn">
            <qti-html-content>
              <div>
                <span>\u4E00\u5B9A</span>
                <audio controls="true">
                  <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_mandarin.ogg" type="audio/ogg"/>
                  <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_mandarin.m4a" type="audio/mp4"/>
                </audio>
              </div>
            </qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_PunjabiGloss" data-list-type="glossary" xml:lang="pa">
            <qti-html-content><div><span>\u0644\u0627\u0632\u0645\u06CC \u06C1\u0648\u0648\u0646</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_punjabi_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_punjabi_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>\u0A39\u0A4B\u0A23\u0A47 \u0A1A\u0A3E\u0A39\u0A40\u0A26\u0A47</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_punjabi_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_punjabi_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_RussianGloss" data-list-type="glossary" xml:lang="ru">
            <qti-html-content><div><span>\u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u044B</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_russian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_russian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_SomaliGloss" data-list-type="glossary" xml:lang="so">
            <qti-html-content><div><span>waa inay noqdaan</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_somali.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_somali.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_ESNGlossary" data-list-type="glossary" xml:lang="es">
            <qti-html-content><div><span>deben estar</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_spanish.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_spanish.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_UkrainianGloss" data-list-type="glossary" xml:lang="uk">
            <qti-html-content><div><span>\u043C\u0430\u044E\u0442\u044C \u0431\u0443\u0442\u0438 \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0456 \u043D\u0430 \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u0456</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_ukrainian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_ukrainian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_VietnameseGloss" data-list-type="glossary" xml:lang="vi">
            <qti-html-content><div><span>Ph\u1EA3i</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_vietnamese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_must-be_10_vietnamese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
        </qti-card>
      </qti-catalog>
      <qti-catalog id="glossary-term-11">
        <qti-card support="keyword-translation">
          <qti-card-entry data-list-code="TDS_WL_ArabicGloss" data-list-type="glossary" xml:lang="ar">
            <qti-html-content><div><span>\u0623\u064A</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_arabic.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_arabic.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_BurmeseGloss" data-list-type="glossary" xml:lang="my">
            <qti-html-content><div><span>\u1010\u1005\u103A\u1005\u102F\u1036\u1010\u1005\u103A\u1001\u102F\u1016\u103C\u1005\u103A\u101E\u1031\u102C\u104A \u1010\u1005\u103A\u1005\u102F\u1036\u1010\u1005\u103A\u101B\u102C\u1016\u103C\u1005\u103A\u101E\u1031\u102C</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_burmese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_burmese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_CantoneseGloss" data-list-type="glossary" xml:lang="yue">
            <qti-html-content><div><span>\u6240\u6709</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_cantonese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_cantonese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_TagalGloss" data-list-type="glossary" xml:lang="tl">
            <qti-html-content><div><span>Anumang</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_filipino_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_filipino_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>aniaman</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_filipino_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_filipino_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_HmongGloss" data-list-type="glossary" xml:lang="hmn">
            <qti-html-content><div><span>tej yam</span></div><div><span>tej yaam</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_hmong.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_hmong.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_KoreanGloss" data-list-type="glossary" xml:lang="ko">
            <qti-html-content><div><span>\uC5B4\uB5A4</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_korean.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_korean.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_MandarinGloss" data-list-type="glossary" xml:lang="cmn">
            <qti-html-content><div><span>\u5176\u5B83</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_mandarin.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_mandarin.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_PunjabiGloss" data-list-type="glossary" xml:lang="pa">
            <qti-html-content><div><span>\u06A9\u0648\u0626\u06CC</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_punjabi_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_punjabi_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>\u0A15\u0A4B\u0A08</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_punjabi_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_punjabi_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_RussianGloss" data-list-type="glossary" xml:lang="ru">
            <qti-html-content><div><span>\u041B\u044E\u0431\u043E\u0439</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_russian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_russian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_SomaliGloss" data-list-type="glossary" xml:lang="so">
            <qti-html-content><div><span>mid walba</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_somali.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_somali.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_ESNGlossary" data-list-type="glossary" xml:lang="es">
            <qti-html-content><div><span>de cualquiera</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_spanish.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_spanish.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_UkrainianGloss" data-list-type="glossary" xml:lang="uk">
            <qti-html-content><div><span>\u0411\u0443\u0434\u044C-\u044F\u043A\u043E\u0457</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_ukrainian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_ukrainian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_VietnameseGloss" data-list-type="glossary" xml:lang="vi">
            <qti-html-content><div><span>b\u1EA5t k\u1EF3</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_vietnamese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_any_11_vietnamese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
        </qti-card>
      </qti-catalog>
      <qti-catalog id="glossary-term-16">
        <qti-card support="keyword-translation">
          <qti-card-entry data-list-code="TDS_WL_ArabicGloss" data-list-type="glossary" xml:lang="ar">
            <qti-html-content><div><span>\u062D\u062F\u064A\u0642\u0629 \u062A\u0632\u0644\u062C</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_arabic.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_arabic.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_BurmeseGloss" data-list-type="glossary" xml:lang="my">
            <qti-html-content><div><span>\u1005\u1000\u102D\u1010\u103A\u1000\u103D\u1004\u103A\u1038\u1015\u1014\u103A\u1038\u1001\u103C\u1036</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_burmese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_burmese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_CantoneseGloss" data-list-type="glossary" xml:lang="yue">
            <qti-html-content><div><span>\u6ED1\u677F\u5834</span></div><div><span>\u6ED1\u677F\u573A</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_cantonese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_cantonese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_TagalGloss" data-list-type="glossary" xml:lang="tl">
            <qti-html-content><div><span>skate park</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_filipino_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_filipino_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>parke ti skate</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_filipino_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_filipino_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_HmongGloss" data-list-type="glossary" xml:lang="hmn">
            <qti-html-content><div><span>chaw caij skate</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_hmong.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_hmong.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_KoreanGloss" data-list-type="glossary" xml:lang="ko">
            <qti-html-content><div><span>\uC2A4\uCF00\uC774\uD2B8 \uBCF4\uB4DC\uC7A5</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_korean.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_korean.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_MandarinGloss" data-list-type="glossary" xml:lang="cmn">
            <qti-html-content><div><span>\u6ED1\u677F\u573A</span></div><div><span>\u6ED1\u677F\u5834</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_mandarin.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_mandarin.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_PunjabiGloss" data-list-type="glossary" xml:lang="pa">
            <qti-html-content><div><span>\u0627\u0633\u06A9\u06CC\u0679 \u067E\u0627\u0631\u06A9</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_punjabi_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_punjabi_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>\u0A38\u0A15\u0A47\u0A1F \u0A2A\u0A3E\u0A30\u0A15</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_punjabi_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_punjabi_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_RussianGloss" data-list-type="glossary" xml:lang="ru">
            <qti-html-content><div><span>\u0421\u043A\u0435\u0439\u0442-\u043F\u0430\u0440\u043A\u0430</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_russian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_russian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_SomaliGloss" data-list-type="glossary" xml:lang="so">
            <qti-html-content><div><span>barta darjiinka ee barafka lagu ordo</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_somali.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_somali.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_ESNGlossary" data-list-type="glossary" xml:lang="es">
            <qti-html-content><div><span>parque de patinaje</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_spanish.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_spanish.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_UkrainianGloss" data-list-type="glossary" xml:lang="uk">
            <qti-html-content><div><span>\u0421\u043A\u0435\u0439\u0442-\u043F\u0430\u0440\u043A\u0443</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_ukrainian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_ukrainian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_VietnameseGloss" data-list-type="glossary" xml:lang="vi">
            <qti-html-content><div><span>c\u00F4ng vi\u00EAn tr\u01B0\u1EE3t v\u00E1n</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_vietnamese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_vietnamese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
        </qti-card>
        <qti-card support="ext:sbac-glossary-illustration">
          <qti-card-entry data-list-code="TDS_ILG1" data-list-type="illustration">
            <qti-html-content><img alt="skate park" src="https://grud-amp-bucket-1.s3.amazonaws.com/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/item_51246_skatepark.svg"/></qti-html-content>
            </qti-card-entry></qti-card><qti-card support="glossary-on-screen">
            <qti-card-entry data-list-code="TDS_WL_Glossary" data-list-type="glossary" xml:lang="en">
            <qti-html-content><div><span>place specifically made for skateboarding</span></div></qti-html-content>
          </qti-card-entry></qti-card></qti-catalog><qti-catalog id="glossary-term-2"><qti-card support="keyword-translation">
          <qti-card-entry data-list-code="TDS_WL_ArabicGloss" data-list-type="glossary" xml:lang="ar">
            <qti-html-content><div><span>\u0644\u062A\u0639\u0637\u064A</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_arabic.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_arabic.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_BurmeseGloss" data-list-type="glossary" xml:lang="my">
            <qti-html-content><div><span>\u1015\u103C\u102F\u101C\u102F\u1015\u103A\u101E\u100A\u103A\u104A \u1015\u103C\u102F\u101C\u102F\u1015\u103A\u101B\u1014\u103A</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_burmese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_burmese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_CantoneseGloss" data-list-type="glossary" xml:lang="yue">
            <qti-html-content><div><span>\u569F\u63D0\u51FA</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_cantonese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_cantonese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_TagalGloss" data-list-type="glossary" xml:lang="tl">
            <qti-html-content><div><span>upang gawin</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_filipino_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_filipino_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>tapno agaramid</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_filipino_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_filipino_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_HmongGloss" data-list-type="glossary" xml:lang="hmn">
            <qti-html-content><div><span>kom ua</span></div><div><span>kom</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_hmong.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_hmong.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_KoreanGloss" data-list-type="glossary" xml:lang="ko">
            <qti-html-content><div><span>\uB9CC\uB4E4\uB2E4</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_korean.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_korean.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_MandarinGloss" data-list-type="glossary" xml:lang="cmn">
            <qti-html-content><div><span>\u63D0\u51FA</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_mandarin.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_mandarin.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_PunjabiGloss" data-list-type="glossary" xml:lang="pa">
            <qti-html-content><div><span>\u0628\u0646\u0627\u0646 \u0644\u0626\u06CC</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_punjabi_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_punjabi_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>\u0A2C\u0A23\u0A3E\u0A09\u0A23 \u0A32\u0A08</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_punjabi_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_punjabi_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_RussianGloss" data-list-type="glossary" xml:lang="ru">
            <qti-html-content><div><span>\u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_russian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_russian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_SomaliGloss" data-list-type="glossary" xml:lang="so">
            <qti-html-content><div><span>sameynta</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_somali.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_somali.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_ESNGlossary" data-list-type="glossary" xml:lang="es">
            <qti-html-content><div><span>para hacer</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_spanish.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_spanish.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_UkrainianGloss" data-list-type="glossary" xml:lang="uk">
            <qti-html-content><div><span>\u0449\u043E\u0431 \u043D\u0430\u0434\u0430\u0442\u0438</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_ukrainian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_ukrainian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_VietnameseGloss" data-list-type="glossary" xml:lang="vi">
            <qti-html-content><div><span>\u0111\u1EC3 \u0111\u01B0a ra</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_vietnamese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_to-make_2_vietnamese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
        </qti-card>
      </qti-catalog>
      <qti-catalog id="glossary-term-3">
        <qti-card support="keyword-translation">
          <qti-card-entry data-list-code="TDS_WL_ArabicGloss" data-list-type="glossary" xml:lang="ar">
            <qti-html-content><div><span>\u062A\u0648\u0635\u064A\u0629</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_arabic.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_arabic.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_BurmeseGloss" data-list-type="glossary" xml:lang="my">
            <qti-html-content><div><span>\u1011\u1031\u102C\u1000\u103A\u1001\u1036\u1001\u103B\u1000\u103A</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_burmese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_burmese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_CantoneseGloss" data-list-type="glossary" xml:lang="yue">
            <qti-html-content><div><span>\u5EFA\u8B70</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_cantonese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_cantonese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_TagalGloss" data-list-type="glossary" xml:lang="tl">
            <qti-html-content><div><span>rekomendasyon</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_filipino_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_filipino_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>rekomedasyon</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_filipino_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_filipino_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_HmongGloss" data-list-type="glossary" xml:lang="hmn">
            <qti-html-content><div><span>kev taw qhia rau</span></div><div><span>kev tawm qhaa tsua</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_hmong.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_hmong.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_KoreanGloss" data-list-type="glossary" xml:lang="ko">
            <qti-html-content><div><span>\uCD94\uCC9C  </span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_korean.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_korean.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_MandarinGloss" data-list-type="glossary" xml:lang="cmn">
            <qti-html-content><div><span>\u5EFA\u8BAE</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_mandarin.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_mandarin.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_PunjabiGloss" data-list-type="glossary" xml:lang="pa">
            <qti-html-content><div><span>\u0633\u0641\u0627\u0631\u0634</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_punjabi_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_punjabi_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>\u0A38\u0A3F\u0A2B\u0A3E\u0A30\u0A3F\u0A36</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_punjabi_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_punjabi_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_RussianGloss" data-list-type="glossary" xml:lang="ru">
            <qti-html-content><div><span>\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438  </span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_russian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_russian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_SomaliGloss" data-list-type="glossary" xml:lang="so">
            <qti-html-content><div><span>talo</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_somali.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_somali.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_ESNGlossary" data-list-type="glossary" xml:lang="es">
            <qti-html-content><div><span>recomendaci\u00F3n  </span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_spanish.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_spanish.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_UkrainianGloss" data-list-type="glossary" xml:lang="uk">
            <qti-html-content><div><span>\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0456\u044E  </span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_ukrainian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_ukrainian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_VietnameseGloss" data-list-type="glossary" xml:lang="vi">
            <qti-html-content><div><span>g\u1EE3i \u00FD</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_vietnamese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_recommendation_3_vietnamese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
        </qti-card>
        <qti-card support="glossary-on-screen">
          <qti-card-entry data-list-code="TDS_WL_Glossary" data-list-type="glossary" xml:lang="en">
            <qti-html-content><div><span>suggestions</span></div></qti-html-content>
          </qti-card-entry>
        </qti-card>
      </qti-catalog>
      <qti-catalog id="glossary-term-4">
        <qti-card support="keyword-translation">
          <qti-card-entry data-list-code="TDS_WL_ArabicGloss" data-list-type="glossary" xml:lang="ar">
            <qti-html-content><div><span>\u0627\u0633\u062A\u062E\u062F\u0645</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_arabic.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_arabic.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_BurmeseGloss" data-list-type="glossary" xml:lang="my">
            <qti-html-content><div><span>\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1015\u102B</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_burmese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_burmese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_CantoneseGloss" data-list-type="glossary" xml:lang="yue">
            <qti-html-content><div><span>\u4F7F\u7528</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_cantonese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_cantonese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_TagalGloss" data-list-type="glossary" xml:lang="tl">
            <qti-html-content><div><span>Gamitin</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_filipino_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_filipino_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>Usaren</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_filipino_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_filipino_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_HmongGloss" data-list-type="glossary" xml:lang="hmn">
            <qti-html-content><div><span>Siv</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_hmong.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_hmong.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_KoreanGloss" data-list-type="glossary" xml:lang="ko">
            <qti-html-content><div><span>\uC0AC\uC6A9\uD558\uB2E4</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_korean.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_korean.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_MandarinGloss" data-list-type="glossary" xml:lang="cmn">
            <qti-html-content><div><span>\u4F7F\u7528</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_mandarin.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_mandarin.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_PunjabiGloss" data-list-type="glossary" xml:lang="pa">
            <qti-html-content><div><span>\u0648\u0631\u062A\u0648</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_punjabi_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_punjabi_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>\u0A35\u0A30\u0A24\u0A4B</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_punjabi_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_punjabi_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_RussianGloss" data-list-type="glossary" xml:lang="ru">
            <qti-html-content><div><span>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_russian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_russian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_SomaliGloss" data-list-type="glossary" xml:lang="so">
            <qti-html-content><div><span>Isticmaal</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_somali.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_somali.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_ESNGlossary" data-list-type="glossary" xml:lang="es">
            <qti-html-content><div><span>Usa</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_spanish.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_spanish.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_UkrainianGloss" data-list-type="glossary" xml:lang="uk">
            <qti-html-content><div><span>\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0439\u0442\u0435</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_ukrainian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_ukrainian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_VietnameseGloss" data-list-type="glossary" xml:lang="vi">
            <qti-html-content><div><span>S\u1EED d\u1EE5ng</span></div><div><span>D\u00F9ng</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_vietnamese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_use_4_vietnamese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry></qti-card></qti-catalog><qti-catalog id="glossary-term-5"><qti-card support="keyword-translation">
          <qti-card-entry data-list-code="TDS_WL_ArabicGloss" data-list-type="glossary" xml:lang="ar">
            <qti-html-content><div><span>\u0627\u062E\u062A\u0631\u062A</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_arabic.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_arabic.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_BurmeseGloss" data-list-type="glossary" xml:lang="my">
            <qti-html-content><div><span>\u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1001\u103C\u1004\u103A\u1038</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_burmese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_burmese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_CantoneseGloss" data-list-type="glossary" xml:lang="yue">
            <qti-html-content><div><span>\u9078\u64C7</span></div><div><span>\u9009\u62E9</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_cantonese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_cantonese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_TagalGloss" data-list-type="glossary" xml:lang="tl">
            <qti-html-content><div><span>Pinili</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_filipino_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_filipino_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>nagpili  </span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_filipino_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_filipino_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_HmongGloss" data-list-type="glossary" xml:lang="hmn">
            <qti-html-content><div><span>raug xaiv</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_hmong.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_hmong.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_KoreanGloss" data-list-type="glossary" xml:lang="ko">
            <qti-html-content><div><span>\uACE0\uB974\uB2E4</span></div><div><span>\uC120\uD0DD\uD558\uB2E4</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_korean.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_korean.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_MandarinGloss" data-list-type="glossary" xml:lang="cmn">
            <qti-html-content><div><span>\u9009\u62E9\u7684</span></div><div><span>\u9078\u64C7\u7684</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_mandarin.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_mandarin.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_PunjabiGloss" data-list-type="glossary" xml:lang="pa">
            <qti-html-content><div><span>\u0686\u064F\u0646\u0648</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_punjabi_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_punjabi_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>\u0A1A\u0A4B\u0A23 \u0A15\u0A30\u0A4B</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_punjabi_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_punjabi_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_RussianGloss" data-list-type="glossary" xml:lang="ru">
            <qti-html-content><div><span>\u0412\u044B\u0431\u0440\u0430\u043B\u0438</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_russian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_russian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_SomaliGloss" data-list-type="glossary" xml:lang="so">
            <qti-html-content><div><span>doortay</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_somali.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_somali.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_ESNGlossary" data-list-type="glossary" xml:lang="es">
            <qti-html-content><div><span>escogiste</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_spanish.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_spanish.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_UkrainianGloss" data-list-type="glossary" xml:lang="uk">
            <qti-html-content><div><span>\u0412\u0438\u0431\u0440\u0430\u043D\u0438\u0439</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_ukrainian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_ukrainian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_VietnameseGloss" data-list-type="glossary" xml:lang="vi">
            <qti-html-content><div><span>ch\u1ECDn</span></div><div><span>\u0111\u00E3 ch\u1ECDn</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_vietnamese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_chosen_5_vietnamese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
        </qti-card>
      </qti-catalog>
      <qti-catalog id="glossary-term-6">
        <qti-card support="keyword-translation">
          <qti-card-entry data-list-code="TDS_WL_ArabicGloss" data-list-type="glossary" xml:lang="ar">
            <qti-html-content><div><span>\u0627\u0644\u0631\u062C\u0648\u0639</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_arabic.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_arabic.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_BurmeseGloss" data-list-type="glossary" xml:lang="my">
            <qti-html-content><div><span>\u1011\u1031\u102C\u1000\u103A\u1001\u1036\u1001\u103B\u1000\u103A</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_burmese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_burmese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_CantoneseGloss" data-list-type="glossary" xml:lang="yue">
            <qti-html-content><div><span>\u53C3\u8003</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_cantonese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_cantonese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_TagalGloss" data-list-type="glossary" xml:lang="tl">
            <qti-html-content><div><span>Sumangguni</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_filipino_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_filipino_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>Agrepera</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_filipino_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_filipino_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_HmongGloss" data-list-type="glossary" xml:lang="hmn">
            <qti-html-content><div><span>Xa rau lwm tus neeg los yog lwm qhov chaw</span></div><div><span>Xaav tsua lwm tug neeg los yog lwm qhov chaw</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_hmong.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_hmong.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_KoreanGloss" data-list-type="glossary" xml:lang="ko">
            <qti-html-content><div><span>\uCC38\uC870\uD558\uB2E4</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_korean.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_korean.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_MandarinGloss" data-list-type="glossary" xml:lang="cmn">
            <qti-html-content><div><span>\u53C2\u8003</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_mandarin.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_mandarin.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_PunjabiGloss" data-list-type="glossary" xml:lang="pa">
            <qti-html-content><div><span>\u062D\u0648\u0627\u0644\u06C1 \u062F\u06CC\u0646\u0627</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_punjabi_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_punjabi_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>\u0A26\u0A47\u0A16\u0A4B</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_punjabi_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_punjabi_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_RussianGloss" data-list-type="glossary" xml:lang="ru">
            <qti-html-content><div><span>\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_russian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_russian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_SomaliGloss" data-list-type="glossary" xml:lang="so">
            <qti-html-content><div><span>Tixraac</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_somali.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_somali.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_ESNGlossary" data-list-type="glossary" xml:lang="es">
            <qti-html-content><div><span>Refi\u00E9rete</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_spanish.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_spanish.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_UkrainianGloss" data-list-type="glossary" xml:lang="uk">
            <qti-html-content><div><span>\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u044C\u0442\u0435</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_ukrainian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_ukrainian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_VietnameseGloss" data-list-type="glossary" xml:lang="vi">
            <qti-html-content><div><span>Tham kh\u1EA3o</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_vietnamese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_refer_6_vietnamese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
        </qti-card>
      </qti-catalog>
      <qti-catalog id="glossary-term-7">
        <qti-card support="keyword-translation">
          <qti-card-entry data-list-code="TDS_WL_ArabicGloss" data-list-type="glossary" xml:lang="ar">
            <qti-html-content><div><span>\u0633\u0644\u0627\u0644\u0645</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_arabic.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_arabic.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_BurmeseGloss" data-list-type="glossary" xml:lang="my">
            <qti-html-content><div><span>\u1006\u1004\u103A\u1001\u103C\u1031\u101C\u103B\u103E\u1031\u102C\u101C\u1019\u103A\u1038\u1019\u103B\u102C\u1038</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_burmese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_burmese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_CantoneseGloss" data-list-type="glossary" xml:lang="yue">
            <qti-html-content><div><span>\u659C\u5761</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_cantonese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_cantonese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_TagalGloss" data-list-type="glossary" xml:lang="tl">
            <qti-html-content><div><span>mga ramp</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_filipino_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_filipino_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>dagiti rampa</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_filipino_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_filipino_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_HmongGloss" data-list-type="glossary" xml:lang="hmn">
            <qti-html-content><div><span>cov toj ntxhab</span></div><div><span>cov toj ntxhaab</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_hmong.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_hmong.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_KoreanGloss" data-list-type="glossary" xml:lang="ko">
            <qti-html-content><div><span>\uACBD\uC0AC\uB85C</span></div><div><span>\uB7A8\uD504</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_korean.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_korean.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_MandarinGloss" data-list-type="glossary" xml:lang="cmn">
            <qti-html-content><div><span>\u5761\u9053</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_mandarin.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_mandarin.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_PunjabiGloss" data-list-type="glossary" xml:lang="pa">
            <qti-html-content><div><span>\u062A\u062E\u062A\u06D2</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_punjabi_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_punjabi_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>\u0A30\u0A48\u0A02\u0A2A</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_punjabi_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_punjabi_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_RussianGloss" data-list-type="glossary" xml:lang="ru">
            <qti-html-content><div><span>\u0440\u0430\u043C\u043F  </span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_russian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_russian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_SomaliGloss" data-list-type="glossary" xml:lang="so">
            <qti-html-content><div><span>sagxado taag ah</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_somali.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_somali.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_ESNGlossary" data-list-type="glossary" xml:lang="es">
            <qti-html-content><div><span>Rampas</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_spanish.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_spanish.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_UkrainianGloss" data-list-type="glossary" xml:lang="uk">
            <qti-html-content><div><span>\u0420\u0430\u043C\u043F</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_ukrainian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_ukrainian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_VietnameseGloss" data-list-type="glossary" xml:lang="vi">
            <qti-html-content>
              <div>
                <span>d\u1ED1c</span></div><div><span>con d\u1ED1c</span>
                <audio controls="true">
                <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_vietnamese.ogg" type="audio/ogg"/>
                <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_ramps_7_vietnamese.m4a" type="audio/mp4"/>
                </audio>
              </div>
            </qti-html-content>
          </qti-card-entry>
        </qti-card>
        <qti-card support="ext:sbac-glossary-illustration">
          <qti-card-entry data-list-code="TDS_ILG1" data-list-type="illustration">
            <qti-html-content>
              <img alt="ramps" src="https://grud-amp-bucket-1.s3.amazonaws.com/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/item_51246_ramps.svg"/>
            </qti-html-content>
          </qti-card-entry>
        </qti-card>
        <qti-card support="glossary-on-screen">
          <qti-card-entry data-list-code="TDS_WL_Glossary" data-list-type="glossary" xml:lang="en">
            <qti-html-content>
              <div><span>equipment with a slope</span></div>
            </qti-html-content>
          </qti-card-entry>
        </qti-card>
      </qti-catalog>
      <qti-catalog id="glossary-term-8">
        <qti-card support="keyword-translation">
          <qti-card-entry data-list-code="TDS_WL_ArabicGloss" data-list-type="glossary" xml:lang="ar">
            <qti-html-content>
              <div>
                <span>\u064A\u0633\u0644\u062A\u0632\u0645 | \u064A\u0633\u062A\u0648\u062C\u0628</span>
                <audio controls="true">
                <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_arabic.ogg" type="audio/ogg"/>
                <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_arabic.m4a" type="audio/mp4"/>
                </audio>
              </div>
            </qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_BurmeseGloss" data-list-type="glossary" xml:lang="my">
            <qti-html-content>
              <div>
                <span>\u101C\u102D\u102F\u1021\u1015\u103A\u101E\u100A\u103A\u104A \u101C\u102D\u102F\u101E\u100A\u103A</span>
                <audio controls="true">
                <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_burmese.ogg" type="audio/ogg"/>
                <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_burmese.m4a" type="audio/mp4"/>
                </audio>
              </div>
            </qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_CantoneseGloss" data-list-type="glossary" xml:lang="yue">
            <qti-html-content>
              <div>
                <span>\u8981\u6C42</span>
                <audio controls="true">
                <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_cantonese.ogg" type="audio/ogg"/>
                <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_cantonese.m4a" type="audio/mp4"/>
                </audio>
              </div>
            </qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_TagalGloss" data-list-type="glossary" xml:lang="tl">
            <qti-html-content><div><span>nangangailangan</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_filipino_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_filipino_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>masapul</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_filipino_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_filipino_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_HmongGloss" data-list-type="glossary" xml:lang="hmn">
            <qti-html-content><div><span>yuav tsum tau</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_hmong.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_hmong.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_KoreanGloss" data-list-type="glossary" xml:lang="ko">
            <qti-html-content><div><span>\uC694\uAD6C\uD558\uB2E4</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_korean.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_korean.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_MandarinGloss" data-list-type="glossary" xml:lang="cmn">
            <qti-html-content><div><span>\u8981\u6C42</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_mandarin.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_mandarin.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_PunjabiGloss" data-list-type="glossary" xml:lang="pa">
            <qti-html-content><div><span>\u0644\u0648\u0691 \u0627\u06CC\u06C1</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_punjabi_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_punjabi_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>\u0A26\u0A47 \u0A2E\u0A41\u0A24\u0A3E\u0A2C\u0A3F\u0A15</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_punjabi_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_punjabi_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_RussianGloss" data-list-type="glossary" xml:lang="ru">
            <qti-html-content><div><span>\u0442\u0440\u0435\u0431\u0443\u0435\u0442</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_russian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_russian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_SomaliGloss" data-list-type="glossary" xml:lang="so">
            <qti-html-content><div><span>u baahan</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_somali.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_somali.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_ESNGlossary" data-list-type="glossary" xml:lang="es">
            <qti-html-content><div><span>requiere</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_spanish.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_spanish.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_UkrainianGloss" data-list-type="glossary" xml:lang="uk">
            <qti-html-content><div><span>\u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0454 , \u0437\u0430\u0442\u0440\u0435\u0431\u0443\u0432\u0430\u0432</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_ukrainian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_ukrainian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_VietnameseGloss" data-list-type="glossary" xml:lang="vi">
            <qti-html-content><div><span>y\u00EAu c\u1EA7u</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_vietnamese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_requires_8_vietnamese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
        </qti-card>
      </qti-catalog>
      <qti-catalog id="glossary-term-9">
        <qti-card support="keyword-translation">
          <qti-card-entry data-list-code="TDS_WL_ArabicGloss" data-list-type="glossary" xml:lang="ar">
            <qti-html-content><div><span>\u062C\u0645\u064A\u0639</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_arabic.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_arabic.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_BurmeseGloss" data-list-type="glossary" xml:lang="my">
            <qti-html-content><div><span>\u1021\u102C\u1038\u101C\u102F\u1036\u1038</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_burmese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_burmese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_CantoneseGloss" data-list-type="glossary" xml:lang="yue">
            <qti-html-content><div><span>\u5168\u90E8\u5605</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_cantonese.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_cantonese.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_TagalGloss" data-list-type="glossary" xml:lang="tl">
            <qti-html-content><div><span>Ang lahat</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_filipino_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_filipino_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>Amin</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_filipino_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_filipino_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_HmongGloss" data-list-type="glossary" xml:lang="hmn">
            <qti-html-content><div><span>tag nrho</span></div><div><span>taag nrho</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_hmong.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_hmong.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_KoreanGloss" data-list-type="glossary" xml:lang="ko">
            <qti-html-content><div><span>\uBAA8\uB4E0</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_korean.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_korean.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_MandarinGloss" data-list-type="glossary" xml:lang="cmn">
            <qti-html-content><div><span>\u6240\u6709</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_mandarin.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_mandarin.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_PunjabiGloss" data-list-type="glossary" xml:lang="pa">
            <qti-html-content><div><span>\u0633\u0627\u0631\u06D2</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_punjabi_a.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_punjabi_a.m4a" type="audio/mp4"/>
            </audio></div><div><span>\u0A38\u0A3E\u0A30\u0A47</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_punjabi_b.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_punjabi_b.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_RussianGloss" data-list-type="glossary" xml:lang="ru">
            <qti-html-content><div><span>\u0412\u0441\u0435</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_russian.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_russian.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_SomaliGloss" data-list-type="glossary" xml:lang="so">
            <qti-html-content><div><span>dhammaan</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_somali.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_somali.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_ESNGlossary" data-list-type="glossary" xml:lang="es">
            <qti-html-content><div><span>Todas</span>
            <audio controls="true">
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_spanish.ogg" type="audio/ogg"/>
            <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_spanish.m4a" type="audio/mp4"/>
            </audio></div></qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_UkrainianGloss" data-list-type="glossary" xml:lang="uk">
            <qti-html-content>
              <div>
                <span>\u0423\u0441\u0456</span>
                <audio controls="true">
                  <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_ukrainian.ogg" type="audio/ogg"/>
                  <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_ukrainian.m4a" type="audio/mp4"/>
                </audio>
              </div>
              </qti-html-content>
          </qti-card-entry>
          <qti-card-entry data-list-code="TDS_WL_VietnameseGloss" data-list-type="glossary" xml:lang="vi">
            <qti-html-content>
              <div>
                <span>T\u1EA5t c\u1EA3</span>
                <audio controls="true">
                  <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_vietnamese.ogg" type="audio/ogg"/>
                  <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_all_9_vietnamese.m4a" type="audio/mp4"/>
                </audio>
              </div>
            </qti-html-content>
          </qti-card-entry>
        </qti-card>
      </qti-catalog>
      <qti-catalog id="glossary-term-17">
        <qti-card support="ext:sbac-glossary-illustration">
          <qti-card-entry data-list-code="TDS_ILG1" data-list-type="illustration">
            <qti-html-content><img alt="built" src="https://grud-amp-bucket-1.s3.amazonaws.com/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/item_51246_built.svg"/></qti-html-content>
          </qti-card-entry>
        </qti-card>
      </qti-catalog>
      <qti-catalog id="glossary-term-18">
        <qti-card support="ext:sbac-glossary-illustration">
          <qti-card-entry data-list-code="TDS_ILG1" data-list-type="illustration">
            <qti-html-content><img alt="person" src="https://grud-amp-bucket-1.s3.amazonaws.com/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/item_51246_person.svg"/></qti-html-content>
          </qti-card-entry>
        </qti-card>
      </qti-catalog>
      <qti-catalog id="glossary-term-19">
        <qti-card support="ext:sbac-glossary-illustration">
          <qti-card-entry data-list-code="TDS_ILG1" data-list-type="illustration">
            <qti-html-content><img alt="empty floor space" src="https://grud-amp-bucket-1.s3.amazonaws.com/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/item_51246_emptyfloorspace.svg"/></qti-html-content>
          </qti-card-entry>
        </qti-card>
      </qti-catalog>
      <qti-catalog id="glossary-term-20">
        <qti-card support="ext:sbac-glossary-illustration">
          <qti-card-entry data-list-code="TDS_ILG1" data-list-type="illustration">
            <qti-html-content><img alt="people" src="https://grud-amp-bucket-1.s3.amazonaws.com/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/item_51246_people.svg"/></qti-html-content>
          </qti-card-entry>
        </qti-card>
      </qti-catalog>
    </qti-catalog-info>
    </qti-assessment-item>`,
  },
  {
    "identifier": "q15-order-example-4",
    "guid": "0000-0014-0005",
    "submissionMode": "individual",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><qti-assessment-item xmlns=\"http://www.imsglobal.org/xsd/imsqtiasi_v3p0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\" http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd \" identifier=\"q15-order-example-4\" title=\"Grand Prix of Bahrain (horizontal)\" adaptive=\"false\" time-dependent=\"false\"><qti-response-declaration identifier=\"RESPONSE\" cardinality=\"ordered\" base-type=\"identifier\"><qti-correct-response><qti-value>A</qti-value><qti-value>B</qti-value><qti-value>C</qti-value><qti-value>D</qti-value><qti-value>E</qti-value><qti-value>F</qti-value><qti-value>G</qti-value><qti-value>H</qti-value><qti-value>I</qti-value></qti-correct-response></qti-response-declaration><qti-response-declaration base-type=\"boolean\" cardinality=\"single\" identifier=\"EndAttempt\"/><qti-outcome-declaration identifier=\"SCORE\" cardinality=\"single\" base-type=\"float\"/><qti-outcome-declaration base-type=\"identifier\" cardinality=\"single\" identifier=\"FEEDBACK\"/><qti-item-body><div class=\"qti-layout-row\"><div class=\"qti-layout-col8\"><div class=\"qti3-player-item-card-bordered-rounded qti3-player-item-card-raised-rounded\"><div class=\"qti3-player-item-card-body qti-padding-2\"><qti-order-interaction response-identifier=\"RESPONSE\" shuffle=\"true\" orientation=\"horizontal\"><qti-prompt>Arrange the words in the proper order to complete the famous sentence that utilizes all letters in the English alphabet.</qti-prompt><qti-simple-choice identifier=\"A\">the</qti-simple-choice><qti-simple-choice identifier=\"B\">quick</qti-simple-choice><qti-simple-choice identifier=\"C\">brown</qti-simple-choice><qti-simple-choice identifier=\"D\">fox</qti-simple-choice><qti-simple-choice identifier=\"E\">jumps</qti-simple-choice><qti-simple-choice identifier=\"F\">over</qti-simple-choice><qti-simple-choice identifier=\"G\">the</qti-simple-choice><qti-simple-choice identifier=\"H\">lazy</qti-simple-choice><qti-simple-choice identifier=\"I\">dog</qti-simple-choice></qti-order-interaction></div><!-- /card-body --><div class=\"qti3-player-item-card-footer qti-height-14 qti-padding-2\"><qti-end-attempt-interaction title=\"Check Answer\" class=\"endattempt-controller-bar\" response-identifier=\"EndAttempt\" data-steps=\"1\" data-hideprogress=\"true\" data-hastemplates=\"true\"/></div><!-- /card-footer --></div><!-- /card --></div><div class=\"qti-layout-col4\"><div class=\"qti-well qti-margin-b-0\"><strong>About This Item</strong><p><small>This is a demonstration of an Order Interaction where the orderable choices can be dragged via mouse or touch to place the words of a famous sentence in their proper order.</small></p><p><small>In this Order Interaction, the words are shuffled and then displayed in a horizontal orientation.</small></p><p><small>Upon clicking the <strong>Check Answer</strong> button, QTI 3 Player runs response processing, evaluates the response, and produces Modal Feedback.</small></p><p class=\"qti-margin-b-0\"><small>Click <strong>New Question</strong> to create a new attempt where the words of the sentence are re-shuffled.</small></p></div></div></div><!-- /row --></qti-item-body><qti-response-processing><qti-response-condition><qti-response-if><qti-or><qti-match><qti-variable identifier=\"RESPONSE\"/><qti-correct identifier=\"RESPONSE\"/></qti-match><qti-match><qti-variable identifier=\"RESPONSE\"/><qti-ordered><qti-base-value base-type=\"identifier\">G</qti-base-value><qti-base-value base-type=\"identifier\">B</qti-base-value><qti-base-value base-type=\"identifier\">C</qti-base-value><qti-base-value base-type=\"identifier\">D</qti-base-value><qti-base-value base-type=\"identifier\">E</qti-base-value><qti-base-value base-type=\"identifier\">F</qti-base-value><qti-base-value base-type=\"identifier\">A</qti-base-value><qti-base-value base-type=\"identifier\">H</qti-base-value><qti-base-value base-type=\"identifier\">I</qti-base-value>    </qti-ordered></qti-match></qti-or><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">1</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-base-value base-type=\"identifier\">correct</qti-base-value></qti-set-outcome-value></qti-response-if><qti-response-else><qti-set-outcome-value identifier=\"SCORE\"><qti-base-value base-type=\"float\">0</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier=\"FEEDBACK\"><qti-base-value base-type=\"identifier\">incorrect</qti-base-value></qti-set-outcome-value></qti-response-else></qti-response-condition></qti-response-processing><!-- Note how the identifiers in the following modalFeedback elements match those of the setOutcomeValue elements above --><qti-modal-feedback outcome-identifier=\"FEEDBACK\" show-hide=\"show\" identifier=\"correct\"><qti-content-body><p>Well done! Correct.</p></qti-content-body></qti-modal-feedback><qti-modal-feedback outcome-identifier=\"FEEDBACK\" show-hide=\"show\" identifier=\"incorrect\"><qti-content-body><p>Sorry. Incorrect.</p></qti-content-body></qti-modal-feedback></qti-assessment-item>"
  },
  {
    "identifier": "q15-order-example-1",
    "guid": "0000-0014-0000",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="q15-order-example-1" title="Grand Prix of Bahrain" adaptive="false" time-dependent="false">
      <qti-response-declaration identifier="RESPONSE" cardinality="ordered" base-type="identifier">
        <qti-correct-response>
          <qti-value>DriverC</qti-value>
          <qti-value>DriverA</qti-value>
          <qti-value>DriverB</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
      <qti-item-body>
        <qti-order-interaction response-identifier="RESPONSE">
          <qti-prompt>The following F1 drivers finished on the podium in the first ever Grand Prix of Bahrain. Can you rearrange them into the correct finishing order from left to right, 1st, 2nd, and 3rd?</qti-prompt>
          <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
          <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
          <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
        </qti-order-interaction>
        <p>
          Note: This conformance example has no QTI 3 shared presentation vocabulary.  Consequently, QTI 3 Player renders the <em>Order Interaction</em> above with QTI 3 Player defaults; i.e., as a series of choices with horizontal orientation.
        </p>
      </qti-item-body>
      <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "q15-order-example-2",
    "guid": "0000-0014-0001",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="q15-order-example-2" title="Grand Prix of Bahrain (horizontal)" adaptive="false" time-dependent="false">
      <qti-response-declaration identifier="RESPONSE" cardinality="ordered" base-type="identifier">
        <qti-correct-response>
          <qti-value>DriverC</qti-value>
          <qti-value>DriverA</qti-value>
          <qti-value>DriverB</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
      <qti-item-body>
        <qti-order-interaction response-identifier="RESPONSE" orientation="horizontal">
          <qti-prompt>The following F1 drivers finished on the podium in the first ever Grand Prix of Bahrain. Can you rearrange them into the correct finishing order from left to right, 1st, 2nd, and 3rd?</qti-prompt>
          <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
          <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
          <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
        </qti-order-interaction>
        <p>Note: The <em>orientation</em> of the layout of the drivers should be horizontal.</p>
      </qti-item-body>
      <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "q15-order-example-3",
    "guid": "0000-0014-0002",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="q15-order-example-3" title="Grand Prix of Bahrain (vertical)" adaptive="false" time-dependent="false">
      <qti-response-declaration identifier="RESPONSE" cardinality="ordered" base-type="identifier">
        <qti-correct-response>
          <qti-value>DriverC</qti-value>
          <qti-value>DriverA</qti-value>
          <qti-value>DriverB</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
      <qti-item-body>
        <qti-order-interaction response-identifier="RESPONSE" orientation="vertical">
          <qti-prompt>The following F1 drivers finished on the podium in the first ever Grand Prix of Bahrain. Can you rearrange them into the correct finishing order - from top to bottom - 1st, 2nd, and 3rd? </qti-prompt>
          <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
          <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
          <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
        </qti-order-interaction>
        <p>Note: The <em>orientation</em> of the layout of the drivers should be vertical.</p>
      </qti-item-body>
      <qti-response-processing template="http://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "q15-order-interaction-sv-1",
    "guid": "0000-0014-0003",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="q15-order-interaction-sv-1" title="Order Interaction - (SV 1) - target label/suffix options" adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE1" cardinality="ordered" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE2" cardinality="ordered" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE3" cardinality="ordered" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE4" cardinality="ordered" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE5" cardinality="ordered" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE6" cardinality="ordered" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE7" cardinality="ordered" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE8" cardinality="ordered" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE9" cardinality="ordered" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE10" cardinality="ordered" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE11" cardinality="ordered" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE12" cardinality="ordered" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE13" cardinality="ordered" base-type="identifier"/>
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
    <qti-item-body>
      <p>Delivery systems may implement Order Interaction's in a manner where the choices are grouped together separately from a target area where the choices are ordered. When they do so, the shared vocabulary is intended to provide a way for the delivery system to generate a label on each of the order targets.</p>
      <p>The following F1 drivers finished on the podium in the first ever Grand Prix of Bahrain. Can you rearrange them into the correct finishing order?</p>
      <p>Demonstrates <em>qti-choices-top</em> and <em>qti-labels-none</em>.</p>
      <qti-order-interaction class="qti-choices-top qti-labels-none" response-identifier="RESPONSE1">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-top</em> and <em>qti-labels-decimal</em>.</p>
      <qti-order-interaction class="qti-choices-top qti-labels-decimal" response-identifier="RESPONSE2">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-top</em> and <em>qti-labels-lower-alpha</em>.</p>
      <qti-order-interaction class="qti-choices-top qti-labels-lower-alpha" response-identifier="RESPONSE3">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-top</em> and <em>qti-labels-upper-alpha</em>.</p>
      <qti-order-interaction class="qti-choices-top qti-labels-upper-alpha" response-identifier="RESPONSE4">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <hr />
      <p>Demonstrates <em>qti-choices-top</em> and <em>qti-labels-decimal</em> and <em>qti-labels-suffix-none</em>.</p>
      <qti-order-interaction class="qti-choices-top qti-labels-decimal qti-labels-suffix-none" response-identifier="RESPONSE5">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-top</em> and <em>qti-labels-decimal</em> and <em>qti-labels-suffix-period</em>.</p>
      <qti-order-interaction class="qti-choices-top qti-labels-decimal qti-labels-suffix-period" response-identifier="RESPONSE6">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-top</em> and <em>qti-labels-decimal</em> and <em>qti-labels-suffix-parenthesis</em>.</p>
      <qti-order-interaction class="qti-choices-top qti-labels-decimal qti-labels-suffix-parenthesis" response-identifier="RESPONSE7">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <hr />
      <p>Demonstrates <em>qti-choices-top</em> and <em>qti-labels-lower-alpha</em> and <em>qti-labels-suffix-none</em>.</p>
      <qti-order-interaction class="qti-choices-top qti-labels-lower-alpha qti-labels-suffix-none" response-identifier="RESPONSE8">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-top</em> and <em>qti-labels-lower-alpha</em> and <em>qti-labels-suffix-period</em>.</p>
      <qti-order-interaction class="qti-choices-top qti-labels-lower-alpha qti-labels-suffix-period" response-identifier="RESPONSE9">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-top</em> and <em>qti-labels-lower-alpha</em> and <em>qti-labels-suffix-parenthesis</em>.</p>
      <qti-order-interaction class="qti-choices-top qti-labels-lower-alpha qti-labels-suffix-parenthesis" response-identifier="RESPONSE10">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <hr />
      <p>Demonstrates <em>qti-choices-top</em> and <em>qti-labels-upper-alpha</em> and <em>qti-labels-suffix-none</em>.</p>
      <qti-order-interaction class="qti-choices-top qti-labels-upper-alpha qti-labels-suffix-none" response-identifier="RESPONSE11">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-top</em> and <em>qti-labels-upper-alpha</em> and <em>qti-labels-suffix-period</em>.</p>
      <qti-order-interaction class="qti-choices-top qti-labels-upper-alpha qti-labels-suffix-period" response-identifier="RESPONSE12">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-top</em> and <em>qti-labels-upper-alpha</em> and <em>qti-labels-suffix-parenthesis</em>.</p>
      <qti-order-interaction class="qti-choices-top qti-labels-upper-alpha qti-labels-suffix-parenthesis" response-identifier="RESPONSE13">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
    </qti-item-body>
  </qti-assessment-item>`
  },
  {
    "identifier": "q15-order-interaction-sv-2",
    "guid": "0000-0014-0004",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="q15-order-interaction-sv-2" title="Order Interaction - (SV 2) - orderable-target orientation options" adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE1" cardinality="ordered" base-type="identifier" />
    <qti-response-declaration identifier="RESPONSE2" cardinality="ordered" base-type="identifier" />
    <qti-response-declaration identifier="RESPONSE3" cardinality="ordered" base-type="identifier" />
    <qti-response-declaration identifier="RESPONSE4" cardinality="ordered" base-type="identifier" />
    <qti-response-declaration identifier="RESPONSE5" cardinality="ordered" base-type="identifier" />
    <qti-response-declaration identifier="RESPONSE6" cardinality="ordered" base-type="identifier" />
    <qti-response-declaration identifier="RESPONSE7" cardinality="ordered" base-type="identifier" />
    <qti-response-declaration identifier="RESPONSE8" cardinality="ordered" base-type="identifier" />
    <qti-response-declaration identifier="RESPONSE9" cardinality="ordered" base-type="identifier" />
    <qti-response-declaration identifier="RESPONSE10" cardinality="ordered" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE11" cardinality="ordered" base-type="identifier"/>
    <qti-response-declaration identifier="RESPONSE12" cardinality="ordered" base-type="identifier"/>
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
    <qti-item-body>
      <p>Delivery systems may implement Order Interaction's in a manner where the choices are grouped together separately from a target area where the choices are ordered.  When they do so, the shared vocabulary is intended to provide clarity regarding the visual positioning of the orderable choices w/respect to the target area.</p>
      <p>The following F1 drivers finished on the podium in the first ever Grand Prix of  Bahrain. Can you rearrange them into the correct finishing order?</p><hr /><p>Demonstrates <em>qti-choices-top</em>.</p>
      <qti-order-interaction class="qti-choices-top" response-identifier="RESPONSE1">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-bottom</em>.</p>
      <qti-order-interaction class="qti-choices-bottom" response-identifier="RESPONSE2">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-left</em>.</p>
      <qti-order-interaction class="qti-choices-left" response-identifier="RESPONSE3">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-right</em>.</p>
      <qti-order-interaction class="qti-choices-right" response-identifier="RESPONSE4">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <hr />
      <p>Demonstrates <em>qti-choices-top</em> and <em>orientation horizontal</em>.</p>
      <qti-order-interaction class="qti-choices-top" orientation="horizontal" response-identifier="RESPONSE5">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-bottom</em> and <em>orientation horizontal</em>.</p>
      <qti-order-interaction class="qti-choices-bottom" orientation="horizontal" response-identifier="RESPONSE6">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-left</em> and <em>orientation horizontal</em>.</p>
      <qti-order-interaction class="qti-choices-left" orientation="horizontal" response-identifier="RESPONSE7">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-right</em> and <em>orientation horizontal</em>.</p>
      <qti-order-interaction class="qti-choices-right" orientation="horizontal" response-identifier="RESPONSE8">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <hr />
      <p>Demonstrates <em>qti-choices-top</em> and <em>orientation vertical</em>.</p>
      <qti-order-interaction class="qti-choices-top" orientation="vertical" response-identifier="RESPONSE9">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-bottom</em> and <em>orientation vertical</em>.</p>
      <qti-order-interaction class="qti-choices-bottom" orientation="vertical" response-identifier="RESPONSE10">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-left</em> and <em>orientation vertical</em>.</p>
      <qti-order-interaction class="qti-choices-left" orientation="vertical" response-identifier="RESPONSE11">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
      <p>Demonstrates <em>qti-choices-right</em> and <em>orientation vertical</em>.</p>
      <qti-order-interaction class="qti-choices-right" orientation="vertical" response-identifier="RESPONSE12">
        <qti-simple-choice identifier="DriverA">Rubens Barrichello</qti-simple-choice>
        <qti-simple-choice identifier="DriverB">Jenson Button</qti-simple-choice>
        <qti-simple-choice identifier="DriverC">Michael Schumacher</qti-simple-choice>
      </qti-order-interaction>
    </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "Ch5_Modeling_6_r3.0",
    "guid": "0000-0015-0001",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?><qti-assessment-item
xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
identifier="Ch5_Modeling_6_r3.0" title="Ch5_Modeling_6_r3.0"
adaptive="false" time-dependent="false">
<qti-response-declaration identifier="RESPONSE_1" cardinality="single" base-type="identifier">
  <qti-correct-response>
    <qti-value>4</qti-value>
  </qti-correct-response>
</qti-response-declaration>
<qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
  <qti-default-value>
    <qti-value>0</qti-value>
  </qti-default-value>
</qti-outcome-declaration>
<qti-outcome-declaration identifier="SCORE_MIN" cardinality="single" base-type="float">
  <qti-default-value>
    <qti-value>1</qti-value>
  </qti-default-value>
</qti-outcome-declaration>
<qti-item-body>
  <qti-choice-interaction class="lrn qti-labels-upper-alpha qti-input-control-hidden qti-labels-suffix-none" min-choices="0" max-choices="1" response-identifier="RESPONSE_1">
    <qti-prompt>Once we have <code>outcome_stats</code> saved, which of these lines of codes $3.20 would return the median?</qti-prompt>
    <qti-simple-choice identifier="0"><code>outcome$median</code></qti-simple-choice>
    <qti-simple-choice identifier="1"><code>median$outcome_stats</code></qti-simple-choice>
    <qti-simple-choice identifier="2"><span>I am an inline $$Y_i = 0 + \\beta_1X_{1i} + \\beta_1X_{2i} + \\epsilon_i$$ LaTeX expression.</span></qti-simple-choice>
    <qti-simple-choice identifier="3"><span>I am a block/centered \\[Y_i = 0 + \\beta_1X_{1i} + \\beta_1X_{2i} + \\epsilon_i\\] LaTeX expression.</span></qti-simple-choice>
    <qti-simple-choice identifier="4">The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.</qti-simple-choice>
  </qti-choice-interaction>
</qti-item-body>
<qti-response-processing>
<qti-response-condition>
  <qti-response-if>
    <qti-is-null>
      <qti-variable identifier="RESPONSE_1"/>
    </qti-is-null>
    <qti-set-outcome-value identifier="SCORE">
      <qti-base-value base-type="float">0</qti-base-value>
    </qti-set-outcome-value>
  </qti-response-if>
  <qti-response-else-if>
    <qti-match>
      <qti-variable identifier="RESPONSE_1"/>
      <qti-correct identifier="RESPONSE_1"/>
    </qti-match>
    <qti-set-outcome-value identifier="SCORE">
      <qti-base-value base-type="float">1</qti-base-value>
    </qti-set-outcome-value>
  </qti-response-else-if>
  <qti-response-else>
    <qti-set-outcome-value identifier="SCORE">
      <qti-variable identifier="SCORE_MIN"/>
    </qti-set-outcome-value>
  </qti-response-else>
</qti-response-condition>
</qti-response-processing>
</qti-assessment-item>`
  },
  {
    "identifier": "Ch5_Modeling_5_v2",
    "guid": "0000-0015-0002",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
<qti-assessment-item
xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
identifier="Ch5_Modeling_5_v2" title="Ch5_Modeling_5_v2"
adaptive="false" time-dependent="false">
<qti-response-declaration identifier="RESPONSE_1" cardinality="multiple" base-type="identifier">
  <qti-correct-response>
    <qti-value>0</qti-value>
  </qti-correct-response>
</qti-response-declaration>
<qti-response-declaration identifier="RESPONSE_2" cardinality="multiple" base-type="identifier">
  <qti-correct-response>
    <qti-value>4</qti-value>
    <qti-value>3</qti-value>
  </qti-correct-response>
</qti-response-declaration>
<qti-response-declaration identifier="RESPONSE_3" cardinality="multiple" base-type="identifier">
  <qti-correct-response>
    <qti-value>4</qti-value>
    <qti-value>3</qti-value>
  </qti-correct-response>
</qti-response-declaration>
<qti-response-declaration identifier="RESPONSE_4" cardinality="multiple" base-type="identifier">
  <qti-correct-response>
    <qti-value>4</qti-value>
    <qti-value>3</qti-value>
  </qti-correct-response>
</qti-response-declaration>
<qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
  <qti-default-value>
    <qti-value>0</qti-value>
  </qti-default-value>
</qti-outcome-declaration>
<qti-outcome-declaration identifier="SCORE_1" cardinality="single" base-type="float">
  <qti-default-value>
    <qti-value>0</qti-value>
  </qti-default-value>
</qti-outcome-declaration>
<qti-outcome-declaration identifier="SCORE_2" cardinality="single" base-type="float">
  <qti-default-value>
    <qti-value>0</qti-value>
  </qti-default-value>
</qti-outcome-declaration>
<qti-item-body>
<div class="qti-layout-row">
<div class="qti-layout-col12">
  <qti-choice-interaction class="lrn qti-labels-upper-alpha qti-input-control-hidden qti-labels-suffix-none" min-choices="0" max-choices="0" response-identifier="RESPONSE_1">
    <qti-prompt>How is the median the \"middle\" of the distribution? (Check all that apply.)</qti-prompt>
    <qti-simple-choice identifier="0">If all data points in the distribution are arranged in order, there are an equal number of data points below and above the median.</qti-simple-choice>
    <qti-simple-choice identifier="1">If all data points in the distribution are arranged in order, there are an equal number of variables below and above the median.</qti-simple-choice>
    <qti-simple-choice identifier="2">The sum of the values below the median is equal to the sum of the values above the median.</qti-simple-choice>
    <qti-simple-choice identifier="3">The median balances the amount of error below and above it.</qti-simple-choice>
    <qti-simple-choice identifier="4">The deviations above and below the median always sum to 0.</qti-simple-choice>
  </qti-choice-interaction>

  <qti-choice-interaction class="lrn qti-labels-upper-alpha qti-input-control-hidden qti-labels-suffix-none" min-choices="0" max-choices="0" response-identifier="RESPONSE_2">
<qti-prompt>How is the mean the \"middle\" of the distribution? (Check all that apply.)</qti-prompt>
<qti-simple-choice identifier="0">If all data points in the distribution are arranged in order, there are an equal number of data points below and above the mean.</qti-simple-choice>
<qti-simple-choice identifier="1">If all data points in the distribution are arranged in order, there are an equal number of variables below and above the mean.</qti-simple-choice>
<qti-simple-choice identifier="2">The sum of the values below the mean is equal to the sum of the values above the mean.</qti-simple-choice>
<qti-simple-choice identifier="3">The mean balances the amount of error below and above it.</qti-simple-choice>
<qti-simple-choice identifier="4">The deviations below and above the mean always sum to 0.</qti-simple-choice>
  </qti-choice-interaction>
  </div>
</div>
</qti-item-body>
<qti-response-processing>
<qti-response-condition>
  <qti-response-if>
    <qti-match>
      <qti-variable identifier="RESPONSE_1"/>
      <qti-correct identifier="RESPONSE_1"/>
    </qti-match>
    <qti-set-outcome-value identifier="SCORE_1">
      <qti-base-value base-type="float">1</qti-base-value>
    </qti-set-outcome-value>
  </qti-response-if>
  <qti-response-else>
    <qti-set-outcome-value identifier="SCORE_1">
      <qti-base-value base-type="float">0</qti-base-value>
    </qti-set-outcome-value>
  </qti-response-else>
</qti-response-condition>
<qti-response-condition>
  <qti-response-if>
    <qti-match>
      <qti-variable identifier="RESPONSE_2"/>
      <qti-correct identifier="RESPONSE_2"/>
    </qti-match>
    <qti-set-outcome-value identifier="SCORE_2">
      <qti-base-value base-type="float">1</qti-base-value>
    </qti-set-outcome-value>
  </qti-response-if>
  <qti-response-else>
    <qti-set-outcome-value identifier="SCORE_2">
      <qti-base-value base-type="float">0</qti-base-value>
    </qti-set-outcome-value>
  </qti-response-else>
</qti-response-condition>
<qti-set-outcome-value identifier="SCORE">
  <qti-sum>
    <qti-variable identifier="SCORE_1"/>
    <qti-variable identifier="SCORE_2"/>
  </qti-sum>
</qti-set-outcome-value>
</qti-response-processing>
</qti-assessment-item>`
  },
  {
    "identifier": "Ch5_Modeling_4_q1_r3.0",
    "guid": "0000-0015-0003",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
<qti-assessment-item
xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
adaptive="false" time-dependent="false"
identifier="Ch5_Modeling_4_q1_r3.0" title="Ch5_Modeling_4_q1_r3.0">
<qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE" />
<qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
<qti-item-body>
<div class="qti-layout-row">
<div class="qti-layout-col12">
  <p><img alt="A histogram of the distribution of GradePredict in Fingers. It is skewed to the left, with most of the scores falling between 3.5 and 4.0,  and only a couple of scores below 3.0." height="368" src="https://assets.learnosity.com/organisations/430/bad15dff-01bb-4bff-8658-29b65de4b8f2.png" width="500"></p>
  <p>Which do you think is a better one-number model?&nbsp;The median or the mean?</p>
<qti-text-entry-interaction class="qti-input-width-72" data-maxlength="50" data-spellcheck="true" response-identifier="RESPONSE"/>
</div>
</div>
</qti-item-body>
</qti-assessment-item>`
  },
  {
    "identifier": "Ch5_Modeling_4_q2_r3.0",
    "guid": "0000-0015-0004",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
<qti-assessment-item
xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
adaptive="false" time-dependent="false"
identifier="Ch5_Modeling_4_q2_r3.0" title="Ch5_Modeling_4_q2_r3.0">
<qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE" />
<qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
<qti-item-body>
<div class="qti-layout-row">
<div class="qti-layout-col12">
  <p>&nbsp;</p>
  <img alt="A histogram of the distribution of Thumb in Fingers. The values are roughly normally distributed." height="361" src="https://assets.learnosity.com/organisations/430/ba80a371-5659-492a-990d-6aa96cfdfef0.png" width="500">
  <p>Which do you think is a better one-number model?&nbsp;The median or the mean?</p>
<qti-text-entry-interaction class="qti-input-width-72" data-maxlength="50" response-identifier="RESPONSE"/>
</div>
</div>
</qti-item-body>
</qti-assessment-item>`
  },
  {
    "identifier": "Ch5_Modeling_4_q3_r3.0",
    "guid": "0000-0015-0005",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
<qti-assessment-item
xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
adaptive="false" time-dependent="false"
identifier="Ch5_Modeling_4_q3_r3.0" title="Ch5_Modeling_4_q3_r3.0">
<qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE" />
<qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
<qti-item-body>
<div class="qti-layout-row">
<div class="qti-layout-col12">
  <p>&nbsp;</p>
  <p><img alt="A histogram of the distribution of Age in Fingers. The distribution is roughly bimodal and skewed to the right." height="359" src="https://assets.learnosity.com/organisations/430/2b62e299-841e-4dd2-8527-0157b96864de.png" width="513"></p>
  <p>Which do you think is a better one-number model?&nbsp;The median or the mean?</p>
<qti-text-entry-interaction class="qti-input-width-72" response-identifier="RESPONSE" data-maxlength="50"/>
</div>
</div>
</qti-item-body>
</qti-assessment-item>`
  },
  {
    "identifier": "Ch5_Modeling_3",
    "guid": "0000-0015-0006",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
adaptive="false"  time-dependent="false"
identifier="Ch5_Modeling_3" title="Ch5_Modeling_3">
<qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE_1"/>
<qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
<qti-item-body>
<div class="qti-layout-row">
<div class="qti-layout-col12">
  <qti-extended-text-interaction class="lrn qti-height-lines-3 qti-counter-up" expected-length="200" format="plain" data-toolbar-buttons="cut,copy,paste" data-lrn-show-word-limit="visible" data-spellcheck="true" response-identifier="RESPONSE_1">
    <qti-prompt>
      With the simple distribution discussed above (5, 5, 5, 10, 20), we could come up with reasons to favor both the median and the mean. In what sense might the median be a better model for this distribution? In what sense might the mean be a better model?
    </qti-prompt>
  </qti-extended-text-interaction>
</div>
</div>
</qti-item-body>
</qti-assessment-item>`
  },
  {
    "identifier": "hot-text-example-1",
    "guid": "0000-0016-0001",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="hot-text-example-1" title="Q12 Hot-text Interaction - Single Cardinality" 
      adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="identifier">
      <qti-correct-response>
        <qti-value>B</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
      <qti-default-value>
        <qti-value>0</qti-value>
      </qti-default-value>
    </qti-outcome-declaration>
    <qti-item-body>
      <p>
        Select the error in the following passage of text (or <em>No Error</em> if there is none).
      </p>
      <qti-hottext-interaction response-identifier="RESPONSE" max-choices="1">
        <p>
          Sponsors of the Olympic Games
          <qti-hottext identifier="A">who bought</qti-hottext>
          advertising time on United States television
          <qti-hottext identifier="B">includes</qti-hottext>
          <qti-hottext identifier="C">at least</qti-hottext>
          a dozen international firms
          <qti-hottext identifier="D">whose</qti-hottext>
          names are familiar to American consumers.
          <qti-hottext identifier="E">No error.</qti-hottext>
        </p>
      </qti-hottext-interaction>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "hot-text-example-2",
    "guid": "0000-0016-0002",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="hot-text-example-2" title="Q12 Hot-text Interaction - Multiple Cardinality" 
      adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE" cardinality="multiple" base-type="identifier">
      <qti-correct-response>
        <qti-value>A</qti-value>
        <qti-value>B</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
      <qti-default-value>
        <qti-value>0</qti-value>
      </qti-default-value>
    </qti-outcome-declaration>
    <qti-item-body>
      <p>
        Select the errors in the following passage of text (or <em>No Error</em> if there are none).
      </p>
      <qti-hottext-interaction response-identifier="RESPONSE" max-choices="2">
        <p>
          Sponsors of the Olympic Games
          <qti-hottext identifier="A">whom bought</qti-hottext>
          advertising time on United States television
          <qti-hottext identifier="B">includes</qti-hottext>
          <qti-hottext identifier="C">at least</qti-hottext>
          a dozen international firms
          <qti-hottext identifier="D">whose</qti-hottext>
          names are familiar to American consumers.
          <qti-hottext identifier="E">No error.</qti-hottext>
        </p>
      </qti-hottext-interaction>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "q11-hottext-sv-1",
    "guid": "0000-0016-0003",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="q11-hottext-sv-1" title="Q11 Hottext - (SV 1) - input control hidden" 
      adaptive="false" time-dependent="false">
      <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE">
        <qti-correct-response>
          <qti-value>B</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
        <qti-default-value>
          <qti-value>0</qti-value>
        </qti-default-value>
      </qti-outcome-declaration>
      <qti-item-body>
        <p><strong>Demonstrates single cardinality, qti-input-control-hidden</strong></p>
        
        <qti-hottext-interaction class="qti-input-control-hidden" max-choices="1" response-identifier="RESPONSE">
          <qti-prompt>
            <p>
              Select the error in the following passage of text (or <em>No Error</em> if there is none).
            </p>
          </qti-prompt>
          <p>
            Sponsors of the Olympic Games <qti-hottext identifier="A">who bought</qti-hottext>
            advertising time on United States television <qti-hottext identifier="B">includes</qti-hottext>
            <qti-hottext identifier="C">at least</qti-hottext> a dozen international firms <qti-hottext identifier="D">whose</qti-hottext> names are familiar to American consumers.
            <qti-hottext identifier="E">No error.</qti-hottext>
          </p>
        </qti-hottext-interaction>  
      </qti-item-body>
      <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "q11-hottext-sv-2",
    "guid": "0000-0016-0004",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="q11-hottext-sv-2" title="Q11 Hottext - (SV 2) - custom messages" 
      adaptive="false" time-dependent="false">
      <qti-response-declaration base-type="identifier" cardinality="multiple" identifier="RESPONSE1">
        <qti-correct-response>
          <qti-value>B</qti-value>
          <qti-value>D</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
        <qti-default-value>
          <qti-value>0</qti-value>
        </qti-default-value>
      </qti-outcome-declaration>
      <qti-item-body>
        <p><strong>Demonstrates multiple cardinality, max-choices=2, min-choices=1, data-max-selections-message, data-min-selections-message</strong></p>
        
        <qti-hottext-interaction class="" max-choices="2" min-choices="1" data-max-selections-message="You've selected too many!" data-min-selections-message="You haven't selected enough." response-identifier="RESPONSE1">
          <qti-prompt>
            <p>
              Select the error(s) in the following passage of text (or <em>No Error</em> if there is none).
            </p>
          </qti-prompt>
          <p>
            Sponsors of the Olympic Games <qti-hottext identifier="A">who bought</qti-hottext>
            advertising time on United States television <qti-hottext identifier="B">includes</qti-hottext>
            <qti-hottext identifier="C">at least</qti-hottext> a dozen international firms <qti-hottext identifier="D">who's</qti-hottext> names are familiar to American consumers.
            <qti-hottext identifier="E">No error.</qti-hottext>
          </p>
        </qti-hottext-interaction>    
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q11-hottext-sv-3",
    "guid": "0000-0016-0005",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="q11-hottext-sv-3" title="Q11 Hottext - (SV 3) - unselected hidden" 
      adaptive="false" time-dependent="false">
      <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE">
        <qti-correct-response>
          <qti-value>B</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
        <qti-default-value>
          <qti-value>0</qti-value>
        </qti-default-value>
      </qti-outcome-declaration>
      <qti-item-body>
        <p><strong>Demonstrates single cardinality, qti-unselected-hidden</strong></p>
        
        <qti-hottext-interaction class="qti-unselected-hidden" max-choices="1" response-identifier="RESPONSE">
          <qti-prompt>
            <p>
              Select the error in the following passage of text (or <em>No Error</em> if there is none).
            </p>
          </qti-prompt>
          <p>
            Sponsors of the Olympic Games <qti-hottext identifier="A">who bought</qti-hottext>
            advertising time on United States television <qti-hottext identifier="B">includes</qti-hottext>
            <qti-hottext identifier="C">at least</qti-hottext> a dozen international firms <qti-hottext identifier="D">whose</qti-hottext> names are familiar to American consumers.
            <qti-hottext identifier="E">No error.</qti-hottext>
          </p>
        </qti-hottext-interaction>  
      </qti-item-body>
      <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-1",
    "guid": "0000-0017-0001",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" identifier="季語"
        title="季語を必要とするのは和歌か俳句か" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" identifier="RESPONSE" cardinality="single">
            <qti-correct-response>
                <qti-value>俳句</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
            <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                <qti-choice-interaction response-identifier="RESPONSE" shuffle="false" max-choices="1">
                  <qti-prompt><ruby><rb data-catalog-idref="kigo">季語</rb><rt>き&#x3054;</rt></ruby>を必要とするのは、つ&#x304E;の五つの&#x3069;れか。選&#x3079;。</qti-prompt>
                  <qti-simple-choice identifier="俳句">俳句</qti-simple-choice>
                  <qti-simple-choice identifier="和歌">和歌</qti-simple-choice>
                  <qti-simple-choice identifier="狂歌">狂歌</qti-simple-choice>
                  <qti-simple-choice identifier="川柳">川柳</qti-simple-choice>
                  <qti-simple-choice identifier="都都逸">都都逸</qti-simple-choice>
                </qti-choice-interaction>
            </div>
        </qti-item-body>
        <qti-catalog-info>
          <qti-catalog id="kigo">
            <qti-card support="glossary-on-screen">
              <qti-html-content>
                <div class="qti-height-32 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                  特定の季節を表す言葉
                </div>
              </qti-html-content>
            </qti-card>
            <qti-card support="keyword-translation">
              <qti-card-entry xml:lang="en">
                <qti-html-content>
                  <p><strong><em>Kigo</em></strong> (季語, <strong><em>"season word"</em></strong>) is a word or phrase associated with a particular season, used in traditional forms of Japanese poetry.</p>
                </qti-html-content>
              </qti-card-entry>
            </qti-card>
          </qti-catalog>
        </qti-catalog-info>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-2",
    "guid": "0000-0017-0002",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" identifier="季語"
        title="季語を必要とするのは和歌か俳句か" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" identifier="RESPONSE" cardinality="single">
            <qti-correct-response>
                <qti-value>俳句</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
            <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                <qti-choice-interaction class="qti-labels-decimal" response-identifier="RESPONSE" shuffle="false" max-choices="1">
                  <qti-prompt><ruby><rb data-catalog-idref="kigo">季語</rb><rt>き&#x3054;</rt></ruby>を必要とするのは、つ&#x304E;の五つの&#x3069;れか。選&#x3079;。</qti-prompt>
                  <qti-simple-choice identifier="俳句">俳句</qti-simple-choice>
                  <qti-simple-choice identifier="和歌">和歌</qti-simple-choice>
                  <qti-simple-choice identifier="狂歌">狂歌</qti-simple-choice>
                  <qti-simple-choice identifier="川柳">川柳</qti-simple-choice>
                  <qti-simple-choice identifier="都都逸">都都逸</qti-simple-choice>
                </qti-choice-interaction>
            </div>
        </qti-item-body>
        <qti-catalog-info>
        <qti-catalog id="kigo">
          <qti-card support="glossary-on-screen">
            <qti-html-content>
              <div class="qti-height-32 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                特定の季節を表す言葉
              </div>
            </qti-html-content>
          </qti-card>
          <qti-card support="keyword-translation">
            <qti-card-entry xml:lang="en">
              <qti-html-content>
                <p><strong><em>Kigo</em></strong> (季語, <strong><em>"season word"</em></strong>) is a word or phrase associated with a particular season, used in traditional forms of Japanese poetry.</p>
              </qti-html-content>
            </qti-card-entry>
          </qti-card>
        </qti-catalog>
      </qti-catalog-info>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-3",
    "guid": "0000-0017-0003",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" identifier="季語"
        title="季語を必要とするのは和歌か俳句か" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" identifier="RESPONSE" cardinality="single">
            <qti-correct-response>
                <qti-value>俳句</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
            <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                <qti-choice-interaction class="qti-labels-cjk-ideographic" response-identifier="RESPONSE" shuffle="false" max-choices="1">
                  <qti-prompt><ruby><rb data-catalog-idref="kigo">季語</rb><rt>き&#x3054;</rt></ruby>を必要とするのは、つ&#x304E;の五つの&#x3069;れか。選&#x3079;。</qti-prompt>
                  <qti-simple-choice identifier="俳句">俳句</qti-simple-choice>
                  <qti-simple-choice identifier="和歌">和歌</qti-simple-choice>
                  <qti-simple-choice identifier="狂歌">狂歌</qti-simple-choice>
                  <qti-simple-choice identifier="川柳">川柳</qti-simple-choice>
                  <qti-simple-choice identifier="都都逸">都都逸</qti-simple-choice>
                </qti-choice-interaction>
            </div>
        </qti-item-body>
        <qti-catalog-info>
        <qti-catalog id="kigo">
          <qti-card support="glossary-on-screen">
            <qti-html-content>
              <div class="qti-height-32 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                特定の季節を表す言葉
              </div>
            </qti-html-content>
          </qti-card>
          <qti-card support="keyword-translation">
            <qti-card-entry xml:lang="en">
              <qti-html-content>
                <p><strong><em>Kigo</em></strong> (季語, <strong><em>"season word"</em></strong>) is a word or phrase associated with a particular season, used in traditional forms of Japanese poetry.</p>
              </qti-html-content>
            </qti-card-entry>
          </qti-card>
        </qti-catalog>
      </qti-catalog-info>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-4",
    "guid": "0000-0017-0004",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" identifier="季語"
        title="季語を必要とするのは和歌か俳句か" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" identifier="RESPONSE" cardinality="single">
            <qti-correct-response>
                <qti-value>俳句</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
            <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                <qti-choice-interaction class="qti-labels-none" response-identifier="RESPONSE" shuffle="false" max-choices="1">
                  <qti-prompt><ruby><rb data-catalog-idref="kigo">季語</rb><rt>き&#x3054;</rt></ruby>を必要とするのは、つ&#x304E;の五つの&#x3069;れか。選&#x3079;。</qti-prompt>
                  <qti-simple-choice identifier="俳句">俳句</qti-simple-choice>
                  <qti-simple-choice identifier="和歌">和歌</qti-simple-choice>
                  <qti-simple-choice identifier="狂歌">狂歌</qti-simple-choice>
                  <qti-simple-choice identifier="川柳">川柳</qti-simple-choice>
                  <qti-simple-choice identifier="都都逸">都都逸</qti-simple-choice>
                </qti-choice-interaction>
            </div>
        </qti-item-body>
        <qti-catalog-info>
        <qti-catalog id="kigo">
          <qti-card support="glossary-on-screen">
            <qti-html-content>
              <div class="qti-height-32 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                特定の季節を表す言葉
              </div>
            </qti-html-content>
          </qti-card>
          <qti-card support="keyword-translation">
            <qti-card-entry xml:lang="en">
              <qti-html-content>
                <p><strong><em>Kigo</em></strong> (季語, <strong><em>"season word"</em></strong>) is a word or phrase associated with a particular season, used in traditional forms of Japanese poetry.</p>
              </qti-html-content>
            </qti-card-entry>
          </qti-card>
        </qti-catalog>
      </qti-catalog-info>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-5",
    "guid": "0000-0017-0005",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" identifier="季語"
        title="季語を必要とするのは和歌か俳句か" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" identifier="RESPONSE" cardinality="single">
            <qti-correct-response>
                <qti-value>俳句</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
            <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                <qti-choice-interaction class="qti-input-control-hidden qti-labels-none" response-identifier="RESPONSE" shuffle="false" max-choices="1">
                  <qti-prompt><ruby><rb>季語</rb><rt>き&#x3054;</rt></ruby>を必要とするのは、つ&#x304E;の五つの&#x3069;れか。選&#x3079;。</qti-prompt>
                  <qti-simple-choice identifier="俳句">俳句</qti-simple-choice>
                  <qti-simple-choice identifier="和歌">和歌</qti-simple-choice>
                  <qti-simple-choice identifier="狂歌">狂歌</qti-simple-choice>
                  <qti-simple-choice identifier="川柳">川柳</qti-simple-choice>
                  <qti-simple-choice identifier="都都逸">都都逸</qti-simple-choice>
                </qti-choice-interaction>
            </div>
        </qti-item-body>
        <qti-catalog-info>
        <qti-catalog id="kigo">
          <qti-card support="glossary-on-screen">
            <qti-html-content>
              <div class="qti-height-32 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                特定の季節を表す言葉
              </div>
            </qti-html-content>
          </qti-card>
          <qti-card support="keyword-translation">
            <qti-card-entry xml:lang="en">
              <qti-html-content>
                <p><strong><em>Kigo</em></strong> (季語, <strong><em>"season word"</em></strong>) is a word or phrase associated with a particular season, used in traditional forms of Japanese poetry.</p>
              </qti-html-content>
            </qti-card-entry>
          </qti-card>
        </qti-catalog>
      </qti-catalog-info>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-6",
    "guid": "0000-0017-0006",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" identifier="季語"
        title="季語を必要とするのは和歌か俳句か" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" identifier="RESPONSE" cardinality="multiple">
            <qti-correct-response>
                <qti-value>俳句</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
            <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                <qti-choice-interaction response-identifier="RESPONSE" shuffle="false" max-choices="0">
                  <qti-prompt><ruby><rb>季語</rb><rt>き&#x3054;</rt></ruby>を必要とするのは、つ&#x304E;の五つの&#x3069;れか。選&#x3079;。</qti-prompt>
                  <qti-simple-choice identifier="俳句">俳句</qti-simple-choice>
                  <qti-simple-choice identifier="和歌">和歌</qti-simple-choice>
                  <qti-simple-choice identifier="狂歌">狂歌</qti-simple-choice>
                  <qti-simple-choice identifier="川柳">川柳</qti-simple-choice>
                  <qti-simple-choice identifier="都都逸">都都逸</qti-simple-choice>
                </qti-choice-interaction>
            </div>
        </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-7",
    "guid": "0000-0017-0007",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" identifier="季語"
        title="季語を必要とするのは和歌か俳句か" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" identifier="RESPONSE" cardinality="multiple">
            <qti-correct-response>
                <qti-value>俳句</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
            <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                <qti-choice-interaction class="qti-labels-decimal" response-identifier="RESPONSE" shuffle="false" max-choices="0">
                  <qti-prompt><ruby><rb>季語</rb><rt>き&#x3054;</rt></ruby>を必要とするのは、つ&#x304E;の五つの&#x3069;れか。選&#x3079;。</qti-prompt>
                  <qti-simple-choice identifier="俳句">俳句</qti-simple-choice>
                  <qti-simple-choice identifier="和歌">和歌</qti-simple-choice>
                  <qti-simple-choice identifier="狂歌">狂歌</qti-simple-choice>
                  <qti-simple-choice identifier="川柳">川柳</qti-simple-choice>
                  <qti-simple-choice identifier="都都逸">都都逸</qti-simple-choice>
                </qti-choice-interaction>
            </div>
        </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-8",
    "guid": "0000-0017-0008",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" identifier="季語"
        title="季語を必要とするのは和歌か俳句か" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" identifier="RESPONSE" cardinality="multiple">
            <qti-correct-response>
                <qti-value>俳句</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
            <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                <qti-choice-interaction class="qti-labels-cjk-ideographic" response-identifier="RESPONSE" shuffle="false" max-choices="0">
                  <qti-prompt><ruby><rb>季語</rb><rt>き&#x3054;</rt></ruby>を必要とするのは、つ&#x304E;の五つの&#x3069;れか。選&#x3079;。</qti-prompt>
                  <qti-simple-choice identifier="俳句">俳句</qti-simple-choice>
                  <qti-simple-choice identifier="和歌">和歌</qti-simple-choice>
                  <qti-simple-choice identifier="狂歌">狂歌</qti-simple-choice>
                  <qti-simple-choice identifier="川柳">川柳</qti-simple-choice>
                  <qti-simple-choice identifier="都都逸">都都逸</qti-simple-choice>
                </qti-choice-interaction>
            </div>
        </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-9",
    "guid": "0000-0017-0009",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" identifier="季語"
        title="季語を必要とするのは和歌か俳句か" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" identifier="RESPONSE" cardinality="multiple">
            <qti-correct-response>
                <qti-value>俳句</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
            <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                <qti-choice-interaction class="qti-labels-none" response-identifier="RESPONSE" shuffle="false" max-choices="0">
                  <qti-prompt><ruby><rb>季語</rb><rt>き&#x3054;</rt></ruby>を必要とするのは、つ&#x304E;の五つの&#x3069;れか。選&#x3079;。</qti-prompt>
                  <qti-simple-choice identifier="俳句">俳句</qti-simple-choice>
                  <qti-simple-choice identifier="和歌">和歌</qti-simple-choice>
                  <qti-simple-choice identifier="狂歌">狂歌</qti-simple-choice>
                  <qti-simple-choice identifier="川柳">川柳</qti-simple-choice>
                  <qti-simple-choice identifier="都都逸">都都逸</qti-simple-choice>
                </qti-choice-interaction>
            </div>
        </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-10",
    "guid": "0000-0017-0010",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" identifier="季語"
        title="季語を必要とするのは和歌か俳句か" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" identifier="RESPONSE" cardinality="multiple">
            <qti-correct-response>
                <qti-value>俳句</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
            <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                <qti-choice-interaction class="qti-input-control-hidden qti-labels-none" response-identifier="RESPONSE" shuffle="false" max-choices="0">
                  <qti-prompt><ruby><rb>季語</rb><rt>き&#x3054;</rt></ruby>を必要とするのは、つ&#x304E;の五つの&#x3069;れか。選&#x3079;。</qti-prompt>
                  <qti-simple-choice identifier="俳句">俳句</qti-simple-choice>
                  <qti-simple-choice identifier="和歌">和歌</qti-simple-choice>
                  <qti-simple-choice identifier="狂歌">狂歌</qti-simple-choice>
                  <qti-simple-choice identifier="川柳">川柳</qti-simple-choice>
                  <qti-simple-choice identifier="都都逸">都都逸</qti-simple-choice>
                </qti-choice-interaction>
            </div>
        </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-11",
    "guid": "0000-0017-0011",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" identifier="季語"
        title="季語を必要とするのは和歌か俳句か" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" identifier="RESPONSE" cardinality="single">
            <qti-correct-response>
                <qti-value>俳句</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
            <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                <qti-choice-interaction class="qti-labels-cjk-ideographic qti-choices-stacking-2" response-identifier="RESPONSE" shuffle="false" max-choices="1">
                  <qti-prompt><ruby><rb>季語</rb><rt>き&#x3054;</rt></ruby>を必要とするのは、つ&#x304E;の五つの&#x3069;れか。選&#x3079;。</qti-prompt>
                  <qti-simple-choice identifier="俳句">俳句</qti-simple-choice>
                  <qti-simple-choice identifier="和歌">和歌</qti-simple-choice>
                  <qti-simple-choice identifier="狂歌">狂歌</qti-simple-choice>
                  <qti-simple-choice identifier="川柳">川柳</qti-simple-choice>
                  <qti-simple-choice identifier="都都逸">都都逸</qti-simple-choice>
                </qti-choice-interaction>
            </div>
        </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-12",
    "guid": "0000-0017-0012",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" identifier="季語"
        title="季語を必要とするのは和歌か俳句か" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" identifier="RESPONSE" cardinality="single">
            <qti-correct-response>
                <qti-value>俳句</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="singlle" identifier="SCORE"/>
        <qti-item-body>
            <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                <qti-choice-interaction class="qti-labels-cjk-ideographic qti-choices-stacking-3" response-identifier="RESPONSE" shuffle="false" max-choices="1">
                  <qti-prompt><ruby><rb>季語</rb><rt>き&#x3054;</rt></ruby>を必要とするのは、つ&#x304E;の五つの&#x3069;れか。選&#x3079;。</qti-prompt>
                  <qti-simple-choice identifier="俳句">俳句</qti-simple-choice>
                  <qti-simple-choice identifier="和歌">和歌</qti-simple-choice>
                  <qti-simple-choice identifier="狂歌">狂歌</qti-simple-choice>
                  <qti-simple-choice identifier="川柳">川柳</qti-simple-choice>
                  <qti-simple-choice identifier="都都逸">都都逸</qti-simple-choice>
                </qti-choice-interaction>
            </div>
        </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-13",
    "guid": "0000-0017-0013",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" identifier="季語"
        title="季語を必要とするのは和歌か俳句か" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" identifier="RESPONSE" cardinality="single">
            <qti-correct-response>
                <qti-value>俳句</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
            <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                <qti-choice-interaction class="qti-labels-cjk-ideographic qti-choices-stacking-2 qti-input-control-hidden" response-identifier="RESPONSE" shuffle="false" max-choices="1">
                  <qti-prompt><ruby><rb>季語</rb><rt>き&#x3054;</rt></ruby>を必要とするのは、つ&#x304E;の五つの&#x3069;れか。選&#x3079;。</qti-prompt>
                  <qti-simple-choice identifier="俳句">俳句</qti-simple-choice>
                  <qti-simple-choice identifier="和歌">和歌</qti-simple-choice>
                  <qti-simple-choice identifier="狂歌">狂歌</qti-simple-choice>
                  <qti-simple-choice identifier="川柳">川柳</qti-simple-choice>
                  <qti-simple-choice identifier="都都逸">都都逸</qti-simple-choice>
                </qti-choice-interaction>
            </div>
        </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-14",
    "guid": "0000-0017-0014",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" identifier="季語"
        title="季語を必要とするのは和歌か俳句か" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" identifier="RESPONSE" cardinality="single">
            <qti-correct-response>
                <qti-value>俳句</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
            <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
                <qti-choice-interaction class="qti-labels-cjk-ideographic qti-choices-stacking-3 qti-input-control-hidden" response-identifier="RESPONSE" shuffle="false" max-choices="1">
                  <qti-prompt><ruby><rb>季語</rb><rt>き&#x3054;</rt></ruby>を必要とするのは、つ&#x304E;の五つの&#x3069;れか。選&#x3079;。</qti-prompt>
                  <qti-simple-choice identifier="俳句">俳句</qti-simple-choice>
                  <qti-simple-choice identifier="和歌">和歌</qti-simple-choice>
                  <qti-simple-choice identifier="狂歌">狂歌</qti-simple-choice>
                  <qti-simple-choice identifier="川柳">川柳</qti-simple-choice>
                  <qti-simple-choice identifier="都都逸">都都逸</qti-simple-choice>
                </qti-choice-interaction>
            </div>
        </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-choice-15",
    "guid": "0000-0017-0015",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="元二を送る" time-dependent="false" title="元二を送る" xml:lang="ja">
      <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE">
        <qti-correct-response>
          <qti-value>友人</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
      <qti-stylesheet href="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/ac4de79c-c6e0-4608-83a5-13e9d8408b25/Items/Kanbun/kanbun.css" type="text/css"/>
      <qti-item-body>
        <div class="qti-height-112 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
          <p>次の漢詩を読ん&#x3067;設問に答えよ。</p>
          <blockquote>
            <div class="kanbun okurigana-sinking">
              <p><span class="unit"><span class="kanji">渭</span></span><span class="has-okurigana unit"><span class="kanji">城</span><span class="kunten okurigana"><sup>ノ</sup></span></span><span class="unit"><span class="kanji">朝</span></span><span class="unit"><span class="kanji">雨</span></span><span class="has-okurigana unit"><span class="kanji">浥</span><span class="kunten okurigana"><sup>ス</sup></span><span class="kunten kaeriten"><sub>二</sub></span></span><span class="unit"><span class="kanji">軽</span></span><span class="has-okurigana unit"><span class="kanji">塵</span><span class="kunten okurigana"><sup>ヲ</sup></span><span class="kunten kaeriten"><sub class="ichiten">一</sub></span></span></p><p><span class="unit"><span class="kanji">客</span></span><span class="unit"><span class="kanji">舎</span></span><span class="unit"><span class="kanji">青</span></span><span class="unit"><span class="kanji">青</span></span><span class="unit"><span class="kanji">柳</span></span><span class="unit"><span class="kanji">色</span></span><span class="has-okurigana unit"><span class="kanji">新</span><span class="kunten okurigana"><sup>タナリ</sup></span></span></p><p><span class="has-okurigana unit"><span class="kanji">勧</span><span class="kunten okurigana"><sup>ム</sup></span><span class="kunten kaeriten"><sub>レ</sub></span></span><span class="has-okurigana unit"><span class="kanji">君</span><span class="kunten okurigana"><sup>ニ</sup></span></span><span class="has-okurigana unit"><span class="kanji">更</span><span class="kunten okurigana"><sup>ニ</sup></span></span><span class="has-okurigana unit"><span class="kanji">尽</span><span class="kunten okurigana"><sup>クセ</sup></span></span><span class="unit"><span class="kanji">一</span></span><span class="has-okurigana unit"><span class="kanji">杯</span><span class="kunten okurigana"><sup>ノ</sup></span></span><span class="unit"><span class="kanji">酒</span></span></p><p><span class="has-okurigana unit"><span class="kanji">西</span><span class="kunten okurigana"><sup>ノカタ</sup></span></span><span class="has-okurigana unit"><span class="kanji">出</span><span class="kunten okurigana"><sup>&#x30BA;レ&#x30D0;</sup></span><span class="kunten kaeriten"><sub>二</sub></span></span><span class="unit"><span class="kanji">陽</span></span><span class="has-okurigana unit"><span class="kanji">関</span><span class="kunten okurigana"><sup>ヲ</sup></span><span class="kunten kaeriten"><sub class="ichiten">一</sub></span></span><span class="has-okurigana unit"><span class="kanji">無</span><span class="kunten okurigana"><sup>カラン</sup></span><span class="kunten kaeriten"><sub>二</sub></span></span><span class="unit"><span class="kanji">故</span></span><span class="unit"><span class="kanji">人</span><span class="kunten kaeriten"><sub class="ichiten">一</sub></span></span></p>
            </div>
          </blockquote>
          <qti-choice-interaction class="qti-labels-cjk-ideographic" max-choices="1" response-identifier="RESPONSE" shuffle="false">
            <qti-prompt> 故人の意味は、つ&#x304E;の二つの&#x3069;ちらか。選&#x3079;。 </qti-prompt>
            <qti-simple-choice identifier="亡くなった人">亡くなった人</qti-simple-choice>
            <qti-simple-choice identifier="友人">友人</qti-simple-choice>
          </qti-choice-interaction>
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-inlinechoice-16",
    "guid": "0000-0017-0016",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="仁和寺にある法師" title="国語　徒然草　仁和寺にある法師" adaptive="false" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE">
            <qti-correct-response>
                <qti-value>あらまほしき</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
          <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
            <p>選択肢から言葉を選ん&#x3067;原文を復元せよ。</p>
            <blockquote class="qti-margin-t-3">
              <p>仁和寺にある法師、年寄るま&#x3067;石清水を拝ま&#x3056;りけれ&#x3070;、心うく覚えて、ある時思ひ立ちて、たゞひとり、徒歩より詣&#x3067;けり。極楽寺・高良な&#x3069;を拝みて、か&#x3070;かりと心得て帰りにけり。</p>
              <p>さて、かたへの人にあひて、「年比思ひつること、果し侍りぬ。聞きしにも過&#x304E;て尊くこそおはしけれ。そも、参りたる人&#x3054;とに山へ登りしは、何事かありけん、ゆかしかりしか&#x3069;、神へ参るこそ本意なれと思ひて、山ま&#x3067;は見&#x305A;」と&#x305E;言ひける。</p>
              <p>少しのことにも、先達は<qti-inline-choice-interaction class="qti-input-width-6 qti-orientation-vertical qti3-player-listbox-height-32" data-prompt="選択" response-identifier="RESPONSE" shuffle="false">
                            <qti-inline-choice identifier="あいなき">あいなき</qti-inline-choice>
                            <qti-inline-choice identifier="あらまほしき">あらまほしき</qti-inline-choice>
                            <qti-inline-choice identifier="わろき">わろき</qti-inline-choice>
                          </qti-inline-choice-interaction>事なり。
              </p>
            </blockquote>
          </div>
        </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-inlinechoice-17",
    "guid": "0000-0017-0017",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="vertical-inlinechoice-17" title="国語　徒然草　仁和寺にある法師" adaptive="false" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE">
            <qti-correct-response>
                <qti-value>あらまほしき</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE1"/>
        <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE2"/>
        <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE3"/>
        <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE4"/>
        <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE5"/>
        <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE6"/>
        <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE7"/>
        <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE8"/>
        <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE9"/>
        <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE10"/>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
          <div class="qti-height-112 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
            <p>
              これは、qti-inline-choice-interaction の垂直方向のオ&#x30D7;ションを示しています。
            </p>
            <div class="qti-margin-t-0">
              <p>
                default vertical height: <qti-inline-choice-interaction class=" qti-orientation-vertical qti3-player-listbox-height-32" data-prompt="選択" response-identifier="RESPONSE6">
                  <qti-inline-choice identifier="あいなき">あいなき</qti-inline-choice>
                  <qti-inline-choice identifier="あらまほしき">あらまほしき</qti-inline-choice>
                  <qti-inline-choice identifier="わろき">わろき</qti-inline-choice>
                 </qti-inline-choice-interaction>
              </p>
              <p>
                qti-input-width-1 :<qti-inline-choice-interaction class="qti-input-width-1 qti-orientation-vertical qti3-player-listbox-height-32" data-prompt="選択" response-identifier="RESPONSE">
                  <qti-inline-choice identifier="あいなき">あいなき</qti-inline-choice>
                  <qti-inline-choice identifier="あらまほしき">あらまほしき</qti-inline-choice>
                  <qti-inline-choice identifier="わろき">わろき</qti-inline-choice>
                 </qti-inline-choice-interaction>
              </p>
              <p>
                qti-input-width-2 :<qti-inline-choice-interaction class="qti-input-width-2 qti-orientation-vertical qti3-player-listbox-height-32" data-prompt="選択" response-identifier="RESPONSE1">
                  <qti-inline-choice identifier="あいなき">あいなき</qti-inline-choice>
                  <qti-inline-choice identifier="あらまほしき">あらまほしき</qti-inline-choice>
                  <qti-inline-choice identifier="わろき">わろき</qti-inline-choice>
                 </qti-inline-choice-interaction>
              </p>
              <p>
                qti-input-width-3 :<qti-inline-choice-interaction class="qti-input-width-3 qti-orientation-vertical qti3-player-listbox-height-32" data-prompt="選択" response-identifier="RESPONSE2">
                  <qti-inline-choice identifier="あいなき">あいなき</qti-inline-choice>
                  <qti-inline-choice identifier="あらまほしき">あらまほしき</qti-inline-choice>
                  <qti-inline-choice identifier="わろき">わろき</qti-inline-choice>
               </qti-inline-choice-interaction>
              </p>
              <p>
                qti-input-width-4 :<qti-inline-choice-interaction class="qti-input-width-4 qti-orientation-vertical qti3-player-listbox-height-32" data-prompt="選択" response-identifier="RESPONSE3">
                  <qti-inline-choice identifier="あいなき">あいなき</qti-inline-choice>
                  <qti-inline-choice identifier="あらまほしき">あらまほしき</qti-inline-choice>
                  <qti-inline-choice identifier="わろき">わろき</qti-inline-choice>
                 </qti-inline-choice-interaction>
              </p>
              <p>
                qti-input-width-5 :<qti-inline-choice-interaction class="qti-input-width-5 qti-orientation-vertical qti3-player-listbox-height-32" data-prompt="選択" response-identifier="RESPONSE4">
                  <qti-inline-choice identifier="あいなき">あいなき</qti-inline-choice>
                  <qti-inline-choice identifier="あらまほしき">あらまほしき</qti-inline-choice>
                  <qti-inline-choice identifier="わろき">わろき</qti-inline-choice>
                 </qti-inline-choice-interaction>
              </p>
              <p>
                qti-input-width-6 :<qti-inline-choice-interaction class="qti-input-width-6 qti-orientation-vertical qti3-player-listbox-height-32" data-prompt="選択" response-identifier="RESPONSE5">
                  <qti-inline-choice identifier="あいなき">あいなき</qti-inline-choice>
                  <qti-inline-choice identifier="あらまほしき">あらまほしき</qti-inline-choice>
                  <qti-inline-choice identifier="わろき">わろき</qti-inline-choice>
                 </qti-inline-choice-interaction>
              </p>
              <p>
                qti-input-width-10:<qti-inline-choice-interaction class="qti-input-width-10 qti-orientation-vertical qti3-player-listbox-height-32" data-prompt="選択" response-identifier="RESPONSE7">
                  <qti-inline-choice identifier="あいなき">あいなき</qti-inline-choice>
                  <qti-inline-choice identifier="あらまほしき">あらまほしき</qti-inline-choice>
                  <qti-inline-choice identifier="わろき">わろき</qti-inline-choice>
                 </qti-inline-choice-interaction>
              </p>
              <p>
                qti-input-width-15:<qti-inline-choice-interaction class="qti-input-width-15 qti-orientation-vertical qti3-player-listbox-height-32" data-prompt="選択" response-identifier="RESPONSE8">
                  <qti-inline-choice identifier="あいなき">あいなき</qti-inline-choice>
                  <qti-inline-choice identifier="あらまほしき">あらまほしき</qti-inline-choice>
                  <qti-inline-choice identifier="わろき">わろき</qti-inline-choice>
                 </qti-inline-choice-interaction>
              </p>
              <p>
                qti-input-width-20:<qti-inline-choice-interaction class="qti-input-width-20 qti-orientation-vertical qti3-player-listbox-height-32" data-prompt="選択" response-identifier="RESPONSE9">
                  <qti-inline-choice identifier="あいなき">あいなき</qti-inline-choice>
                  <qti-inline-choice identifier="あらまほしき">あらまほしき</qti-inline-choice>
                  <qti-inline-choice identifier="わろき">わろき</qti-inline-choice>
                 </qti-inline-choice-interaction>
              </p>
              <p>
                qti-input-width-25:<qti-inline-choice-interaction class="qti-input-width-25 qti-orientation-vertical qti3-player-listbox-height-32" data-prompt="選択" response-identifier="RESPONSE10">
                  <qti-inline-choice identifier="あいなき">あいなき</qti-inline-choice>
                  <qti-inline-choice identifier="あらまほしき">あらまほしき</qti-inline-choice>
                  <qti-inline-choice identifier="わろき">わろき</qti-inline-choice>
                 </qti-inline-choice-interaction>
              </p>
            </div>
          </div>
        </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-textentry-18",
    "guid": "0000-0017-0018",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="vertical-textentry-18" title="国語　徒然草　仁和寺にある法師" adaptive="false" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE">
            <qti-correct-response>
                <qti-value>あらまほしき</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
          <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
            <p>空欄に言葉を入れて原文を復元せよ。</p>
            <blockquote class="qti-margin-t-3">
              <p>仁和寺にある法師、年寄るま&#x3067;石清水を拝ま&#x3056;りけれ&#x3070;、心うく覚えて、ある時思ひ立ちて、たゞひとり、徒歩より詣&#x3067;けり。極楽寺・高良な&#x3069;を拝みて、か&#x3070;かりと心得て帰りにけり。</p>
              <p>さて、かたへの人にあひて、「年比思ひつること、果し侍りぬ。聞きしにも過&#x304E;て尊くこそおはしけれ。そも、参りたる人&#x3054;とに山へ登りしは、何事かありけん、ゆかしかりしか&#x3069;、神へ参るこそ本意なれと思ひて、山ま&#x3067;は見&#x305A;」と&#x305E;言ひける。</p>
              <p>少しのことにも、先達は<qti-text-entry-interaction class="qti-input-width-6 qti-orientation-vertical" placeholder-text="ここに記入する" response-identifier="RESPONSE"/>事なり。
              </p>
            </blockquote>
          </div>
        </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-textentry-19",
    "guid": "0000-0017-0019",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" identifier="vertical-textentry-19" title="国語　徒然草　仁和寺にある法師" adaptive="false" time-dependent="false" xml:lang="ja">
        <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE">
            <qti-correct-response>
                <qti-value>あらまほしき</qti-value>
            </qti-correct-response>
        </qti-response-declaration>
        <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE1"/>
        <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE2"/>
        <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE3"/>
        <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE4"/>
        <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE5"/>
        <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE6"/>
        <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE7"/>
        <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE8"/>
        <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE9"/>
        <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE10"/>
        <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
        <qti-item-body>
          <div class="qti-height-112 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
            <p>
              これは、qti-text-entry-interaction の垂直方向のオ&#x30D7;ションを示しています。
            </p>
            <div class="qti-margin-t-0">
              <p>
                default vertical height: <qti-text-entry-interaction class=" qti-orientation-vertical" response-identifier="RESPONSE6" />
              </p>
              <p>
                qti-input-width-1 :<qti-text-entry-interaction class="qti-input-width-1 qti-orientation-vertical"  response-identifier="RESPONSE" />
              </p>
              <p>
                qti-input-width-2 :<qti-text-entry-interaction class="qti-input-width-2 qti-orientation-vertical"  response-identifier="RESPONSE1" />
              </p>
              <p>
                qti-input-width-3 :<qti-text-entry-interaction class="qti-input-width-3 qti-orientation-vertical"  response-identifier="RESPONSE2" />
              </p>
              <p>
                qti-input-width-4 :<qti-text-entry-interaction class="qti-input-width-4 qti-orientation-vertical"  response-identifier="RESPONSE3" />
              </p>
              <p>
                qti-input-width-5 :<qti-text-entry-interaction class="qti-input-width-5 qti-orientation-vertical"  response-identifier="RESPONSE4" />
              </p>
              <p>
                qti-input-width-6 :<qti-text-entry-interaction class="qti-input-width-6 qti-orientation-vertical"  response-identifier="RESPONSE5" />
              </p>
              <p>
                qti-input-width-10:<qti-text-entry-interaction class="qti-input-width-10 qti-orientation-vertical"  response-identifier="RESPONSE7" />
              </p>
              <p>
                qti-input-width-15:<qti-text-entry-interaction class="qti-input-width-15 qti-orientation-vertical"  response-identifier="RESPONSE8" />
              </p>
              <p>
                qti-input-width-20:<qti-text-entry-interaction class="qti-input-width-20 qti-orientation-vertical"  response-identifier="RESPONSE9" />
              </p>
              <p>
                qti-input-width-25:<qti-text-entry-interaction class="qti-input-width-25 qti-orientation-vertical"  response-identifier="RESPONSE10" />
              </p>
            </div>
          </div>
        </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-ext-text-20",
    "guid": "0000-0017-0020",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="vertical-ext-text-20" title="徒然草・第45段" adaptive="false" time-dependent="false" xml:lang="ja">
      <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="string"/>
      <qti-outcome-declaration base-type="float" cardinality="single" external-scored="human" identifier="SCORE"/>
      <qti-item-body>
        <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti-float-right">
          <p>全文を現代語に訳せ。</p>
          <blockquote>
            <p>公世の二位のせうとに、良覚僧正と聞えしは、極めて腹あしき人なりけり。</p>
            <p>坊の傍に、大きなる榎の木のありければ、人、「榎木僧正」とぞ言ひける。この名然るべからずとて、かの木を伐られにけり。その根のありければ、「きりくひの僧正」と言ひけり。いよいよ腹立ちて、きりくひを掘り捨てたりければ、その跡大きなる堀にてありければ、「堀池僧正」とぞ言ひける。</p>
          </blockquote>
          <p>現代語訳</p>
          <qti-extended-text-interaction 
            class="qti-height-lines-3 qti-writing-orientation-vertical-rl"
            expected-length="100" format="plain" placeholder-text="現代語訳"
            response-identifier="RESPONSE">
            <qti-prompt>format="plain" qti-height-lines-3</qti-prompt>
          </qti-extended-text-interaction>
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-ext-text-21",
    "guid": "0000-0017-0021",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="vertical-ext-text-21" title="徒然草・第45段" adaptive="false" time-dependent="false" xml:lang="ja">
      <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="string"/>
      <qti-outcome-declaration base-type="float" cardinality="single" external-scored="human" identifier="SCORE"/>
      <qti-item-body>
        <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti-float-right">
          <p>全文を現代語に訳せ。</p>
          <blockquote>
            <p>公世の二位のせうとに、良覚僧正と聞えしは、極めて腹あしき人なりけり。</p>
            <p>坊の傍に、大きなる榎の木のありければ、人、「榎木僧正」とぞ言ひける。この名然るべからずとて、かの木を伐られにけり。その根のありければ、「きりくひの僧正」と言ひけり。いよいよ腹立ちて、きりくひを掘り捨てたりければ、その跡大きなる堀にてありければ、「堀池僧正」とぞ言ひける。</p>
          </blockquote>
          <p>現代語訳</p>
          <qti-extended-text-interaction 
            class="qti-height-lines-6 qti-writing-orientation-vertical-rl"
            format="plain" placeholder-text="現代語訳"
            response-identifier="RESPONSE">
            <qti-prompt>format="plain" qti-height-lines-6</qti-prompt>
          </qti-extended-text-interaction>
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-ext-text-22",
    "guid": "0000-0017-0022",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="vertical-ext-text-22" title="徒然草・第45段" adaptive="false" time-dependent="false" xml:lang="ja">
      <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="string"/>
      <qti-outcome-declaration base-type="float" cardinality="single" external-scored="human" identifier="SCORE"/>
      <qti-item-body>
        <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti-float-right">
          <p>全文を現代語に訳せ。</p>
          <blockquote>
            <p>公世の二位のせうとに、良覚僧正と聞えしは、極めて腹あしき人なりけり。</p>
            <p>坊の傍に、大きなる榎の木のありければ、人、「榎木僧正」とぞ言ひける。この名然るべからずとて、かの木を伐られにけり。その根のありければ、「きりくひの僧正」と言ひけり。いよいよ腹立ちて、きりくひを掘り捨てたりければ、その跡大きなる堀にてありければ、「堀池僧正」とぞ言ひける。</p>
          </blockquote>
          <p>現代語訳</p>
          <qti-extended-text-interaction 
            class="qti-height-lines-15 qti-writing-orientation-vertical-rl"
            format="plain" placeholder-text="現代語訳"
            response-identifier="RESPONSE">
            <qti-prompt>format="plain" qti-height-lines-15</qti-prompt>
          </qti-extended-text-interaction>
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-ext-text-23",
    "guid": "0000-0017-0023",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="vertical-ext-text-23" title="徒然草・第45段" adaptive="false" time-dependent="false" xml:lang="ja">
      <qti-response-declaration identifier="RESPONSE1" cardinality="single" base-type="string"/>
      <qti-response-declaration identifier="RESPONSE2" cardinality="single" base-type="string"/>
      <qti-outcome-declaration base-type="float" cardinality="single" external-scored="human" identifier="SCORE"/>
      <qti-item-body>
        <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti-float-right">
          <p>全文を現代語に訳せ。</p>
          <blockquote>
            <p>公世の二位のせうとに、良覚僧正と聞えしは、極めて腹あしき人なりけり。</p>
            <p>坊の傍に、大きなる榎の木のありければ、人、「榎木僧正」とぞ言ひける。この名然るべからずとて、かの木を伐られにけり。その根のありければ、「きりくひの僧正」と言ひけり。いよいよ腹立ちて、きりくひを掘り捨てたりければ、その跡大きなる堀にてありければ、「堀池僧正」とぞ言ひける。</p>
          </blockquote>
          <p>現代語訳</p>
          <qti-extended-text-interaction 
            class="qti-height-lines-3 qti-counter-up qti-writing-orientation-vertical-rl"
            format="plain" placeholder-text="現代語訳" expected-length="200"
            response-identifier="RESPONSE1">
            <qti-prompt>format="plain" qti-counter-up</qti-prompt>
          </qti-extended-text-interaction>
          <qti-extended-text-interaction 
            class="qti-height-lines-3 qti-counter-down qti-writing-orientation-vertical-rl"
            format="plain" placeholder-text="現代語訳" expected-length="200"
            response-identifier="RESPONSE2">
            <qti-prompt>format="plain" qti-counter-down</qti-prompt>
          </qti-extended-text-interaction>
          </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-ext-text-24",
    "guid": "0000-0017-0024",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="vertical-ext-text-24" title="徒然草・第45段" adaptive="false" time-dependent="false" xml:lang="ja">
      <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="string"/>
      <qti-outcome-declaration base-type="float" cardinality="single" external-scored="human" identifier="SCORE"/>
      <qti-item-body>
        <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti-float-right">
          <p>全文を現代語に訳せ。</p>
          <blockquote>
            <p>公世の二位のせうとに、良覚僧正と聞えしは、極めて腹あしき人なりけり。</p>
            <p>坊の傍に、大きなる榎の木のありければ、人、「榎木僧正」とぞ言ひける。この名然るべからずとて、かの木を伐られにけり。その根のありければ、「きりくひの僧正」と言ひけり。いよいよ腹立ちて、きりくひを掘り捨てたりければ、その跡大きなる堀にてありければ、「堀池僧正」とぞ言ひける。</p>
          </blockquote>
          <p>現代語訳</p>
          <qti-extended-text-interaction 
            class="qti-height-lines-3 qti-writing-orientation-vertical-rl"
            format="xhtml"
            response-identifier="RESPONSE">
            <qti-prompt>format="xhtml" qti-height-lines-3</qti-prompt>
          </qti-extended-text-interaction>
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-ext-text-25",
    "guid": "0000-0017-0025",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="vertical-ext-text-25" title="徒然草・第45段" adaptive="false" time-dependent="false" xml:lang="ja">
      <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="string"/>
      <qti-outcome-declaration base-type="float" cardinality="single" external-scored="human" identifier="SCORE"/>
      <qti-item-body>
        <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti-float-right">
          <p>全文を現代語に訳せ。</p>
          <blockquote>
            <p>公世の二位のせうとに、良覚僧正と聞えしは、極めて腹あしき人なりけり。</p>
            <p>坊の傍に、大きなる榎の木のありければ、人、「榎木僧正」とぞ言ひける。この名然るべからずとて、かの木を伐られにけり。その根のありければ、「きりくひの僧正」と言ひけり。いよいよ腹立ちて、きりくひを掘り捨てたりければ、その跡大きなる堀にてありければ、「堀池僧正」とぞ言ひける。</p>
          </blockquote>
          <p>現代語訳</p>
          <qti-extended-text-interaction 
            class="qti-height-lines-6 qti-writing-orientation-vertical-rl"
            format="xhtml"
            response-identifier="RESPONSE">
            <qti-prompt>format="xhtml" qti-height-lines-6</qti-prompt>
          </qti-extended-text-interaction>
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-ext-text-26",
    "guid": "0000-0017-0026",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="vertical-ext-text-26" title="徒然草・第45段" adaptive="false" time-dependent="false" xml:lang="ja">
      <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="string"/>
      <qti-outcome-declaration base-type="float" cardinality="single" external-scored="human" identifier="SCORE"/>
      <qti-item-body>
        <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti-float-right">
          <p>全文を現代語に訳せ。</p>
          <blockquote>
            <p>公世の二位のせうとに、良覚僧正と聞えしは、極めて腹あしき人なりけり。</p>
            <p>坊の傍に、大きなる榎の木のありければ、人、「榎木僧正」とぞ言ひける。この名然るべからずとて、かの木を伐られにけり。その根のありければ、「きりくひの僧正」と言ひけり。いよいよ腹立ちて、きりくひを掘り捨てたりければ、その跡大きなる堀にてありければ、「堀池僧正」とぞ言ひける。</p>
          </blockquote>
          <p>現代語訳</p>
          <qti-extended-text-interaction 
            class="qti-height-lines-15 qti-writing-orientation-vertical-rl"
            format="xhtml"
            response-identifier="RESPONSE">
            <qti-prompt>format="xhtml" qti-height-lines-15</qti-prompt>
          </qti-extended-text-interaction>
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "vertical-ext-text-27",
    "guid": "0000-0017-0027",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="vertical-ext-text-27" title="徒然草・第45段" adaptive="false" time-dependent="false" xml:lang="ja">
      <qti-response-declaration identifier="RESPONSE1" cardinality="single" base-type="string"/>
      <qti-response-declaration identifier="RESPONSE2" cardinality="single" base-type="string"/>
      <qti-outcome-declaration base-type="float" cardinality="single" external-scored="human" identifier="SCORE"/>
      <qti-item-body>
        <div class="qti-height-96 qti3-player-writing-mode-vertical-rl qti-float-right">
          <p>全文を現代語に訳せ。</p>
          <blockquote>
            <p>公世の二位のせうとに、良覚僧正と聞えしは、極めて腹あしき人なりけり。</p>
            <p>坊の傍に、大きなる榎の木のありければ、人、「榎木僧正」とぞ言ひける。この名然るべからずとて、かの木を伐られにけり。その根のありければ、「きりくひの僧正」と言ひけり。いよいよ腹立ちて、きりくひを掘り捨てたりければ、その跡大きなる堀にてありければ、「堀池僧正」とぞ言ひける。</p>
          </blockquote>
          <p>現代語訳</p>
          <qti-extended-text-interaction 
            class="qti-height-lines-3 qti-counter-up qti-writing-orientation-vertical-rl"
            format="xhtml" expected-length="200"
            response-identifier="RESPONSE1">
            <qti-prompt>format="xhtml" qti-counter-up</qti-prompt>
          </qti-extended-text-interaction>
          <qti-extended-text-interaction 
            class="qti-height-lines-3 qti-counter-down qti-writing-orientation-vertical-rl"
            format="xhtml" expected-length="200"
            response-identifier="RESPONSE2">
            <qti-prompt>format="xhtml" qti-counter-down</qti-prompt>
          </qti-extended-text-interaction>
          </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q10-hotspot-example-1",
    "guid": "0000-0018-0001",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="hotspot-example-1" title="Q10 Hotspot Interaction - Single Cardinality" adaptive="false" time-dependent="false">
    <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE">
      <qti-correct-response>
        <qti-value>C</qti-value>
      </qti-correct-response>
    </qti-response-declaration>	
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-item-body>
      <p>
        The picture below illustrates four of the most popular destinations for air travelers arriving
        in the United Kingdom: London, Manchester, Edinburgh and Glasgow. 
        Please <strong>choose London</strong>.
      </p>
    
      <qti-hotspot-interaction max-choices="1" response-identifier="RESPONSE">
        <img src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/adc9fc20-beb6-4200-8684-1067e8a48149/images/ukair.png" height="280" width="206" alt="Map of the United Kingdom" />
        <qti-hotspot-choice coords="77,115,10" identifier="A" shape="circle"/>
        <qti-hotspot-choice coords="118,184,10" identifier="B" shape="circle"/>
        <qti-hotspot-choice coords="150,235,10" identifier="C" shape="circle"/>
        <qti-hotspot-choice coords="96,114,10" identifier="D" shape="circle"/>
      </qti-hotspot-interaction>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "q10-hotspot-example-2",
    "guid": "0000-0018-0002",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="hotspot-example-2" title="Q10 Hotspot Interaction - Multiple Cardinality" adaptive="false" time-dependent="false">
    <qti-response-declaration base-type="identifier" cardinality="multiple" identifier="RESPONSE">
      <qti-correct-response>
        <qti-value>A</qti-value>
        <qti-value>B</qti-value>
        <qti-value>D</qti-value>
      </qti-correct-response>
    </qti-response-declaration>	
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-item-body>
      <p>
        The picture below illustrates four of the most popular destinations for air travelers arriving
        in the United Kingdom: London, Manchester, Edinburgh and Glasgow. 
        Please <strong>choose all cities North of London</strong>.
      </p>
    
      <qti-hotspot-interaction max-choices="0" response-identifier="RESPONSE">
        <img src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/adc9fc20-beb6-4200-8684-1067e8a48149/images/ukair.png" height="280" width="206" alt="Map of the United Kingdom" />
        <qti-hotspot-choice coords="77,115,10" identifier="A" shape="circle"/>
        <qti-hotspot-choice coords="118,184,10" identifier="B" shape="circle"/>
        <qti-hotspot-choice coords="150,235,10" identifier="C" shape="circle"/>
        <qti-hotspot-choice coords="96,114,10" identifier="D" shape="circle"/>
      </qti-hotspot-interaction>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "q10-hotspot-example-3",
    "guid": "0000-0018-0003",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="hotspot-example-3" title="Q10 Hotspot Interaction - Hotspot shapes" adaptive="false" time-dependent="false">
    <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE">
      <qti-correct-response>
        <qti-value>i4</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
      <qti-default-value>
        <qti-value>0</qti-value>
      </qti-default-value>
    </qti-outcome-declaration>
    <qti-item-body>
      <p>In the following image, which part of the plant is the rhizome?</p>
      <p>Select a highlighted part of the image to indicate your answer.</p>
      
      <qti-hotspot-interaction max-choices="1" min-choices="1" response-identifier="RESPONSE">
        <img src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/bcedddb0-1a90-4c4b-9f69-953f63c510a4/images/plants.svg" height="680" width="680" alt="A diagram of a flowering water lily showing parts above the water, parts below the water, and parts under the ground." />
        <qti-hotspot-choice coords="243,129,221,130,204,133,186,140,172,146,159,155,149,165,146,175,147,183,151,189,159,194,173,198,187,199,203,199,222,196,241,189,261,179,274,169,284,155,281,142,272,136,260,131,243,129" identifier="i1" shape="poly"/>
        <qti-hotspot-choice coords="330,118,357,108,364,138,330,118" identifier="i2" shape="poly"/>
        <qti-hotspot-choice coords="379,80,14" identifier="i3" shape="circle"/>
        <qti-hotspot-choice coords="337,493,194,591,360,531,337,493" identifier="i4" shape="poly"/>
      </qti-hotspot-interaction>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "q10-hotspot-interaction-sv-1",
    "guid": "0000-0018-0004",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
      identifier="q10-hotspot-sv-1" title="Q10 Hotspot - (SV 1) - selections theming"
      time-dependent="false" adaptive="false">
      <qti-response-declaration base-type="identifier" cardinality="multiple" identifier="RESPONSE1">
        <qti-correct-response>
          <qti-value>A</qti-value>
          <qti-value>B</qti-value>
          <qti-value>D</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE2">
        <qti-correct-response>
          <qti-value>C</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-response-declaration base-type="identifier" cardinality="multiple" identifier="RESPONSE3"/>
      <qti-response-declaration base-type="identifier" cardinality="multiple" identifier="RESPONSE4"/>
    
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
      <qti-item-body>
        <div>
          <div class="qti-layout-row">
            <div class="qti-layout-col6">
          
              <h3 class="semantic-marker">Hotspot Selections Light</h3>
              <hr/>
              
              <p>
                The picture below illustrates four of the most popular destinations for air travelers arriving
                in the United Kingdom: London, Manchester, Edinburgh and Glasgow.
                Please <span class="qti-underline">choose all of the cities North of London</span>.
              </p>
            
              <qti-hotspot-interaction class="qti-selections-light qti-margin-x-auto qti-width-52" max-choices="0" response-identifier="RESPONSE1">
                <img src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/75f0bc1a-a836-41ac-a2e7-7cfe6520b771/images/ukair.png" height="280"  width="206" alt="Map of the United Kingdom" />
                <qti-hotspot-choice coords="77,115,10" identifier="A" shape="circle"/>
                <qti-hotspot-choice coords="118,184,10" identifier="B" shape="circle"/>
                <qti-hotspot-choice coords="150,235,10" identifier="C" shape="circle"/>
                <qti-hotspot-choice coords="96,114,10" identifier="D" shape="circle"/>
              </qti-hotspot-interaction>	
            
            </div>
            <div class="qti-layout-col6">
          
              <h3 class="semantic-marker">Hotspot Selections Dark</h3>
              <hr/>
              
              <p>
                The picture below illustrates four of the most popular destinations for air travelers arriving
                in the United Kingdom: London, Manchester, Edinburgh and Glasgow. 
                Please <span class="qti-underline">choose London</span>.
              </p>
              
              <qti-hotspot-interaction class="qti-selections-dark qti-margin-x-auto qti-width-52" max-choices="1" response-identifier="RESPONSE2">
                <img src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/75f0bc1a-a836-41ac-a2e7-7cfe6520b771/images/ukair.png" height="280" width="206" alt="Map of the United Kingdom" />
                <qti-hotspot-choice coords="77,115,10" identifier="A" shape="circle"/>
                <qti-hotspot-choice coords="118,184,10" identifier="B" shape="circle"/>
                <qti-hotspot-choice coords="150,235,10" identifier="C" shape="circle"/>
                <qti-hotspot-choice coords="96,114,10" identifier="D" shape="circle"/>
              </qti-hotspot-interaction>
    
            </div>
          </div>
        
          <br/><br/>
        
          <div class="qti-layout-row">
            <div class="qti-layout-col6">
        
              <h3 class="semantic-marker">Hotspot Selections Light - Unselected Hidden</h3>
              <hr/>
              
              <p>
                The picture below illustrates four of the most popular destinations for air travelers arriving
                in the United Kingdom: London, Manchester, Edinburgh and Glasgow.
                Please <span class="qti-underline">choose all of the cities North of London</span>.
              </p>
              
              <qti-hotspot-interaction class="qti-selections-light qti-unselected-hidden qti-margin-x-auto qti-width-52" max-choices="0" response-identifier="RESPONSE3">
                <img src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/75f0bc1a-a836-41ac-a2e7-7cfe6520b771/images/ukair.png" height="280" width="206" alt="Map of the United Kingdom" />
                <qti-hotspot-choice coords="77,115,10" identifier="A" shape="circle"/>
                <qti-hotspot-choice coords="118,184,10" identifier="B" shape="circle"/>
                <qti-hotspot-choice coords="150,235,10" identifier="C" shape="circle"/>
                <qti-hotspot-choice coords="96,114,10" identifier="D" shape="circle"/>
              </qti-hotspot-interaction>	
            
            </div>
            <div class="qti-layout-col6">
          
              <h3 class="semantic-marker">Hotspot Selections Dark - Unselected Hidden</h3>
              <hr/>
              
              <p>
                The picture below illustrates four of the most popular destinations for air travelers arriving
                in the United Kingdom: London, Manchester, Edinburgh and Glasgow.
                Please <span class="qti-underline">choose all of the cities North of London</span>.
              </p>
              
              <qti-hotspot-interaction class="qti-selections-dark qti-unselected-hidden qti-margin-x-auto qti-width-52" max-choices="0" response-identifier="RESPONSE4">
                <img src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/75f0bc1a-a836-41ac-a2e7-7cfe6520b771/images/ukair.png" height="280" width="206" alt="Map of the United Kingdom" />
                <qti-hotspot-choice coords="77,115,10" identifier="A" shape="circle"/>
                <qti-hotspot-choice coords="118,184,10" identifier="B" shape="circle"/>
                <qti-hotspot-choice coords="150,235,10" identifier="C" shape="circle"/>
                <qti-hotspot-choice coords="96,114,10" identifier="D" shape="circle"/>
              </qti-hotspot-interaction>
    
            </div>
          </div>
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q10-hotspot-interaction-sv-2",
    "guid": "0000-0018-0005",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
      identifier="q10-hotspot-sv-2" title="Q10 Hotspot - (SV 2) - custom messages" 
      time-dependent="false" adaptive="false">
      <qti-response-declaration base-type="identifier" cardinality="multiple" identifier="RESPONSE1">
        <qti-correct-response>
          <qti-value>A</qti-value>
          <qti-value>B</qti-value>
          <qti-value>D</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE2">
        <qti-correct-response>
          <qti-value>C</qti-value>
        </qti-correct-response>
      </qti-response-declaration>	
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
      <qti-item-body>
        <div class="qti-layout-row">
          <div class="qti-layout-col6">
          
            <h2 class="semantic-marker">Hotspot Interaction (Multiple Cardinality)</h2>
            <hr/>
            
            <p>
              The picture below illustrates four of the most popular destinations for air travelers arriving
              in the United Kingdom: London, Manchester, Edinburgh and Glasgow.
              Please <span class="qti-underline">choose all of the cities North of London</span>.
            </p>
            
            <p>
              <strong>Demonstrates max-choices=3, min-choices=1, data-max-selections-message 
              and data-min-selections-message</strong>
            </p>
            
            <qti-hotspot-interaction max-choices="3" min-choices="1" data-max-selections-message="You've chosen too many cities!" data-min-selections-message="Please choose at least one city." response-identifier="RESPONSE1">
              <img src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/47a1eadb-f401-4c6b-b9bc-a1f7ce2719a7/images/ukair.png" height="280" width="206" alt="Map of the United Kingdom" />
              <qti-hotspot-choice coords="77,115,10" identifier="A" shape="circle"/>
              <qti-hotspot-choice coords="118,184,10" identifier="B" shape="circle"/>
              <qti-hotspot-choice coords="150,235,10" identifier="C" shape="circle"/>
              <qti-hotspot-choice coords="96,114,10" identifier="D" shape="circle"/>
            </qti-hotspot-interaction>	
            
          </div>
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "match-example-1",
    "guid": "0000-0019-0001",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="utf-8" standalone="no"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      adaptive="false" identifier="match-example-1" time-dependent="false" title="Match Example 1">
    <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE">
      <qti-correct-response>
        <qti-value>C R</qti-value>
        <qti-value>D M</qti-value>
        <qti-value>L M</qti-value>
        <qti-value>P T</qti-value>
      </qti-correct-response>
      <qti-mapping default-value="0">
        <qti-map-entry map-key="C R" mapped-value="1"/>
        <qti-map-entry map-key="D M" mapped-value="0.5"/>
        <qti-map-entry map-key="L M" mapped-value="0.5"/>
        <qti-map-entry map-key="P T" mapped-value="1"/>
      </qti-mapping>
    </qti-response-declaration>
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
      <qti-default-value>
        <qti-value>0.0</qti-value>
      </qti-default-value>
    </qti-outcome-declaration>
    <qti-item-body>
      <qti-match-interaction max-associations="4" response-identifier="RESPONSE">
        <qti-prompt>Match the following characters to the Shakespeare play they appeared in:</qti-prompt>
        <qti-simple-match-set>
          <qti-simple-associable-choice id="c1" identifier="C" match-max="1" aria-label="Capulet">Capulet</qti-simple-associable-choice>
          <qti-simple-associable-choice id="c2" identifier="D" match-max="1" aria-label="Demetrius">Demetrius</qti-simple-associable-choice>
          <qti-simple-associable-choice id="c3" identifier="L" match-max="1" aria-label="Lysander">Lysander</qti-simple-associable-choice>
          <qti-simple-associable-choice id="c4" identifier="P" match-max="1" aria-label="Prospero">Prospero</qti-simple-associable-choice>
        </qti-simple-match-set>
        <qti-simple-match-set>
          <qti-simple-associable-choice id="c5" identifier="M" match-max="4" aria-label="A Midsummer-Night's Dream">A Midsummer-Night's Dream</qti-simple-associable-choice>
          <qti-simple-associable-choice id="c6" identifier="R" match-max="4" aria-label="Romeo and Juliet">Romeo and Juliet</qti-simple-associable-choice>
          <qti-simple-associable-choice id="c7" identifier="T" match-max="4" aria-label="The Tempest">The Tempest</qti-simple-associable-choice>
        </qti-simple-match-set>
      </qti-match-interaction>
    </qti-item-body>
    <qti-response-processing>
      <qti-response-condition>
        <qti-response-if>
          <qti-is-null>
            <qti-variable identifier="RESPONSE"/>
          </qti-is-null>
          <qti-set-outcome-value identifier="SCORE">
            <qti-base-value base-type="float">0.0</qti-base-value>
          </qti-set-outcome-value>
        </qti-response-if>
        <qti-response-else>
          <qti-set-outcome-value identifier="SCORE">
            <qti-map-response identifier="RESPONSE"/>
          </qti-set-outcome-value>
        </qti-response-else>
      </qti-response-condition>
    </qti-response-processing>
    </qti-assessment-item>`
  },
  {
    "identifier": "match-example-2",
    "guid": "0000-0019-0002",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      adaptive="false" identifier="match-example-2" time-dependent="false" title="Match Example 2">
    <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE">
      <qti-correct-response>
        <qti-value>r2 h1</qti-value>
        <qti-value>r2 h3</qti-value>
        <qti-value>r4 h3</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
      <qti-default-value>
        <qti-value>0</qti-value>
      </qti-default-value>
    </qti-outcome-declaration>
    <qti-item-body>
      <div>
        <p>Which properties do the following animal classes have?</p>
    
        <qti-match-interaction max-associations="3" response-identifier="RESPONSE">
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="r1" match-max="0">
              <p>Asexual</p>
            </qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="r2" match-max="0">
              <p>Endothermic</p>
            </qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="r3" match-max="0">
              <p>Possess Gills</p>
            </qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="r4" match-max="0">
              <p>Bear Live Young</p>
            </qti-simple-associable-choice>
          </qti-simple-match-set>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="h1" match-max="2">Birds</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="h2" match-max="2">Reptiles</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="h3" match-max="2">Mammals</qti-simple-associable-choice>
          </qti-simple-match-set>
        </qti-match-interaction>
      </div>
      <p>Select all choices that apply.</p>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "q13-match-interaction-sv-1",
    "guid": "0000-0019-0003",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="utf-8" standalone="no"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="q13-match-interaction-sv-1" title="Match - (SV 1) - choice-target positioning" 
      time-dependent="false" adaptive="false">
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE1" />
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE2" />
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE3" />
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE4" />
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
        <qti-default-value>
          <qti-value>0.0</qti-value>
        </qti-default-value>
      </qti-outcome-declaration>
      <qti-item-body>
    
        <p>
          Delivery systems may implement Match Interaction's in a <em>visual non-tabular</em> fashion.  When they do so, the shared 
          vocabulary is intended to provide clarity regarding the visual positioning of the two Simple Match Sets.
        </p>
        
        <p>
          The following examples demonstrate shared vocabulary describing the visual orientation of the list of match <em>choices</em>; i.e., the 
          choices of the first Simple Match Set, in relation to the list of match targets; i.e., the choices of the second Simple Match Set.
        </p>
        
        <qti-match-interaction class="qti-choices-top" max-associations="4" response-identifier="RESPONSE1">
          <qti-prompt>Demonstrates qti-choices-top</qti-prompt>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="C" match-max="1" aria-label="Capulet">Capulet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="D" match-max="1" aria-label="Demetrius">Demetrius</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="L" match-max="1" aria-label="Lysander">Lysander</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="P" match-max="1" aria-label="Prospero">Prospero</qti-simple-associable-choice>
          </qti-simple-match-set>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="M" match-max="4" aria-label="A Midsummer-Night's Dream">A Midsummer-Night's Dream</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="R" match-max="4" aria-label="Romeo and Juliet">Romeo and Juliet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="T" match-max="4" aria-label="The Tempest">The Tempest</qti-simple-associable-choice>
          </qti-simple-match-set>
        </qti-match-interaction>
        
        <qti-match-interaction class="qti-choices-bottom" max-associations="4" response-identifier="RESPONSE2">
          <qti-prompt>Demonstrates qti-choices-bottom</qti-prompt>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="C" match-max="1" aria-label="Capulet">Capulet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="D" match-max="1" aria-label="Demetrius">Demetrius</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="L" match-max="1" aria-label="Lysander">Lysander</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="P" match-max="1" aria-label="Prospero">Prospero</qti-simple-associable-choice>
          </qti-simple-match-set>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="M" match-max="4" aria-label="A Midsummer-Night's Dream">A Midsummer-Night's Dream</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="R" match-max="4" aria-label="Romeo and Juliet">Romeo and Juliet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="T" match-max="4" aria-label="The Tempest">The Tempest</qti-simple-associable-choice>
          </qti-simple-match-set>
        </qti-match-interaction>
    
        <qti-match-interaction class="qti-choices-left" max-associations="4" response-identifier="RESPONSE3">
          <qti-prompt>Demonstrates qti-choices-left</qti-prompt>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="C" match-max="1" aria-label="Capulet">Capulet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="D" match-max="1" aria-label="Demetrius">Demetrius</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="L" match-max="1" aria-label="Lysander">Lysander</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="P" match-max="1" aria-label="Prospero">Prospero</qti-simple-associable-choice>
          </qti-simple-match-set>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="M" match-max="4" aria-label="A Midsummer-Night's Dream">A Midsummer-Night's Dream</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="R" match-max="4" aria-label="Romeo and Juliet">Romeo and Juliet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="T" match-max="4" aria-label="The Tempest">The Tempest</qti-simple-associable-choice>
          </qti-simple-match-set>
        </qti-match-interaction>
        
        <qti-match-interaction class="qti-choices-right" max-associations="4" response-identifier="RESPONSE4">
          <qti-prompt>Demonstrates qti-choices-right</qti-prompt>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="C" match-max="1" aria-label="Capulet">Capulet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="D" match-max="1" aria-label="Demetrius">Demetrius</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="L" match-max="1" aria-label="Lysander">Lysander</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="P" match-max="1" aria-label="Prospero">Prospero</qti-simple-associable-choice>
          </qti-simple-match-set>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="M" match-max="4" aria-label="A Midsummer-Night's Dream">A Midsummer-Night's Dream</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="R" match-max="4" aria-label="Romeo and Juliet">Romeo and Juliet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="T" match-max="4" aria-label="The Tempest">The Tempest</qti-simple-associable-choice>
          </qti-simple-match-set>
        </qti-match-interaction>
        
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q13-match-interaction-sv-2",
    "guid": "0000-0019-0004",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="utf-8" standalone="no"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="q13-match-interaction-sv-2" title="Match - (SV 2) - match tabular" 
      time-dependent="false" adaptive="false">
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE1" />
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE2" />
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE3" />
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
        <qti-default-value>
          <qti-value>0.0</qti-value>
        </qti-default-value>
      </qti-outcome-declaration>
      <qti-item-body>
    
        <p>
          Delivery systems may implement Match Interaction's in a <em>visual Tabular</em> fashion.  When they do so, the shared 
          vocabulary is intended to provide visual styles and content to improve interoperability and visual consistency.
        </p>
        
        <p>
          Setting class to <strong>qti-match-tabular</strong> renders a visual table with the choices of the first Simple 
          Match Set as the table Row headings, and the choices of the second Simple Match Set as the table Column headings.
          Class <strong>qti-header-hidden</strong>, and data- attribute <strong>data-first-column-header</strong> are only 
          relevant when <strong>qti-match-tabular</strong> is specified.
        </p>
        
        <qti-match-interaction class="qti-match-tabular" max-associations="4" response-identifier="RESPONSE1">
          <qti-prompt>Demonstrates qti-match-tabular</qti-prompt>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="C" match-max="1" aria-label="Capulet">Capulet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="D" match-max="1" aria-label="Demetrius">Demetrius</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="L" match-max="1" aria-label="Lysander">Lysander</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="P" match-max="1" aria-label="Prospero">Prospero</qti-simple-associable-choice>
          </qti-simple-match-set>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="M" match-max="4" aria-label="A Midsummer-Night's Dream">A Midsummer-Night's Dream</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="R" match-max="4" aria-label="Romeo and Juliet">Romeo and Juliet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="T" match-max="4" aria-label="The Tempest">The Tempest</qti-simple-associable-choice>
          </qti-simple-match-set>
        </qti-match-interaction>
        
        <qti-match-interaction class="qti-match-tabular qti-header-hidden" max-associations="4" response-identifier="RESPONSE2">
          <qti-prompt>Demonstrates qti-match-tabular and qti-header-hidden</qti-prompt>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="C" match-max="1" aria-label="Capulet">Capulet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="D" match-max="1" aria-label="Demetrius">Demetrius</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="L" match-max="1" aria-label="Lysander">Lysander</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="P" match-max="1" aria-label="Prospero">Prospero</qti-simple-associable-choice>
          </qti-simple-match-set>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="M" match-max="4" aria-label="A Midsummer-Night's Dream">A Midsummer-Night's Dream</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="R" match-max="4" aria-label="Romeo and Juliet">Romeo and Juliet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="T" match-max="4" aria-label="The Tempest">The Tempest</qti-simple-associable-choice>
          </qti-simple-match-set>
        </qti-match-interaction>
    
        <qti-match-interaction class="qti-match-tabular" data-first-column-header="Characters" max-associations="4" response-identifier="RESPONSE3">
          <qti-prompt>Demonstrates qti-match-tabular and data-first-column-header="Characters"</qti-prompt>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="C" match-max="1" aria-label="Capulet">Capulet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="D" match-max="1" aria-label="Demetrius">Demetrius</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="L" match-max="1" aria-label="Lysander">Lysander</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="P" match-max="1" aria-label="Prospero">Prospero</qti-simple-associable-choice>
          </qti-simple-match-set>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="M" match-max="4" aria-label="A Midsummer-Night's Dream">A Midsummer-Night's Dream</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="R" match-max="4" aria-label="Romeo and Juliet">Romeo and Juliet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="T" match-max="4" aria-label="The Tempest">The Tempest</qti-simple-associable-choice>
          </qti-simple-match-set>
        </qti-match-interaction>
        
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q13-match-interaction-sv-3",
    "guid": "0000-0019-0005",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="utf-8" standalone="no"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="q13-match-interaction-sv-3" title="Match - (SV 3) - custom messages" 
      time-dependent="false" adaptive="false">
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE1" />
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE2" />
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE3" />
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
        <qti-default-value>
          <qti-value>0.0</qti-value>
        </qti-default-value>
      </qti-outcome-declaration>
      <qti-item-body>
    
        <p>
          A Delivery Platform's <em>default</em> min-association and max-association constraint violation messages are left to the 
          Delivery Platform.  Platform <em>default</em> constraint violation messages may be overriden by using 
          the <strong>data-max-selections-message</strong> and <strong>data-min-selections-message</strong> attributes accordingly.
        </p>
    
        <qti-match-interaction max-associations="4" data-max-selections-message="You cannot make more than 4 matches!" response-identifier="RESPONSE1">
          <qti-prompt>Demonstrates <em>max-associations=4 and custom data-max-selections-message</em></qti-prompt>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="C" match-max="0" aria-label="Capulet">Capulet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="D" match-max="0" aria-label="Demetrius">Demetrius</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="L" match-max="0" aria-label="Lysander">Lysander</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="P" match-max="0" aria-label="Prospero">Prospero</qti-simple-associable-choice>
          </qti-simple-match-set>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="M" match-max="4" aria-label="A Midsummer-Night's Dream">A Midsummer-Night's Dream</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="R" match-max="4" aria-label="Romeo and Juliet">Romeo and Juliet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="T" match-max="4" aria-label="The Tempest">The Tempest</qti-simple-associable-choice>
          </qti-simple-match-set>
        </qti-match-interaction>
    
        <qti-match-interaction max-associations="4" min-associations="2" data-min-selections-message="You must make at least 2 matches!" response-identifier="RESPONSE2">
          <qti-prompt>Demonstrates <em>min-associations=2 and custom data-min-selections-message</em></qti-prompt>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="C" match-max="1" aria-label="Capulet">Capulet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="D" match-max="1" aria-label="Demetrius">Demetrius</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="L" match-max="1" aria-label="Lysander">Lysander</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="P" match-max="1" aria-label="Prospero">Prospero</qti-simple-associable-choice>
          </qti-simple-match-set>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="M" match-max="4" aria-label="A Midsummer-Night's Dream">A Midsummer-Night's Dream</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="R" match-max="4" aria-label="Romeo and Juliet">Romeo and Juliet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="T" match-max="4" aria-label="The Tempest">The Tempest</qti-simple-associable-choice>
          </qti-simple-match-set>
        </qti-match-interaction>
    
        <div>
          <hr />
        </div>
    
        <p>
          The max-associations attribute is optional and defaults to a value of 1 when unspecified.  The following interaction has no 
          max-associations attribute and no data-max-selections-message attribute.   Consequently, a Delivery Platform must trigger its
          <em>default</em> max-associations message when the candidate attempts to make more than 1 match in the following interaction.
        </p>
    
        <qti-match-interaction response-identifier="RESPONSE3">
          <qti-prompt>Demonstrates default max-associations when more than 1 match is made.</qti-prompt>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="C" match-max="1" aria-label="Capulet">Capulet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="D" match-max="1" aria-label="Demetrius">Demetrius</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="L" match-max="1" aria-label="Lysander">Lysander</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="P" match-max="1" aria-label="Prospero">Prospero</qti-simple-associable-choice>
          </qti-simple-match-set>
          <qti-simple-match-set>
            <qti-simple-associable-choice identifier="M" match-max="4" aria-label="A Midsummer-Night's Dream">A Midsummer-Night's Dream</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="R" match-max="4" aria-label="Romeo and Juliet">Romeo and Juliet</qti-simple-associable-choice>
            <qti-simple-associable-choice identifier="T" match-max="4" aria-label="The Tempest">The Tempest</qti-simple-associable-choice>
          </qti-simple-match-set>
        </qti-match-interaction>
    
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "gap-match-example-1",
    "guid": "0000-0020-0001",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="gap-match-example-1" title="Gap Match Example 1"
      time-dependent="false" adaptive="false">
      <qti-response-declaration identifier="RESPONSE" cardinality="multiple" base-type="directedPair">
        <qti-correct-response>
          <qti-value>W G1</qti-value>
          <qti-value>Su G2</qti-value>
        </qti-correct-response>
        <qti-mapping default-value="-1" lower-bound="0">
          <qti-map-entry map-key="W G1" mapped-value="1"/>
          <qti-map-entry map-key="Su G2" mapped-value="2"/>
        </qti-mapping>
      </qti-response-declaration>
      <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
      <qti-item-body>
        <qti-gap-match-interaction max-associations="0" response-identifier="RESPONSE">
          <qti-prompt>Identify the missing words in this famous quote from Shakespeare's Richard III.</qti-prompt>
          <qti-gap-text identifier="W" match-max="1">winter</qti-gap-text>
          <qti-gap-text identifier="Sp" match-max="1">spring</qti-gap-text>
          <qti-gap-text identifier="Su" match-max="1">summer</qti-gap-text>
          <qti-gap-text identifier="A" match-max="1">autumn</qti-gap-text>
          <blockquote>
            <p>
              Now is the <qti-gap identifier="G1"/> of our discontent<br/>
              Made glorious <qti-gap identifier="G2"/> by this sun of York;<br/> 
              And all the clouds that lour'd upon our house<br/>
              In the deep bosom of the ocean buried.
            </p>
          </blockquote>
        </qti-gap-match-interaction>
      </qti-item-body>
      <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/map_response.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "gap-match-example-2",
    "guid": "0000-0020-0002",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd http://www.w3.org/1998/Math/MathML https://purl.imsglobal.org/spec/mathml/v3p0/schema/xsd/mathml3.xsd" 
      identifier="gap-match-example-2" title="Gap Match Example 2" 
      adaptive="false" time-dependent="false">
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE">
        <qti-correct-response>
          <qti-value>s1 t1</qti-value>
          <qti-value>s2 t3</qti-value>
          <qti-value>s3 t5</qti-value>
          <qti-value>s4 t2</qti-value>
        </qti-correct-response>
        <qti-mapping default-value="0" lower-bound="0.00" upper-bound="4">
          <qti-map-entry map-key="s1 t1" mapped-value="1"/>
          <qti-map-entry map-key="s1 t3" mapped-value="1"/>
          <qti-map-entry map-key="s1 t5" mapped-value="1"/>
          <qti-map-entry map-key="s1 t7" mapped-value="1"/>
          <qti-map-entry map-key="s2 t1" mapped-value="1"/>
          <qti-map-entry map-key="s2 t3" mapped-value="1"/>
          <qti-map-entry map-key="s2 t5" mapped-value="1"/>
          <qti-map-entry map-key="s2 t7" mapped-value="1"/>
          <qti-map-entry map-key="s3 t1" mapped-value="1"/>
          <qti-map-entry map-key="s3 t3" mapped-value="1"/>
          <qti-map-entry map-key="s3 t5" mapped-value="1"/>
          <qti-map-entry map-key="s3 t7" mapped-value="1"/>
          <qti-map-entry map-key="s4 t2" mapped-value="1"/>
          <qti-map-entry map-key="s4 t4" mapped-value="1"/>
          <qti-map-entry map-key="s4 t6" mapped-value="1"/>
          <qti-map-entry map-key="s4 t8" mapped-value="1"/>
        </qti-mapping>
      </qti-response-declaration>
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
        <qti-default-value>
          <qti-value>0</qti-value>
        </qti-default-value>
      </qti-outcome-declaration>
      <qti-item-body>
        <div>
          <p>Indicate whether each of the following numbers is rational or irrational.</p>
        </div>
        <qti-gap-match-interaction max-associations="4" response-identifier="RESPONSE">
          <qti-gap-text identifier="s1" match-max="1">
            <span><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="ee to the power of zero" display="inline" overflow="scroll"><mstyle><mrow><msup><mrow><mi>e</mi></mrow><mrow><mn>0</mn></mrow></msup></mrow></mstyle></math></span>
          </qti-gap-text>
          <qti-gap-text identifier="s2" match-max="1">
            <span><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="cosine of pie" display="inline" overflow="scroll"><mstyle><mrow><mrow><mi>cos</mi><mrow><mo>(</mo><mi>π</mi><mo>)</mo></mrow></mrow></mrow></mstyle></math></span>
          </qti-gap-text>
          <qti-gap-text identifier="s3" match-max="1">
            <span><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="fraction, numerator absolute value of negative twenty one, denominator 3" display="inline" overflow="scroll"><mstyle><mrow><mfrac><mrow><mo>|</mo><mo>−</mo><mn>21</mn><mo>|</mo></mrow><mrow><mn>3</mn></mrow></mfrac></mrow></mstyle></math></span>
          </qti-gap-text>
          <qti-gap-text identifier="s4" match-max="1">
            <span><math xmlns="http://www.w3.org/1998/Math/MathML" alttext="square root of 5" display="inline" overflow="scroll"><mstyle><mrow><msqrt><mrow><mn>5</mn></mrow></msqrt></mrow></mstyle></math></span>
          </qti-gap-text>
          
          <div>
            <table>
              <thead>
                <tr>
                  <th/>
                  <th><strong>Category 1: Rational</strong></th>
                  <th><strong>Category 2: Irrational</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th/>
                  <td><p><qti-gap identifier="t1"/></p></td>
                  <td><p><qti-gap identifier="t2"/></p></td>
                </tr>
                <tr>
                  <th/>
                  <td><p><qti-gap identifier="t3"/></p></td>
                  <td><p><qti-gap identifier="t4"/></p></td>
                </tr>
                <tr>
                  <th/>
                  <td><p><qti-gap identifier="t5"/></p></td>
                  <td><p><qti-gap identifier="t6"/></p></td>
                </tr>
                <tr>
                  <th/>
                  <td><p><qti-gap identifier="t7"/></p></td>
                  <td><p><qti-gap identifier="t8"/></p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </qti-gap-match-interaction>
        <div>
          <p>Move each number to the response area for the appropriate category.</p>
        </div>
      </qti-item-body>
      <qti-response-processing>
        <qti-response-condition>
          <qti-response-if>
            <qti-is-null><qti-variable identifier="RESPONSE"/></qti-is-null>
            <qti-set-outcome-value identifier="SCORE">
              <qti-base-value base-type="float">0.00</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-if>
          <qti-response-else-if>
            <qti-gte>
              <qti-map-response identifier="RESPONSE"/>
              <qti-base-value base-type="float">4</qti-base-value>
            </qti-gte>
            <qti-set-outcome-value identifier="SCORE">
              <qti-subtract>
                <qti-map-response identifier="RESPONSE"/>
                <qti-base-value base-type="float">0</qti-base-value>
              </qti-subtract>
            </qti-set-outcome-value>
          </qti-response-else-if>
          <qti-response-else>
            <qti-set-outcome-value identifier="SCORE">
              <qti-base-value base-type="float">0.00</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-else>
        </qti-response-condition>
      </qti-response-processing>
    </qti-assessment-item>`
  },
  {
    "identifier": "gap-match-example-3",
    "guid": "0000-0020-0003",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="gap-match-example-3" title="Gap Match Example 3" adaptive="false" time-dependent="false">
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE">
        <qti-correct-response>
          <qti-value>s1 t1</qti-value>
          <qti-value>s5 t2</qti-value>
          <qti-value>s2 t3</qti-value>
          <qti-value>s3 t4</qti-value>
        </qti-correct-response>
        <qti-mapping default-value="0" lower-bound="0.00" upper-bound="4">
          <qti-map-entry map-key="s1 t1" mapped-value="1"/>
          <qti-map-entry map-key="s5 t2" mapped-value="1"/>
          <qti-map-entry map-key="s2 t3" mapped-value="1"/>
          <qti-map-entry map-key="s3 t4" mapped-value="1"/>
        </qti-mapping>
      </qti-response-declaration>
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
        <qti-default-value>
          <qti-value>0</qti-value>
        </qti-default-value>
      </qti-outcome-declaration>
      <qti-item-body>
        <div>
          <p>Complete the following sentences using the words or phrases provided. Not all words or phrases will be used and some words or phrases may be used more than once.</p>
        </div>
        <qti-gap-match-interaction max-associations="4" response-identifier="RESPONSE">
          <qti-gap-text identifier="s1" match-max="0">Earth</qti-gap-text>
          <qti-gap-text identifier="s2" match-max="0">Mars</qti-gap-text>
          <qti-gap-text identifier="s3" match-max="0">Mercury</qti-gap-text>
          <qti-gap-text identifier="s4" match-max="0">the Moon</qti-gap-text>
          <qti-gap-text identifier="s5" match-max="0">the Sun</qti-gap-text>
          <div>
            <p>One full revolution of <qti-gap identifier="t1"/> around <qti-gap identifier="t2"/> takes 365 days. Because <qti-gap identifier="t3"/> is farther out from the center of the solar system, the planet takes almost 687 days to complete its orbit, far longer than the orbit of <qti-gap class="ets-target" identifier="t4"/> , which is 88 days.</p>
          </div>
         </qti-gap-match-interaction>
         <div>
           <p>Select a choice and move it to a blank.</p>
         </div>
      </qti-item-body>
      <qti-response-processing>
        <qti-response-condition>
          <qti-response-if>
            <qti-is-null><qti-variable identifier="RESPONSE"/></qti-is-null>
            <qti-set-outcome-value identifier="SCORE">
              <qti-base-value base-type="float">0.00</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-if>
          <qti-response-else-if>
            <qti-gte>
              <qti-map-response identifier="RESPONSE"/>
              <qti-base-value base-type="float">4</qti-base-value>
            </qti-gte>
            <qti-set-outcome-value identifier="SCORE">
              <qti-subtract>
                <qti-map-response identifier="RESPONSE"/>
                <qti-base-value base-type="float">3</qti-base-value>
              </qti-subtract>
            </qti-set-outcome-value>
          </qti-response-else-if>
          <qti-response-else>
            <qti-set-outcome-value identifier="SCORE">
              <qti-base-value base-type="float">0.00</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-else>
        </qti-response-condition>
      </qti-response-processing>
    </qti-assessment-item>`
  },
  {
    "identifier": "q6-gap-match-interaction-sv-1",
    "guid": "0000-0020-0004",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="q6-gap-match-interaction-sv-1" title="Gap Match - (SV 1) - choice-gap positioning" 
      adaptive="false" time-dependent="false">
      <qti-response-declaration identifier="RESPONSE1" cardinality="multiple" base-type="directedPair">
        <qti-correct-response>
          <qti-value>W G1</qti-value>
          <qti-value>Su G2</qti-value>
        </qti-correct-response>
        <qti-mapping default-value="-1" lower-bound="0">
          <qti-map-entry map-key="W G1" mapped-value="1"/>
          <qti-map-entry map-key="Su G2" mapped-value="2"/>
        </qti-mapping>
      </qti-response-declaration>
      <qti-response-declaration identifier="RESPONSE2" cardinality="multiple" base-type="directedPair"/>
      <qti-response-declaration identifier="RESPONSE3" cardinality="multiple" base-type="directedPair"/>
      <qti-response-declaration identifier="RESPONSE4" cardinality="multiple" base-type="directedPair"/>
      <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
      <qti-item-body>
        
        <p>
          The following examples demonstrate shared vocabulary describing the visual orientation of the list of gap match <em>choices</em>; i.e., the 
          qti-gap-text elements, in relation to the gap match targets; i.e., the HTML content containing the qti-gap's.
        </p>
        
        <qti-gap-match-interaction class="qti-choices-top" max-associations="0" response-identifier="RESPONSE1">
          <qti-prompt>Demonstrates qti-choices-top</qti-prompt>
          <qti-gap-text identifier="W" match-max="1">winter</qti-gap-text>
          <qti-gap-text identifier="Sp" match-max="1">spring</qti-gap-text>
          <qti-gap-text identifier="Su" match-max="1">summer</qti-gap-text>
          <qti-gap-text identifier="A" match-max="1">autumn</qti-gap-text>
          <blockquote>
            <p>
              Now is the <qti-gap identifier="G1"/> of our discontent<br/>
              Made glorious <qti-gap identifier="G2"/> by this sun of York;<br/> 
              And all the clouds that lour'd upon our house<br/>
              In the deep bosom of the ocean buried.
            </p>
          </blockquote>
        </qti-gap-match-interaction>
        
        <qti-gap-match-interaction class="qti-choices-bottom" max-associations="0" response-identifier="RESPONSE2">
          <qti-prompt>Demonstrates qti-choices-bottom</qti-prompt>
          <qti-gap-text identifier="W" match-max="1">winter</qti-gap-text>
          <qti-gap-text identifier="Sp" match-max="1">spring</qti-gap-text>
          <qti-gap-text identifier="Su" match-max="1">summer</qti-gap-text>
          <qti-gap-text identifier="A" match-max="1">autumn</qti-gap-text>
          <blockquote>
            <p>
              Now is the <qti-gap identifier="G1"/> of our discontent<br/>
              Made glorious <qti-gap identifier="G2"/> by this sun of York;<br/> 
              And all the clouds that lour'd upon our house<br/>
              In the deep bosom of the ocean buried.
            </p>
          </blockquote>
        </qti-gap-match-interaction>
    
        <qti-gap-match-interaction class="qti-choices-left" max-associations="0" response-identifier="RESPONSE3">
          <qti-prompt>Demonstrates qti-choices-left</qti-prompt>
          <qti-gap-text identifier="W" match-max="1">winter</qti-gap-text>
          <qti-gap-text identifier="Sp" match-max="1">spring</qti-gap-text>
          <qti-gap-text identifier="Su" match-max="1">summer</qti-gap-text>
          <qti-gap-text identifier="A" match-max="1">autumn</qti-gap-text>
          <blockquote>
            <p>
              Now is the <qti-gap identifier="G1"/> of our discontent<br/>
              Made glorious <qti-gap identifier="G2"/> by this sun of York;<br/> 
              And all the clouds that lour'd upon our house<br/>
              In the deep bosom of the ocean buried.
            </p>
          </blockquote>
        </qti-gap-match-interaction>
        
        <qti-gap-match-interaction class="qti-choices-right" max-associations="0" response-identifier="RESPONSE4">
          <qti-prompt>Demonstrates qti-choices-right</qti-prompt>
          <qti-gap-text identifier="W" match-max="1">winter</qti-gap-text>
          <qti-gap-text identifier="Sp" match-max="1">spring</qti-gap-text>
          <qti-gap-text identifier="Su" match-max="1">summer</qti-gap-text>
          <qti-gap-text identifier="A" match-max="1">autumn</qti-gap-text>
          <blockquote>
            <p>
              Now is the <qti-gap identifier="G1"/> of our discontent<br/>
              Made glorious <qti-gap identifier="G2"/> by this sun of York;<br/> 
              And all the clouds that lour'd upon our house<br/>
              In the deep bosom of the ocean buried.
            </p>
          </blockquote>
        </qti-gap-match-interaction>
        
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q6-gap-match-interaction-sv-2",
    "guid": "0000-0020-0005",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="q6-gap-match-interaction-sv-2" title="Gap Match - (SV 2) - container width" 
      adaptive="false" time-dependent="false">
      <qti-response-declaration identifier="RESPONSE1" cardinality="multiple" base-type="directedPair">
        <qti-correct-response>
          <qti-value>W G1</qti-value>
          <qti-value>Su G2</qti-value>
        </qti-correct-response>
        <qti-mapping default-value="-1" lower-bound="0">
          <qti-map-entry map-key="W G1" mapped-value="1"/>
          <qti-map-entry map-key="Su G2" mapped-value="2"/>
        </qti-mapping>
      </qti-response-declaration>
      <qti-response-declaration identifier="RESPONSE2" cardinality="multiple" base-type="directedPair"/>
      <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
      <qti-item-body>
        
        <p>
          A common implementation of the gap match interaction is to place the gap choices in a so-called "gap choices container".  
          If the gap choices are implemented with responsive design, then one can achieve a visual equivalent of gap choices stacking 
          by manipulating the gap choices container width.    
        </p>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col5">
        
            <qti-gap-match-interaction class="qti-choices-top" max-associations="0" data-choices-container-width="200" response-identifier="RESPONSE1">
              <qti-prompt>Demonstrates qti-choices-top and  data-choices-container-width="200"</qti-prompt>
              <qti-gap-text identifier="W" match-max="1">winter</qti-gap-text>
              <qti-gap-text identifier="Sp" match-max="1">spring</qti-gap-text>
              <qti-gap-text identifier="Su" match-max="1">summer</qti-gap-text>
              <qti-gap-text identifier="A" match-max="1">autumn</qti-gap-text>
              <blockquote>
                <p>
                  Now is the <qti-gap identifier="G1"/> of our discontent<br/>
                  Made glorious <qti-gap identifier="G2"/> by this sun of York;<br/> 
                  And all the clouds that lour'd upon our house<br/>
                  In the deep bosom of the ocean buried.
                </p>
              </blockquote>
            </qti-gap-match-interaction>
       
          </div>
        </div>
        <div class="qti-layout-row">
          <div class="qti-layout-col9">
        
            <qti-gap-match-interaction class="qti-choices-left" max-associations="0" data-choices-container-width="100" response-identifier="RESPONSE2">
              <qti-prompt>Demonstrates qti-choices-left and  data-choices-container-width="100"</qti-prompt>
              <qti-gap-text identifier="W" match-max="1">winter</qti-gap-text>
              <qti-gap-text identifier="Sp" match-max="1">spring</qti-gap-text>
              <qti-gap-text identifier="Su" match-max="1">summer</qti-gap-text>
              <qti-gap-text identifier="A" match-max="1">autumn</qti-gap-text>
              <blockquote>
                <p>
                  Now is the <qti-gap identifier="G1"/> of our discontent<br/>
                  Made glorious <qti-gap identifier="G2"/> by this sun of York;<br/> 
                  And all the clouds that lour'd upon our house<br/>
                  In the deep bosom of the ocean buried.
                </p>
              </blockquote>
            </qti-gap-match-interaction>
    
          </div>
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q6-gap-match-interaction-sv-3",
    "guid": "0000-0020-0006",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="q6-gap-match-interaction-sv-3" title="Gap Match - (SV 3) - custom messages" 
      adaptive="false" time-dependent="false">
      <qti-response-declaration identifier="RESPONSE1" cardinality="multiple" base-type="directedPair">
        <qti-correct-response>
          <qti-value>W G1</qti-value>
          <qti-value>Su G2</qti-value>
        </qti-correct-response>
        <qti-mapping default-value="-1" lower-bound="0">
          <qti-map-entry map-key="W G1" mapped-value="1"/>
          <qti-map-entry map-key="Su G2" mapped-value="2"/>
        </qti-mapping>
      </qti-response-declaration>
      <qti-response-declaration identifier="RESPONSE2" cardinality="multiple" base-type="directedPair">
        <qti-correct-response>
          <qti-value>W G1</qti-value>
          <qti-value>Su G2</qti-value>
        </qti-correct-response>
        <qti-mapping default-value="-1" lower-bound="0">
          <qti-map-entry map-key="W G1" mapped-value="1"/>
          <qti-map-entry map-key="Su G2" mapped-value="2"/>
        </qti-mapping>
      </qti-response-declaration>
      <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
      <qti-item-body>
        
        <p>
          A Delivery Platform's <em>default</em> min-associations and max-associations constraint violation messages are left to the 
          Delivery Platform.  Platform <em>default</em> constraint violation messages may be overriden by using 
          the <strong>data-max-selections-message</strong> and <strong>data-min-selections-message</strong> attributes accordingly.
        </p>
        
        <div class="qti-layout-row">
          <div class="qti-layout-col9">
    
            <qti-gap-match-interaction max-associations="1" min-associations="1" data-max-selections-message="You've selected too many" data-min-selections-message="You haven't selected enough" response-identifier="RESPONSE1">
              <qti-prompt>Demonstrates data-max|min-selections-messages</qti-prompt>
              <qti-gap-text identifier="W" match-max="1">winter</qti-gap-text>
              <qti-gap-text identifier="Sp" match-max="1">spring</qti-gap-text>
              <qti-gap-text identifier="Su" match-max="1">summer</qti-gap-text>
              <qti-gap-text identifier="A" match-max="1">autumn</qti-gap-text>
              <blockquote>
                <p>
                  Now is the <qti-gap identifier="G1"/> of our discontent<br/>
                  Made glorious <qti-gap identifier="G2"/> by this sun of York;<br/> 
                  And all the clouds that lour'd upon our house<br/>
                  In the deep bosom of the ocean buried.
                </p>
              </blockquote>
            </qti-gap-match-interaction>
    
          </div>
        </div>
        
        <div>
          <hr />
        </div>
        
        <p>
          The max-associations attribute is optional and defaults to a value of 1 when unspecified.  The following interaction has no 
          max-associations attribute and no data-max-selections-message attribute.   Consequently, a Delivery Platform must trigger its
          <em>default</em> max-associations message when the candidate attempts to make more than 1 match in the following interaction.
        </p>
    
        <div class="qti-layout-row">
          <div class="qti-layout-col9">
    
            <qti-gap-match-interaction response-identifier="RESPONSE2">
              <qti-gap-text identifier="W" match-max="1">winter</qti-gap-text>
              <qti-gap-text identifier="Sp" match-max="1">spring</qti-gap-text>
              <qti-gap-text identifier="Su" match-max="1">summer</qti-gap-text>
              <qti-gap-text identifier="A" match-max="1">autumn</qti-gap-text>
              <blockquote>
                <p>
                  Now is the <qti-gap identifier="G1"/> of our discontent<br/>
                  Made glorious <qti-gap identifier="G2"/> by this sun of York;<br/> 
                  And all the clouds that lour'd upon our house<br/>
                  In the deep bosom of the ocean buried.
                </p>
              </blockquote>
            </qti-gap-match-interaction>
    
          </div>
        </div>
        
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q6-gap-match-interaction-sv-4",
    "guid": "0000-0020-0007",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="q6-gap-match-interaction-sv-4" title="Gap Match - (SV 4) - gap widths" 
      adaptive="false" time-dependent="false">
      <qti-response-declaration identifier="RESPONSE1" cardinality="multiple" base-type="directedPair" />
      <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
      <qti-item-body>
        
        <p>
          To specify gap element widths, use the class attribute and qti-input-width-1|2|3|4|6|10|15|20|72
          The gap element widths are intended to provide a general visual impression. By default, in the absence of any shared 
          vocabulary, the presentation width of a gap element is left to the Delivery Platform.
        </p>
       
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
    
            <qti-gap-match-interaction class="qti-choices-top" max-associations="0" response-identifier="RESPONSE1">
              <qti-prompt>Demonstrates all gap element qti-input-width's: 1|2|3|4|6|10|15|20|72</qti-prompt>
              <qti-gap-text identifier="gt1" match-max="1">M</qti-gap-text>
              <qti-gap-text identifier="gt2" match-max="1">MM</qti-gap-text>
              <qti-gap-text identifier="gt3" match-max="1">MMM</qti-gap-text>
              <qti-gap-text identifier="gt4" match-max="1">MMMM</qti-gap-text>
              <qti-gap-text identifier="gt6" match-max="1">MMMMMM</qti-gap-text>
              <p>
                qti-input-width-1 :  <qti-gap class="qti-input-width-1" identifier="G1"/><br/>
                qti-input-width-2 :  <qti-gap class="qti-input-width-2" identifier="G2"/><br/>
                qti-input-width-3 :  <qti-gap class="qti-input-width-3" identifier="G3"/><br/>
                qti-input-width-4 :  <qti-gap class="qti-input-width-4" identifier="G4"/><br/>
                qti-input-width-6 :  <qti-gap class="qti-input-width-6" identifier="G6"/><br/>
                qti-input-width-10 : <qti-gap class="qti-input-width-10" identifier="G10"/><br/>
                qti-input-width-15 : <qti-gap class="qti-input-width-15" identifier="G15"/><br/>
                qti-input-width-20 : <qti-gap class="qti-input-width-20" identifier="G20"/><br/>
                qti-input-width-72 : <qti-gap class="qti-input-width-72" identifier="G72"/>
              </p>
            </qti-gap-match-interaction>
        
          </div>
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "graphic-gap-match-item1",
    "guid": "0000-0021-0000",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="graphic-gap-match-item1" title="Q8 GGM Images - Airport Tags" 
      adaptive="false" time-dependent="false">
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE">
        <qti-correct-response>
          <qti-value>GLA A</qti-value>
          <qti-value>EDI B</qti-value>
          <qti-value>MAN C</qti-value>
        </qti-correct-response>
        <qti-mapping default-value="-1" lower-bound="0">
          <qti-map-entry map-key="GLA A" mapped-value="1"/>
          <qti-map-entry map-key="EDI B" mapped-value="1"/>
          <qti-map-entry map-key="MAN C" mapped-value="1"/>
        </qti-mapping>
      </qti-response-declaration>
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
      <qti-item-body>
        <div>
          <p>The International Air Transport Association assigns three-letter codes to identify airports worldwide. For example, London Heathrow has code LHR.</p>
        </div>
        <div>
          <qti-graphic-gap-match-interaction max-associations="0" response-identifier="RESPONSE">
            <qti-prompt>
              <p>Some of the labels on the following diagram are missing: can you identify the correct three-letter codes for the unlabelled airports?</p>
            </qti-prompt>
            <img alt="Map of the United Kingdom" height="280" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/c6f3031f-7205-4444-8769-851904f42ed6/images/ukairtags.png" width="206"/>
            <qti-gap-img identifier="CBG" match-max="1">
              <img alt="The initials CBG" height="11" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/c6f3031f-7205-4444-8769-851904f42ed6/images/cbg.png" width="25"/>
            </qti-gap-img>
            <qti-gap-img identifier="EBG" match-max="1">
              <img alt="The initials EBG" height="11" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/c6f3031f-7205-4444-8769-851904f42ed6/images/ebg.png" width="25"/>
            </qti-gap-img>
            <qti-gap-img identifier="EDI" match-max="1">
              <img alt="The initials EDI" height="11" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/c6f3031f-7205-4444-8769-851904f42ed6/images/edi.png" width="25"/>
            </qti-gap-img>
            <qti-gap-img identifier="GLA" match-max="1">
              <img alt="The initials GLA" height="11" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/c6f3031f-7205-4444-8769-851904f42ed6/images/gla.png" width="25"/>
            </qti-gap-img>
            <qti-gap-img identifier="MAN" match-max="1">
              <img alt="The initials MAN" height="11" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/c6f3031f-7205-4444-8769-851904f42ed6/images/man.png" width="25"/>
            </qti-gap-img>
            <qti-gap-img identifier="MCH" match-max="1">
              <img alt="The initials MCH" height="11" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/c6f3031f-7205-4444-8769-851904f42ed6/images/mch.png" width="25"/>
            </qti-gap-img>
            <qti-associable-hotspot coords="6,100,43,125" identifier="A" match-max="1" shape="rect"></qti-associable-hotspot>
            <qti-associable-hotspot coords="118,95,162,120" identifier="B" match-max="1" shape="rect"></qti-associable-hotspot>
            <qti-associable-hotspot coords="57,158,99,183" identifier="C" match-max="1" shape="rect"></qti-associable-hotspot>
          </qti-graphic-gap-match-interaction>
        </div>
      </qti-item-body>
      <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/map_response.xml"/> 
    </qti-assessment-item>`
  },
  {
    "identifier": "graphic-gap-match-item2",
    "guid": "0000-0021-0001",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="graphic-gap-match-item2" title="Q8 GGM Text - Airport Tags" 
      adaptive="false" time-dependent="false">
      <qti-response-declaration identifier="RESPONSE" cardinality="multiple" base-type="directedPair">
        <qti-correct-response>
          <qti-value>GLA A</qti-value>
          <qti-value>EDI B</qti-value>
          <qti-value>MAN C</qti-value>
        </qti-correct-response>
        <qti-mapping lower-bound="0" default-value="-1">
          <qti-map-entry map-key="GLA A" mapped-value="1"/>
          <qti-map-entry map-key="EDI B" mapped-value="1"/>
          <qti-map-entry map-key="MAN C" mapped-value="1"/>
        </qti-mapping>
      </qti-response-declaration>
      <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
      <qti-item-body>
        <p> The International Air Transport Association assigns three-letter codes to identify airports worldwide. For example, London Heathrow has code LHR.</p>
        <qti-graphic-gap-match-interaction max-associations="0" response-identifier="RESPONSE">
          <qti-prompt>
            <p>Some of the labels on the following diagram are missing: can you identify the correct three-letter codes for the unlabelled airports?</p>
          </qti-prompt>
          <img alt="Map of the United Kingdom" height="280" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/c6f3031f-7205-4444-8769-851904f42ed6/images/ukairtags.png" width="206"/>
          <qti-gap-text identifier="CBG" match-max="1"><span>CBG</span></qti-gap-text>
          <qti-gap-text identifier="EDI" match-max="1"><span>EDI</span></qti-gap-text>
          <qti-gap-text identifier="GLA" match-max="1"><span>GLA</span></qti-gap-text>
          <qti-gap-text identifier="MAN" match-max="1"><span>MAN</span></qti-gap-text>
          <qti-gap-text identifier="MCH" match-max="1"><span>MCH</span></qti-gap-text>
          <qti-associable-hotspot identifier="A" match-max="1" shape="rect" coords="6,100,43,125"/>
          <qti-associable-hotspot identifier="B" match-max="1" shape="rect" coords="118,95,162,120"/>
          <qti-associable-hotspot identifier="C" match-max="1" shape="rect" coords="57,158,99,183"/>      
        </qti-graphic-gap-match-interaction>
      </qti-item-body>
      <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/map_response.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "q8-graphic-gap-match-sv-1",
    "guid": "0000-0021-0002",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="q8-graphic-gap-match-sv-1" title="Q8 GGM - (SV 1) - choice-gap positioning"  
      adaptive="false" time-dependent="false">
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE1">
        <qti-correct-response>
          <qti-value>DraggerD B</qti-value>
          <qti-value>DraggerC C</qti-value>
          <qti-value>DraggerA D</qti-value>
          <qti-value>DraggerB A</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE2"/>
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE3"/>
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE4"/>
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
      <qti-item-body>
        <p>Place the events onto the correct place on the timeline below.</p>
        
        <qti-graphic-gap-match-interaction class="qti-choices-top" max-associations="0" response-identifier="RESPONSE1">
          <qti-prompt>Demonstrates qti-choices-top</qti-prompt>
          <img alt="timeline" height="326" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/timeline-558.png" width="558"/>
          <qti-gap-img identifier="DraggerA" match-max="1">
            <img alt="a-cw" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/a-cw.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerB" match-max="1">
            <img alt="b-ww2" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/b-ww2.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerC" match-max="1">
            <img alt="c-vietnam" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/c-vietnam.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerD" match-max="1">
            <img alt="d-bay" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/d-bay.png" width="78" />
          </qti-gap-img>
          <qti-associable-hotspot coords="55,256,135,321" identifier="A" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="190,256,270,321" identifier="B" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="309,256,389,321" identifier="C" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="450,256,530,321" identifier="D" match-max="1" shape="rect"/>
        </qti-graphic-gap-match-interaction>
        
        <qti-graphic-gap-match-interaction class="qti-choices-bottom" max-associations="0" response-identifier="RESPONSE2">
          <qti-prompt>Demonstrates qti-choices-bottom</qti-prompt>
          <img alt="timeline" height="326" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/timeline-558.png" width="558"/>
          <qti-gap-img identifier="DraggerA" match-max="1">
            <img alt="a-cw" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/a-cw.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerB" match-max="1">
            <img alt="b-ww2" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/b-ww2.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerC" match-max="1">
            <img alt="c-vietnam" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/c-vietnam.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerD" match-max="1">
            <img alt="d-bay" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/d-bay.png" width="78" />
          </qti-gap-img>
          <qti-associable-hotspot coords="55,256,135,321" identifier="A" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="190,256,270,321" identifier="B" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="309,256,389,321" identifier="C" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="450,256,530,321" identifier="D" match-max="1" shape="rect"/>
        </qti-graphic-gap-match-interaction>
        
        <qti-graphic-gap-match-interaction class="qti-choices-left" max-associations="0" response-identifier="RESPONSE3">
          <qti-prompt>Demonstrates qti-choices-left</qti-prompt>
          <img alt="timeline" height="326" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/timeline-558.png" width="558"/>
          <qti-gap-img identifier="DraggerA" match-max="1">
            <img alt="a-cw" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/a-cw.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerB" match-max="1">
            <img alt="b-ww2" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/b-ww2.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerC" match-max="1">
            <img alt="c-vietnam" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/c-vietnam.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerD" match-max="1">
            <img alt="d-bay" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/d-bay.png" width="78" />
          </qti-gap-img>
          <qti-associable-hotspot coords="55,256,135,321" identifier="A" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="190,256,270,321" identifier="B" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="309,256,389,321" identifier="C" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="450,256,530,321" identifier="D" match-max="1" shape="rect"/>
        </qti-graphic-gap-match-interaction>
        
        <qti-graphic-gap-match-interaction class="qti-choices-right" max-associations="0" response-identifier="RESPONSE4">
          <qti-prompt>Demonstrates qti-choices-right</qti-prompt>
          <img alt="timeline" height="326" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/timeline-558.png" width="558"/>
          <qti-gap-img identifier="DraggerA" match-max="1">
            <img alt="a-cw" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/a-cw.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerB" match-max="1">
            <img alt="b-ww2" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/b-ww2.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerC" match-max="1">
            <img alt="c-vietnam" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/c-vietnam.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerD" match-max="1">
            <img alt="d-bay" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/d-bay.png" width="78" />
          </qti-gap-img>
          <qti-associable-hotspot coords="55,256,135,321" identifier="A" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="190,256,270,321" identifier="B" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="309,256,389,321" identifier="C" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="450,256,530,321" identifier="D" match-max="1" shape="rect"/>
        </qti-graphic-gap-match-interaction>
        
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q8-graphic-gap-match-sv-2",
    "guid": "0000-0021-0003",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="q8-graphic-gap-match-sv-2" title="Q8 GGM - (SV 2) - container width"
      adaptive="false" time-dependent="false">
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE1">
        <qti-correct-response>
          <qti-value>DraggerD B</qti-value>
          <qti-value>DraggerC C</qti-value>
          <qti-value>DraggerA D</qti-value>
          <qti-value>DraggerB A</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE2"/>
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
      <qti-item-body>
        <div>
          
        <qti-graphic-gap-match-interaction class="qti-choices-top" max-associations="0" data-choices-container-width="188" response-identifier="RESPONSE1">
          <qti-prompt>Demonstrates qti-choices-top and data-choices-container-width="188"</qti-prompt>
          <img alt="timeline" height="326" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/timeline-558.png" width="558"/>
          <qti-gap-img identifier="DraggerA" match-max="1">
            <img alt="a-cw" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/a-cw.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerB" match-max="1">
            <img alt="b-ww2" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/b-ww2.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerC" match-max="1">
            <img alt="c-vietnam" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/c-vietnam.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerD" match-max="1">
            <img alt="d-bay" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/d-bay.png" width="78" />
          </qti-gap-img>
          <qti-associable-hotspot coords="55,256,135,321" identifier="A" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="190,256,270,321" identifier="B" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="309,256,389,321" identifier="C" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="450,256,530,321" identifier="D" match-max="1" shape="rect"/>
        </qti-graphic-gap-match-interaction>
        
        <br/>
        
        <qti-graphic-gap-match-interaction class="qti-choices-left" max-associations="0" data-choices-container-width="100" response-identifier="RESPONSE2">
          <qti-prompt>Demonstrates qti-choices-left and data-choices-container-width="100"</qti-prompt>
          <img alt="timeline" height="326" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/timeline-558.png" width="558"/>
          <qti-gap-img identifier="DraggerA" match-max="1">
            <img alt="a-cw" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/a-cw.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerB" match-max="1">
            <img alt="b-ww2" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/b-ww2.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerC" match-max="1">
            <img alt="c-vietnam" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/c-vietnam.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerD" match-max="1">
            <img alt="d-bay" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/d-bay.png" width="78" />
          </qti-gap-img>
          <qti-associable-hotspot coords="55,256,135,321" identifier="A" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="190,256,270,321" identifier="B" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="309,256,389,321" identifier="C" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="450,256,530,321" identifier="D" match-max="1" shape="rect"/>
        </qti-graphic-gap-match-interaction>
        
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q8-graphic-gap-match-sv-3",
    "guid": "0000-0021-0004",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="q8-graphic-gap-match-sv-3" title="Q8 GGM - (SV 3) - custom messages"
      adaptive="false" time-dependent="false">
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE1">
        <qti-correct-response>
          <qti-value>DraggerD B</qti-value>
          <qti-value>DraggerC C</qti-value>
          <qti-value>DraggerA D</qti-value>
          <qti-value>DraggerB A</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE2" />
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
      <qti-item-body>
        <div>
    
        <qti-graphic-gap-match-interaction class="qti-choices-top" data-choices-container-width="376" max-associations="2" min-associations="1" data-max-selections-message="You've selected too many!" data-min-selections-message="More selections, please! You need at least one." response-identifier="RESPONSE1">
          <qti-prompt>Demonstrates qti-choices-top and data-max-selections-message and data-min-selections-message</qti-prompt>
          <img alt="timeline" height="326" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/timeline-558.png" width="558"/>
          <qti-gap-img identifier="DraggerA" match-max="1">
            <img alt="a-cw" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/a-cw.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerB" match-max="1">
            <img alt="b-ww2" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/b-ww2.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerC" match-max="1">
            <img alt="c-vietnam" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/c-vietnam.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerD" match-max="1">
            <img alt="d-bay" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/d-bay.png" width="78" />
          </qti-gap-img>
          <qti-associable-hotspot coords="55,256,135,321" identifier="A" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="190,256,270,321" identifier="B" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="309,256,389,321" identifier="C" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="450,256,530,321" identifier="D" match-max="1" shape="rect"/>
        </qti-graphic-gap-match-interaction>
    
        </div>
        
        <div>
          <hr />
        </div>
        
        <p>
          The max-associations attribute is optional and defaults to a value of 1 when unspecified.  The following interaction has no 
          max-associations attribute and no data-max-selections-message attribute.   Consequently, a Delivery Platform must trigger its
          <em>default</em> max-associations message when the candidate attempts to make more than 1 match in the following interaction.
        </p>
        
        <div>
    
        <qti-graphic-gap-match-interaction response-identifier="RESPONSE2">
          <qti-prompt>Demonstrates default max-associations when more than 1 match is made.</qti-prompt>
          <img alt="timeline" height="326" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/timeline-558.png" width="558"/>
          <qti-gap-img identifier="DraggerA" match-max="1">
            <img alt="a-cw" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/a-cw.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerB" match-max="1">
            <img alt="b-ww2" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/b-ww2.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerC" match-max="1">
            <img alt="c-vietnam" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/c-vietnam.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerD" match-max="1">
            <img alt="d-bay" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/d-bay.png" width="78" />
          </qti-gap-img>
          <qti-associable-hotspot coords="55,256,135,321" identifier="A" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="190,256,270,321" identifier="B" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="309,256,389,321" identifier="C" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="450,256,530,321" identifier="D" match-max="1" shape="rect"/>
        </qti-graphic-gap-match-interaction>
    
        </div>
        
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "q8-graphic-gap-match-sv-4",
    "guid": "0000-0021-0005",
    "submissionMode": "individual",
    "xml": `<?xml version="1.0" encoding="UTF-8"?>
    <qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      identifier="q8-graphic-gap-match-sv-4" title="Q8 GGM - (SV 4) - theming"
      adaptive="false" time-dependent="false">
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE1"/> 
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE2"/>   
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE3"/>  
      <qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE4"/> 
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
      <qti-item-body>
        <div>
    
        <qti-graphic-gap-match-interaction class="qti-choices-top qti-selections-dark" max-associations="0" data-choices-container-width="376" response-identifier="RESPONSE1">
          <qti-prompt>Demonstrates qti-choices-top and qti-selections-dark</qti-prompt>
          <img alt="timeline" height="326" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/timeline-558.png" width="558"/>
          <qti-gap-img identifier="DraggerA" match-max="1">
            <img alt="a-cw" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/a-cw.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerB" match-max="1">
            <img alt="b-ww2" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/b-ww2.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerC" match-max="1">
            <img alt="c-vietnam" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/c-vietnam.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerD" match-max="1">
            <img alt="d-bay" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/d-bay.png" width="78" />
          </qti-gap-img>
          <qti-associable-hotspot coords="55,256,135,321" identifier="A" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="190,256,270,321" identifier="B" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="309,256,389,321" identifier="C" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="450,256,530,321" identifier="D" match-max="1" shape="rect"/>
        </qti-graphic-gap-match-interaction>
        
        <br />
        
        <qti-graphic-gap-match-interaction class="qti-choices-top qti-selections-light" max-associations="0" data-choices-container-width="376" response-identifier="RESPONSE2">
          <qti-prompt>Demonstrates qti-choices-top and qti-selections-light</qti-prompt>
          <img alt="timeline" height="326" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/timeline-558.png" width="558"/>
          <qti-gap-img identifier="DraggerA" match-max="1">
            <img alt="a-cw" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/a-cw.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerB" match-max="1">
            <img alt="b-ww2" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/b-ww2.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerC" match-max="1">
            <img alt="c-vietnam" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/c-vietnam.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerD" match-max="1">
            <img alt="d-bay" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/d-bay.png" width="78" />
          </qti-gap-img>
          <qti-associable-hotspot coords="55,256,135,321" identifier="A" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="190,256,270,321" identifier="B" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="309,256,389,321" identifier="C" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="450,256,530,321" identifier="D" match-max="1" shape="rect"/>
        </qti-graphic-gap-match-interaction>
        
        <br />
    
        <qti-graphic-gap-match-interaction class="qti-choices-top qti-selections-dark qti-unselected-hidden" max-associations="0" data-choices-container-width="376" response-identifier="RESPONSE3">
          <qti-prompt>Demonstrates qti-choices-top and qti-selections-dark and qti-unselected-hidden</qti-prompt>
          <img alt="timeline" height="326" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/timeline-558.png" width="558"/>
          <qti-gap-img identifier="DraggerA" match-max="1">
            <img alt="a-cw" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/a-cw.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerB" match-max="1">
            <img alt="b-ww2" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/b-ww2.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerC" match-max="1">
            <img alt="c-vietnam" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/c-vietnam.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerD" match-max="1">
            <img alt="d-bay" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/d-bay.png" width="78" />
          </qti-gap-img>
          <qti-associable-hotspot coords="55,256,135,321" identifier="A" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="190,256,270,321" identifier="B" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="309,256,389,321" identifier="C" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="450,256,530,321" identifier="D" match-max="1" shape="rect"/>
        </qti-graphic-gap-match-interaction>
        
        <br />
    
        <qti-graphic-gap-match-interaction class="qti-choices-top qti-selections-light qti-unselected-hidden" max-associations="0" data-choices-container-width="376" response-identifier="RESPONSE4">
          <qti-prompt>Demonstrates qti-choices-top and qti-selections-light and qti-unselected-hidden</qti-prompt>
          <img alt="timeline" height="326" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/timeline-558.png" width="558"/>
          <qti-gap-img identifier="DraggerA" match-max="1">
            <img alt="a-cw" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/a-cw.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerB" match-max="1">
            <img alt="b-ww2" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/b-ww2.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerC" match-max="1">
            <img alt="c-vietnam" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/c-vietnam.png" width="78" />
          </qti-gap-img>
          <qti-gap-img identifier="DraggerD" match-max="1">
            <img alt="d-bay" height="63" src="https://storage.googleapis.com/bank-dev-ampup/c/da43c1c2-a26a-40d8-b8d8-cab32d5cd573/ba791058-7123-4ede-ae4f-832b8e25166d/b00a58f2-931d-4492-a97f-99b27ea28892/images/d-bay.png" width="78" />
          </qti-gap-img>
          <qti-associable-hotspot coords="55,256,135,321" identifier="A" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="190,256,270,321" identifier="B" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="309,256,389,321" identifier="C" match-max="1" shape="rect"/>
          <qti-associable-hotspot coords="450,256,530,321" identifier="D" match-max="1" shape="rect"/>
        </qti-graphic-gap-match-interaction>
        
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "pci-graphing-interaction-1",
    "guid": "0000-0022-000a",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" adaptive="false" identifier="pci-graphing-interaction-1" time-dependent="false" title="PCI Graphing Interaction 1" xml:lang="en-US" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0p1_v1p0.xsd"> 
    <qti-response-declaration base-type="point" cardinality="multiple" identifier="RESPONSE">
      <qti-correct-response>
        <qti-value>1 -3</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-item-body>
      <div class="qti-layout-row">
        <div class="qti-layout-col12">
          <p>The graph shows point <em>L</em>. What is the location of a point 5 units down and 2 units to the left of point <em>L</em>?</p>
          <qti-portable-custom-interaction response-identifier="RESPONSE"
            module="GraphingInteraction"
            custom-interaction-type-identifier="urn:ampup:pci:2025:graphingInteraction"
            data-graphtype="scatter"
            data-planetype="default"
            data-id="graph"
            data-title=""
            data-axislinewidth="3" 
            data-borderlinewidth="3"
            data-steplinewidth="1"
            data-height="400"
            data-width="400"
            data-hlines="10"
            data-vlines="10"
            data-maxpoints="1"
            data-minpoints="1"
            data-xaxis="{ &quot;step&quot;: 1, &quot;substeps&quot;: 1, &quot;label&quot;: &quot;x&quot;, &quot;labelprecision&quot;: 0, &quot;precision&quot;: 0 }" 
            data-yaxis="{ &quot;step&quot;: 1, &quot;substeps&quot;: 1, &quot;label&quot;: &quot;y&quot;, &quot;labelprecision&quot;: 0, &quot;precision&quot;: 0 }" 
            data-fixedpoints="{ &quot;points&quot;: [{ &quot;x&quot;: 3, &quot;y&quot;: 2, &quot;label&quot;: &quot;L&quot; }]}"
            data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/490fb232-3f99-430e-b589-4c9d8618e666/items/item-1/">
            <qti-prompt>Plot the point on the coordinate grid.</qti-prompt>
            <qti-interaction-markup>
              <div class="graph-container" id="graph"></div>
            </qti-interaction-markup>
            <qti-stylesheet href="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/490fb232-3f99-430e-b589-4c9d8618e666/items/item-1/css/styles.css" type="text/css"/>
          </qti-portable-custom-interaction>
        </div>
      </div>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "pci-graphing-interaction-2",
    "guid": "0000-0022-000b",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" adaptive="false" identifier="pci-graphing-interaction-2" time-dependent="false" title="PCI Graphing Interaction 2" xml:lang="en-US" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0p1_v1p0.xsd">
    <qti-response-declaration base-type="point" cardinality="multiple" identifier="RESPONSE">
      <qti-correct-response>
        <qti-value>-3 0</qti-value>
        <qti-value>0 -2</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-item-body>
      <div class="qti-layout-row">
        <div class="qti-layout-col12">
          <p>Draw the graph of the inverse of <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><mfrac bevelled="false"><mi>3</mi><mi>2</mi></mfrac><mo>⁢</mo><mi>x</mi><mo>-</mo><mi>3</mi></mrow></math> on the coordinate grid below.</p>
          <qti-portable-custom-interaction response-identifier="RESPONSE"
            module="GraphingInteraction"
            custom-interaction-type-identifier="urn:ampup:pci:2025:graphingInteraction"
            data-graphtype="line"
            data-planetype="default"
            data-id="graph"
            data-title=""
            data-height="400"
            data-width="400"
            data-hlines="10"
            data-vlines="10"
            data-axislinewidth="3"
            data-borderlinewidth="3"
            data-steplinewidth="1"
            data-maxpoints="2"
            data-minpoints="2"
            data-invalidresponsemessage="You must plot two points to answer this question."
            data-xaxis="{ &quot;step&quot;: 1, &quot;substeps&quot;: 1, &quot;label&quot;: &quot;x&quot;, &quot;labelprecision&quot;: 0, &quot;precision&quot;: 0 }" 
            data-yaxis="{ &quot;step&quot;: 1, &quot;substeps&quot;: 1, &quot;label&quot;: &quot;f(x)&quot;, &quot;labelprecision&quot;: 0, &quot;precision&quot;: 0 }" 
            data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/c28e46e1-f438-4041-aaac-8ab9d07faf7a/items/item-2/"
            >
            <qti-interaction-markup>
              <div class="graph-container" id="graph"></div> 
            </qti-interaction-markup>
            <qti-stylesheet href="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/c28e46e1-f438-4041-aaac-8ab9d07faf7a/items/item-2/css/styles.css" type="text/css"/> 
          </qti-portable-custom-interaction>
        </div>
      </div>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "pci-graphing-interaction-variables",
    "guid": "0000-0022-000c",
    "xml": `<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    adaptive="false" identifier="pci-graphing-interaction-variables" time-dependent="false" 
    title="PCI Graphing Interaction - variables" xml:lang="en-US" 
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0p1_v1p0.xsd">
    <qti-context-declaration cardinality="record" identifier="QTI_CONTEXT">
      <qti-default-value>
        <qti-value base-type="string" field-identifier="environmentIdentifier">CONFORMANCE</qti-value>
      </qti-default-value>
    </qti-context-declaration>
    <qti-response-declaration base-type="point" cardinality="multiple" identifier="RESPONSE">
      <qti-correct-response>
        <qti-value>-3 0</qti-value>
        <qti-value>0 -2</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-response-declaration base-type="point" cardinality="multiple" identifier="RESPONSE1">
      <qti-correct-response>
        <qti-value>-3 0</qti-value>
        <qti-value>0 -2</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-template-declaration base-type="string" cardinality="multiple" identifier="SECONDARY-FIXED-POINTS">
      <qti-default-value>
        <qti-value>{ "x":2, "y":2, "label":"T" }</qti-value>
      </qti-default-value>
    </qti-template-declaration>
    <qti-item-body>
      <div class="qti-layout-row">
        <div class="qti-layout-col12">
          <p>Draw the graph of the inverse of <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><mfrac bevelled="false"><mi>3</mi><mi>2</mi></mfrac><mo>⁢</mo><mi>x</mi><mo>-</mo><mi>3</mi></mrow></math> on the coordinate grid below.</p>
        </div>
      </div>
      <div class="qti-layout-row">
        <div class="qti-layout-col6">
          <p>The presentation of the GraphingInteraction PCI below is altered in two ways:</p>
          <ul>
            <li>Graph should have a fixed point plotted at [2,2] with label "T" injected via a template variable.</li>
            <li>The coordinate plane should have thin blue axes and a 1px black border because of context variable injection.</li>
          </ul>
        </div>
        <div class="qti-layout-col6">
          <p>The presentation of the GraphingInteraction PCI below should be its <em>default</em> presentation:</p>
          <ul>
            <li>Graph should not have any fixed points.</li>
            <li>The coordinate plane should have a 3px blue border and 3px red axes.</li>
          </ul>
        </div>
      </div>
      <div class="qti-layout-row">
        <div class="qti-layout-col6">
          <qti-portable-custom-interaction response-identifier="RESPONSE" 
            module="GraphingInteraction" 
            custom-interaction-type-identifier="urn:ampup:pci:2025:graphingInteraction"
            data-graphtype="line"
            data-planetype="default"
            data-title=""
            data-height="320"
            data-width="320"
            data-vlines="8"
            data-hlines="10"
            data-id="graph-1"
            data-axislinewidth="3"
            data-borderlinewidth="3"
            data-steplinewidth="1"
            data-maxpoints="2"
            data-minpoints="2"
            data-invalidresponsemessage="More Points Please!"
            data-xaxis="{ &quot;step&quot;: 1, &quot;substeps&quot;: 1, &quot;label&quot;: &quot;x&quot;, &quot;labelprecision&quot;: 0, &quot;precision&quot;: 0 }" 
            data-yaxis="{ &quot;step&quot;: 1, &quot;substeps&quot;: 1, &quot;label&quot;: &quot;f(x)&quot;, &quot;labelprecision&quot;: 0, &quot;precision&quot;: 0 }"
            data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/7bc02854-7aa3-4a58-903b-48601fdc1a89/items/item-3/"
            >
            <qti-interaction-markup>
              <div class="graph-container" id="graph-1"></div>
            </qti-interaction-markup>
            <qti-template-variable template-identifier="SECONDARY-FIXED-POINTS"/>
            <qti-context-variable identifier="QTI_CONTEXT"/>
            <qti-stylesheet href="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/7bc02854-7aa3-4a58-903b-48601fdc1a89/items/item-3/css/styles.css" type="text/css"/>
          </qti-portable-custom-interaction>
        </div>
        <div class="qti-layout-col6">
          <qti-portable-custom-interaction response-identifier="RESPONSE1"
            module="GraphingInteraction"
            custom-interaction-type-identifier="urn:ampup:pci:2025:graphingInteraction"
            data-graphtype="line"
            data-planetype="default"
            data-title=""
            data-height="320"
            data-width="320"
            data-vlines="8"
            data-hlines="10" 
            data-id="graph-2"
            data-axislinewidth="3"
            data-borderlinewidth="3"
            data-steplinewidth="1"
            data-maxpoints="2"
            data-minpoints="2"
            data-xaxis="{ &quot;step&quot;: 1, &quot;substeps&quot;: 1, &quot;label&quot;: &quot;x&quot;, &quot;labelprecision&quot;: 0, &quot;precision&quot;: 0 }"
            data-yaxis="{ &quot;step&quot;: 1, &quot;substeps&quot;: 1, &quot;label&quot;: &quot;f(x)&quot;, &quot;labelprecision&quot;: 0, &quot;precision&quot;: 0 }"
            data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/7bc02854-7aa3-4a58-903b-48601fdc1a89/items/item-3/">
            <qti-interaction-markup>
              <div class="graph-container" id="graph-2"></div>
            </qti-interaction-markup>
            <qti-stylesheet href="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/7bc02854-7aa3-4a58-903b-48601fdc1a89/items/item-3/css/styles.css" type="text/css"/>
          </qti-portable-custom-interaction>
        </div>
      </div>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"></qti-response-processing> 
    </qti-assessment-item>`
  },
  {
    "identifier": "pci-graphing-interaction-altconfig",
    "guid": "0000-0022-000d",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    adaptive="false" identifier="pci-graphing-interaction-altconfig" time-dependent="false" title="PCI Graphing Interaction - altconfig"
    xml:lang="en-US" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0p1_v1p0.xsd">
    <qti-response-declaration base-type="point" cardinality="multiple" identifier="RESPONSE">
      <qti-correct-response>
        <qti-value>0.5 2</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-item-body>
      <div class="qti-layout-row">
        <div class="qti-layout-col12">
          <p>The graph shows a point <em>L</em> at (2,3) and a point <em>M</em> at (-1,1).</p>
          <qti-portable-custom-interaction response-identifier="RESPONSE"
            module="GraphingInteraction"
            custom-interaction-type-identifier="urn:ampup:pci:2025:graphingInteraction"
            data-graphtype="scatter"
            data-planetype="default"
            data-id="graph"
            data-title=""
            data-height="360"
            data-width="360"
            data-vlines="8"
            data-hlines="8"
            data-axislinewidth="3"
            data-borderlinewidth="3"
            data-steplinewidth="1"
            data-maxpoints="1"
            data-minpoints="1"
            data-invalidresponsemessage="You have not answered this question. Please plot the midpoint."
            data-xaxis="{ &quot;step&quot;: 1, &quot;substeps&quot;: 2, &quot;label&quot;: &quot;x&quot;, &quot;labelprecision&quot;: 0, &quot;precision&quot;: 1 }"
            data-yaxis="{ &quot;step&quot;: 1, &quot;substeps&quot;: 2, &quot;label&quot;: &quot;y&quot;, &quot;labelprecision&quot;: 0, &quot;precision&quot;: 1 }"
            data-fixedpoints="{ &quot;points&quot;: [{ &quot;x&quot;: 2, &quot;y&quot;: 3, &quot;label&quot;: &quot;L&quot; },{ &quot;x&quot;: -1, &quot;y&quot;: 1, &quot;label&quot;: &quot;M&quot; }]}"
            data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/eb88acca-d711-4129-abc4-c91d1a2605b1/items/item-4/">
            <qti-interaction-modules primary-configuration="config.json">
              <qti-interaction-module id="PlottedPoint"/>
              <qti-interaction-module id="FullPlane"/>
              <qti-interaction-module id="CoordinatePlaneFactory"/>
              <qti-interaction-module id="Graph"/>
              <qti-interaction-module id="GraphingModule"/>
              <qti-interaction-module id="GraphingInteraction"/>
              <qti-interaction-module id="bignumber"/>
              <qti-interaction-module id="raphael"/>
            </qti-interaction-modules>
            <qti-interaction-markup>
              <div class="qti-layout-row">
                <div class="qti-layout-col8">
                  <div class="graph-container" id="graph"></div>
                </div>
                <div class="qti-layout-col4">
                  <div class="qti-well qti-padding-5">
                    <p>Look at me! I am in a "well" with padding 5 because I use QTI 3 shared css classes.</p>
                    <p>I'm in a PCI that uses a primary-configuration file: "config.json" to locate my modules and dependencies.</p>
                    <p>Now <strong>plot a point at the midpoint</strong> between <em>L</em> and <em>M</em>.</p>
                  </div>
                </div>
              </div>
            </qti-interaction-markup> 
            <qti-stylesheet href="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/eb88acca-d711-4129-abc4-c91d1a2605b1/items/item-4/css/styles.css" type="text/css"/>
          </qti-portable-custom-interaction>
        </div>
      </div>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "pci-graphing-interaction-altconfig-modules",
    "guid": "0000-0022-000e",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    adaptive="false" identifier="pci-graphing-interaction-altconfig-modules" time-dependent="false" 
    title="PCI Graphing Interaction - altconfig modules" xml:lang="en-US" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0p1_v1p0.xsd">
    <qti-response-declaration base-type="point" cardinality="multiple" identifier="RESPONSE">
      <qti-correct-response>
        <qti-value>0.5 2</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-item-body>
      <div class="qti-layout-row">
        <div class="qti-layout-col12">
          <p class="stimulus">The graph shows a point <em>L</em> at (2,3) and a point <em>M</em> at (-1,1).</p>
          <qti-portable-custom-interaction response-identifier="RESPONSE"
            module="GraphingInteraction"
            custom-interaction-type-identifier="urn:ampup:pci:2025:graphingInteraction"
            data-width="360"
            data-height="360"
            data-id="graph"
            data-graphtype="scatter"
            data-planetype="default"
            data-title=""
            data-vlines="8"
            data-hlines="8"
            data-borderlinewidth="3"
            data-axislinewidth="3"
            data-steplinewidth="1"
            data-maxpoints="1"
            data-minpoints="1"
            data-invalidresponsemessage="You have not answered this question. Please plot the midpoint."
            data-xaxis="{ &quot;step&quot;: 1, &quot;substeps&quot;: 2, &quot;label&quot;: &quot;x&quot;, &quot;labelprecision&quot;: 0, &quot;precision&quot;: 1 }"
            data-yaxis="{ &quot;step&quot;: 1, &quot;substeps&quot;: 2, &quot;label&quot;: &quot;y&quot;, &quot;labelprecision&quot;: 0, &quot;precision&quot;: 1 }"
            data-fixedpoints="{ &quot;points&quot;: [{ &quot;x&quot;: 2, &quot;y&quot;: 3, &quot;label&quot;: &quot;L&quot; },{ &quot;x&quot;: -1, &quot;y&quot;: 1, &quot;label&quot;: &quot;M&quot; }]}"
            data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/73e04d9e-f5d6-48c5-80da-f1ddfaa72281/items/item-5/">
            <!-- config.json only has 2 of the dependencies -->
            <qti-interaction-modules primary-configuration="config.json">
              <!-- Use qti-interaction-module elements to resolve all 7 of the remaining module dependencies -->
              <qti-interaction-module id="PciUtilities" primary-path="modules/PciUtilities"/>
              <qti-interaction-module id="PlottedPoint" primary-path="modules/PlottedPoint"/>
              <qti-interaction-module id="FullPlane" primary-path="modules/FullPlane"/>
              <qti-interaction-module id="CoordinatePlaneFactory" primary-path="modules/CoordinatePlaneFactory"/>
              <qti-interaction-module id="Graph" primary-path="modules/Graph"/>
              <qti-interaction-module id="GraphingModule" primary-path="modules/GraphingModule"/>
              <qti-interaction-module id="GraphingInteraction" primary-path="modules/GraphingInteraction"/>
            </qti-interaction-modules>
            <qti-interaction-markup>
              <div class="qti-layout-row">
                <div class="qti-layout-col6">
           	      <div id="graph" class="graph-container"></div>
                </div>
                <div class="qti-layout-col6">
                  <div class="qti-well qti-padding-1">
                    <p>I'm in a PCI that uses a primary-configuration file: "config.json" to locate 2 of my dependencies (Raphael and BigNumber).</p>
                    <p>The remaining 7 dependencies are located by using qti-interaction-module elements with primary-path attributes.</p>
                    <p>Now <strong>plot a point at the midpoint</strong> between <em>L</em> and <em>M</em>.</p>
                  </div>
                </div>
              </div>
            </qti-interaction-markup>
            <qti-stylesheet href="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/73e04d9e-f5d6-48c5-80da-f1ddfaa72281/items/item-5/css/styles.css" type="text/css"/>
          </qti-portable-custom-interaction>
        </div>
      </div>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "pci-graphing-interaction-fallback-mr",
    "guid": "0000-0022-000f",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0p1_v1p0.xsd" 
    identifier="pci-graphing-interaction-fallback-mr" title="PCI Graphing Interaction - fallback module resolution"
    xml:lang="en-US" adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE" cardinality="multiple" base-type="point">
      <qti-correct-response>
        <qti-value>0.5 2</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-item-body>
      <div class="qti-layout-row">
        <div class="qti-layout-col12">
          <p class="stimulus">
            The graph shows a point <em>L</em> at (2,3) and a point <em>M</em> at (-1,1).
          </p>
          <qti-portable-custom-interaction response-identifier="RESPONSE"
            module="GraphingInteraction"
            custom-interaction-type-identifier="urn:ampup:pci:2025:graphingInteraction"
            data-width="360"
            data-height="360"
            data-id="graph"
            data-graphtype="scatter"
            data-planetype="default"
            data-title=""
            data-vlines="8"
            data-hlines="8"
            data-borderlinewidth="3"
            data-axislinewidth="3"
            data-steplinewidth="1"
            data-maxpoints="1"
            data-minpoints="1"
            data-invalidresponsemessage="You have not answered this question. Please plot the midpoint."
            data-xaxis="{ &quot;step&quot;: 1, &quot;substeps&quot;: 2, &quot;label&quot;: &quot;x&quot;, &quot;labelprecision&quot;: 0, &quot;precision&quot;: 1 }"
            data-yaxis="{ &quot;step&quot;: 1, &quot;substeps&quot;: 2, &quot;label&quot;: &quot;y&quot;, &quot;labelprecision&quot;: 0, &quot;precision&quot;: 1 }"
            data-fixedpoints="{ &quot;points&quot;: [{ &quot;x&quot;: 2, &quot;y&quot;: 3, &quot;label&quot;: &quot;L&quot; },{ &quot;x&quot;: -1, &quot;y&quot;: 1, &quot;label&quot;: &quot;M&quot; }]}"
            data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/6508441d-f132-45c1-9ee0-d118160c6e64/items/item-6/">
            <!-- config.json has 8 of the 9 dependencies.  Missing only the "Graph".  Graph is defined below. -->
            <qti-interaction-modules primary-configuration="config.json">
              <!-- Should torpedo resolution of config.json and result in resolution of 
                   provided fallback_module_resolution.js because there is no secondary-configuration attribute
                   on the qti-interaction-modules element. -->
              <qti-interaction-module id="Graph" fallback-path="modules/Graph" primary-path="modules/GraphNOTFOUND"/>
            </qti-interaction-modules>
            <qti-interaction-markup>
              <div class="qti-layout-row">
                <div class="qti-layout-col5">
           	      <div id="graph" class="graph-container"></div>
                </div>
                <div class="qti-layout-col7">
                  <div class="qti-well qti-padding-1">
                    <p>I'm in a PCI that uses a primary-configuration file: "config.json" to locate dependencies.</p>
                    <p>
                      However, the Graph module has a primary-path that cannot be resolved, which results in a 
                      delivery platform attempting to resolve modules with a modules/fallback_module_resolution.js file.
                    </p>
                    <p>Now <strong>plot a point at the midpoint</strong> between <em>L</em> and <em>M</em>.</p>
                  </div>
                </div>
              </div>
            </qti-interaction-markup>
            <qti-stylesheet href="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/6508441d-f132-45c1-9ee0-d118160c6e64/items/item-6/css/styles.css" type="text/css"/>
          </qti-portable-custom-interaction>
        </div>
      </div>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "measuringPh",
    "guid": "0000-0022-0001",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" adaptive="false" identifier="measuringPh" time-dependent="false" title="Exploring the measurement of pH using red cabbage extract" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd">
      <qti-response-declaration base-type="integer" cardinality="single" identifier="RESPONSE"/>
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
        <qti-default-value>
          <qti-value>1.0</qti-value>
        </qti-default-value>
      </qti-outcome-declaration>
      <qti-item-body>
        <div>
          <h1>Measuring pH</h1>
          <p>Did you know that red cabbage juice can be used to determine if a liquid is an acid or a base? </p>
          <qti-portable-custom-interaction class="hmh-tap-border-rounded" custom-interaction-type-identifier="urn:fdc:hmhco.com:pci:tapToReveal" data-tap-message="Tap to reveal the color of the solution" data-toggle="true" module="tap" response-identifier="RESPONSE" data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/d3132852-d6af-400d-9d17-7e4edbde51ca/ab6d4b58-5e0f-4ac9-83bc-67d1b4bc7ac5/ab7d1888-4b0b-43df-a137-7aac18d24e72/">
            <qti-prompt>
              <p>Add 30ml of red cabbage solution to 100ml of each of the solutions below.</p>
              <p>Observe the color change.</p> 
              <p>Click to see if your solution became the expected color.</p>
            </qti-prompt>
            <qti-interaction-markup>
              <section class="border">
                <div role="grid">
                  <div role="row">
                    <figure role="gridcell">
                      <figcaption>
                        <h5>Baking Soda</h5>
                      </figcaption>
                      <img alt="Baking soda solution turns bright blue." class="tap" src="https://storage.googleapis.com/bank-dev-ampup/c/d3132852-d6af-400d-9d17-7e4edbde51ca/ab6d4b58-5e0f-4ac9-83bc-67d1b4bc7ac5/ab7d1888-4b0b-43df-a137-7aac18d24e72/baking_soda.svg"/>
                    </figure>
                    <figure role="gridcell">
                      <figcaption>
                        <h5>Vinegar</h5>
                      </figcaption>
                      <img alt="Vinegar turns pink." class="tap" src="https://storage.googleapis.com/bank-dev-ampup/c/d3132852-d6af-400d-9d17-7e4edbde51ca/ab6d4b58-5e0f-4ac9-83bc-67d1b4bc7ac5/ab7d1888-4b0b-43df-a137-7aac18d24e72/vinegar.svg"/>
                    </figure>
                    <figure role="gridcell">
                      <figcaption>
                        <h5>Ammonia</h5>
                      </figcaption>
                      <img alt="Ammonia turns light green." class="tap" src="https://storage.googleapis.com/bank-dev-ampup/c/d3132852-d6af-400d-9d17-7e4edbde51ca/ab6d4b58-5e0f-4ac9-83bc-67d1b4bc7ac5/ab7d1888-4b0b-43df-a137-7aac18d24e72/ammonia.svg"/>
                    </figure>
                  </div>
                </div>
              </section>
            </qti-interaction-markup>
          </qti-portable-custom-interaction>
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "fractions-no-dependencies",
    "guid": "0000-0022-0002",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" adaptive="false" identifier="fractions-no-dependencies" time-dependent="false" title="Simple Shaded Grid Interaction with no module dependencies" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 http://www.imsglobal.org/xsd/qti/qtiv3p0/imsqti_asiv3p0_v1p0.xsd">
      <qti-response-declaration base-type="integer" cardinality="single" identifier="RESPONSE">
        <qti-correct-response> <qti-value>6</qti-value> </qti-correct-response>
      </qti-response-declaration>
      <qti-response-declaration base-type="integer" cardinality="single" identifier="EXAMPLE"/>
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
        <qti-default-value>
          <qti-value>0.0</qti-value>
        </qti-default-value>
      </qti-outcome-declaration>
      <qti-item-body>
        <div>
          Mary is saving to buy a birthday present for her mother. Every week she counts the money she has saved into piles of $5. At the end of the first week Mary had saved $10 and was planning to buy her mother a present worth $30.
          <p> </p>
          She represented this in the following shaded chart with a shaded square for every $5 saved and a target of $30.
          <p> </p>
          <qti-portable-custom-interaction custom-interaction-type-identifier="urn:fdc:hmhco.com:pci:shading" data-active="0" data-controls="none" data-dimension1_initial="3" data-dimension2_initial="2" data-element_diameter="60" data-render="grid" data-selected="0.0,1.0" data-selected_color="red" data-unselected_color="white" data-value="numShaded" response-identifier="EXAMPLE" data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/b110b173-a4a7-4ec2-8dff-4988395da848/">
            <qti-interaction-modules>
              <qti-interaction-module fallback-path="modules/shading.js" id="shading" primary-path="modules/shadingXX.js"/>
            </qti-interaction-modules>
            <qti-interaction-markup>
            </qti-interaction-markup>
          </qti-portable-custom-interaction>
          <p>By the second week she has already saved the exact amount she planned on spending on the present ($30) and is trying to work out if she will be able to afford a more expensive present costing $45.</p>
          <p>To help her do this use the buttons below to create a chart representing $45 assuming that each square represents $5 and then click to shade the fraction of the chart representing the amount saved in two weeks.</p>
          <qti-portable-custom-interaction custom-interaction-type-identifier="urn:fdc:hmhco.com:pci:shading" data-controls="full" data-dimension1_initial="2" data-dimension2_initial="2" data-element_diameter="60" data-render="grid" data-selected_color="red" data-unselected_color="white" data-value="numShaded" response-identifier="RESPONSE" data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/b110b173-a4a7-4ec2-8dff-4988395da848/">
            <qti-interaction-modules>
              <qti-interaction-module fallback-path="modules/shading.js" id="shading" primary-path="modules/shadingYY.js"/>
            </qti-interaction-modules>
            <qti-interaction-markup>
            </qti-interaction-markup>
          </qti-portable-custom-interaction>
        </div>
      </qti-item-body>
      <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "cito-pci-vanilla",
    "guid": "0000-0022-0003",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" adaptive="false" identifier="cito-pci-vanilla" time-dependent="false" title="CITO Vanilla PCI" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd">
      <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE"/>
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
        <qti-default-value>
         <qti-value>0</qti-value>
        </qti-default-value>
      </qti-outcome-declaration>
      <qti-item-body>
        <div>
          <qti-portable-custom-interaction custom-interaction-type-identifier="HelloWorld" data-height="200" data-question="What percentage is colored green?" data-title="Percentages" data-width="200" response-identifier="RESPONSE" data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/4f67a174-dbd7-41d8-af0b-d9f96a53c3a2/">
            <qti-interaction-modules primary-configuration="modules/module_resolution.json">
              <qti-interaction-module id="vanilla" primary-path="modules/vanilla2.js"/>
            </qti-interaction-modules>
            <qti-interaction-markup>
              <div class="qti-hidden assets">
                <img alt="procenten" id="pctn" src="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/4f67a174-dbd7-41d8-af0b-d9f96a53c3a2/assets/procenten.png"/>
              </div>
            </qti-interaction-markup>
          </qti-portable-custom-interaction>
        </div>
      </qti-item-body>
      <qti-response-processing>
        <qti-response-condition>
          <qti-response-if>
            <qti-match>
              <qti-variable identifier="RESPONSE"/>
              <qti-base-value base-type="string">30</qti-base-value>
            </qti-match>
            <qti-set-outcome-value identifier="SCORE">
              <qti-base-value base-type="float">1</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-if>
          <qti-response-else>
            <qti-set-outcome-value identifier="SCORE">
              <qti-base-value base-type="float">0</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-else>
        </qti-response-condition>
      </qti-response-processing>
    </qti-assessment-item>`
  },
  {
    "identifier": "OAT-pci-likert",
    "guid": "0000-0022-0004",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" adaptive="false" identifier="likert-OAT-PCI" label="PCI likert" time-dependent="false" title="PCI likert" xml:lang="en-US" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd">
      <qti-response-declaration base-type="integer" cardinality="single" identifier="RESPONSE"/>
      <qti-item-body>
        <div class="qti-layout-row">
          <div class="qti-layout-col-12">
            <qti-portable-custom-interaction custom-interaction-type-identifier="urn:oat:pci:likert" data-label-max="max" data-label-min="min" data-level="5" response-identifier="RESPONSE" data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/d3132852-d6af-400d-9d17-7e4edbde51ca/ab6d4b58-5e0f-4ac9-83bc-67d1b4bc7ac5/de08735b-c075-4086-995f-8b549156f13e/i150107567172373/">
              <qti-interaction-modules primary-configuration="../oat-pci.json">
                <qti-interaction-module id="imsSamplePciLikert_runtime_js_imsSamplePciLikert" primary-path="../imsSamplePciLikert/runtime/js/imsSamplePciLikert.js"></qti-interaction-module>
                <qti-interaction-module id="imsSamplePciLikert_runtime_js_renderer" primary-path="../imsSamplePciLikert/runtime/js/renderer.js"></qti-interaction-module>
                <qti-interaction-module id="jquery_2_1_1"></qti-interaction-module>
              </qti-interaction-modules>
              <qti-interaction-markup>
                <div class="imsSamplePciLikert">
                  <div class="prompt"></div>
                  <ul class="likert"></ul>
                  <div class="qti-hidden assets">
                    <img alt="thumb down" class="ThumbDown" src="https://storage.googleapis.com/bank-dev-ampup/c/d3132852-d6af-400d-9d17-7e4edbde51ca/ab6d4b58-5e0f-4ac9-83bc-67d1b4bc7ac5/de08735b-c075-4086-995f-8b549156f13e/imsSamplePciLikert/runtime/assets/ThumbDown.png"/>
                    <img alt="thumb up" class="ThumbUp" src="https://storage.googleapis.com/bank-dev-ampup/c/d3132852-d6af-400d-9d17-7e4edbde51ca/ab6d4b58-5e0f-4ac9-83bc-67d1b4bc7ac5/de08735b-c075-4086-995f-8b549156f13e/imsSamplePciLikert/runtime/assets/ThumbUp.png"/>
                    <img alt="" class="bg" src="https://storage.googleapis.com/bank-dev-ampup/c/d3132852-d6af-400d-9d17-7e4edbde51ca/ab6d4b58-5e0f-4ac9-83bc-67d1b4bc7ac5/de08735b-c075-4086-995f-8b549156f13e/imsSamplePciLikert/runtime/css/img/bg.png"/>
                  </div>
                </div>
              </qti-interaction-markup>
            </qti-portable-custom-interaction>
          </div>
        </div>
      </qti-item-body>
    </qti-assessment-item>`
  },
  {
    "identifier": "cito-pci-color-proportions",
    "guid": "0000-0022-0005a",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" adaptive="false" identifier="cito-pci-color-proportions" label="pci 1" time-dependent="false" title="pci 1" tool-name="TAO" tool-version="3.4.0-sprint121" xml:lang="en-US" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd">
    <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE">
      <qti-correct-response>
        <qti-value>[{"color":"blue","percentage":25},{"color":"green","percentage":25},{"color":"red","percentage":50}]</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-stylesheet href="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/de70596e-32d7-4001-99a0-569242f4396e/items/i67a0dfca446508820f6286cf78feea/style/custom/tao-user-styles.css" media="all" title="" type="text/css"/>
    <qti-item-body>
      <div class="qti-layout-row">
        <div class="qti-layout-col12">
          <p>Color the square in the following proportions:</p>
          <ul><li>50% red</li> <li>25% blue</li><li>25% green</li></ul>
        </div>
      </div>
      <div class="qti-layout-row">
        <div class="qti-layout-col12">
          <qti-portable-custom-interaction
            response-identifier="RESPONSE"
            custom-interaction-type-identifier="colorProportions"
            module="colorProportions"
            data-colors="red, blue, green"
            data-height="400"
            data-version="1.0.1"
            data-width="400"
            data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/de70596e-32d7-4001-99a0-569242f4396e/items/i67a0dfca446508820f6286cf78feea/">
            <qti-interaction-modules>
              <qti-interaction-module id="colorProportions" primary-path="../../interaction/runtime/js/index.js"/>
            </qti-interaction-modules>
            <qti-interaction-markup>
              <div class="pciInteraction">
                <div class="prompt"></div>
                <ul class="pci"></ul>
              </div>
            </qti-interaction-markup>
          </qti-portable-custom-interaction>
        </div>
      </div>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  //{
  //  "identifier": "cito-pci-color-proportions-new",
  //  "guid": "0000-0022-0005b",
  //  "submissionMode": "individual",
  //  "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" adaptive="false" identifier="verhoudingen" label="verhoudingen" time-dependent="false" title="verhoudingen" tool-name="TAO" tool-version="3.4.0-sprint121" xml:lang="en-US" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"> <qti-response-declaration base-type="string" cardinality="single" identifier="RESPONSE"> <qti-correct-response> <qti-value>[{"color":"blue","percentage":25},{"color":"green","percentage":25},{"color":"red","percentage":50}]</qti-value> </qti-correct-response> </qti-response-declaration> <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"></qti-outcome-declaration> <qti-stylesheet href="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/985906af-6d46-49f2-a8cc-1f7c2a008e30/items/i67a0dfca446508820f6286cf78feea/style/custom/tao-user-styles.css" media="all" title="" type="text/css"/> <qti-item-body> <div class="grid-row"> <div class="col-12"> <p>Color the square in the following proportions:</p> <ul> <li>50% red</li> <li>25% blue</li> <li>25% green</li> </ul> </div> </div> <div class="grid-row"> <div class="col-12"> <qti-portable-custom-interaction custom-interaction-type-identifier="colorProportions" data-colors="red, blue, green" data-height="400" data-version="1.0.1" data-width="400" module="colorProportions" response-identifier="RESPONSE" data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/985906af-6d46-49f2-a8cc-1f7c2a008e30/items/i67a0dfca446508820f6286cf78feea/"> <qti-interaction-modules> <qti-interaction-module id="colorProportions" primary-path="../../interaction/runtime/js/index.js"></qti-interaction-module> </qti-interaction-modules> <qti-interaction-markup> <div class="pciInteraction"> <div class="prompt"></div> <ul class="pci"></ul> </div> </qti-interaction-markup> </qti-portable-custom-interaction> </div> </div> </qti-item-body> <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"></qti-response-processing> </qti-assessment-item>`
  //},
  {
    "identifier": "OAT-pci-audio-recorder",
    "guid": "0000-0022-0006",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" adaptive="false" identifier="audioRecorder-OAT-PCI" label="PCI audio recorder" time-dependent="false" title="PCI audio recorder" xml:lang="en-US" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0p1_v1p0.xsd">
      <qti-response-declaration base-type="file" cardinality="single" identifier="RESPONSE"/>
      <qti-item-body>
        <div class="qti-layout-row">
          <div class="qti-layout-col12">
            <p>OAT Audio Recorder PCI [maxRecords=2, maxRecordingTime=20, autoStart=false]</p>
            <qti-portable-custom-interaction custom-interaction-type-identifier="urn:oat:pci:audioRecordingInteraction"
              data-allowPlayback="true"
              data-autoPlayback=""
              data-autoStart=""
              data-delayMinutes="0"
              data-delaySeconds="0"
              data-displayDownloadLink=""
              data-hideRecordButton=""
              data-hideStopButton=""
              data-maxRecordingTime="20"
              data-maxRecords="2"
              data-media="{}"
              data-playSound="true"
              data-updateResponsePartially="true"
              response-identifier="RESPONSE"
              data-item-path-uri="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/7af7720d-ac0d-4b8d-97f9-fb35fd5990d7/items/item-1/">
            <qti-interaction-modules primary-configuration="oat-pci.json">
              <qti-interaction-module id="audioRecordingInteraction_runtime_audioRecorder" primary-path="runtime/js/audioInteraction"/>
            </qti-interaction-modules>
            <qti-interaction-markup>
              <div class="audioRecordingInteraction">
                <div class="audio-rec">
                  <div class="input-meter">
                    <div class="countdown-pie-chart"></div>
                    <div class="leds"></div>
                    <div class="mic"></div>
                  </div>
                  <div class="progress"></div>
                  <div class="controls"></div>
                </div>
              </div>
            </qti-interaction-markup>
            <qti-stylesheet href="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/7af7720d-ac0d-4b8d-97f9-fb35fd5990d7/items/item-1/runtime/css/styles.css" type="text/css"/>
          </qti-portable-custom-interaction>
        </div>
      </div>
    </qti-item-body> 
    </qti-assessment-item>`
  },
  {
    "identifier": "media-interaction-video",
    "guid": "0000-0023-0001",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" adaptive="false" identifier="media-interaction-video" time-dependent="false" title="Media Interaction - Video" xml:lang="en-US" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd">
    <qti-response-declaration base-type="integer" cardinality="single" identifier="RESPONSE_VIDEO"/>
    <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE">
      <qti-correct-response>
        <qti-value>i2</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
      <qti-default-value>
        <qti-value>1</qti-value>
      </qti-default-value>
    </qti-outcome-declaration>
    <qti-item-body>
      <div class="qti-layout-row">
        <div class="qti-layout-col6">
          <qti-media-interaction autostart="false" loop="false" max-plays="2" min-plays="1" response-identifier="RESPONSE_VIDEO">
            <qti-prompt>
              <p>Watch the video below before answering the question. At most, you may watch it twice because max-plays is set to 2.</p>
            </qti-prompt>
            <video crossorigin="anonymous">
              <source src="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/d4f2bfb9-2327-40b5-80ac-84908d9842d5/media/QTI2018.mp4" type="video/mp4"/>
              <source src="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/d4f2bfb9-2327-40b5-80ac-84908d9842d5/media/QTI2018.ogg" type="video/ogg"/>
              <track kind="captions" label="English" src="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/d4f2bfb9-2327-40b5-80ac-84908d9842d5/media/QTI2018captions.vtt" srclang="en"/>
            </video>
          </qti-media-interaction>
        </div>
        <div class="qti-layout-col6">
          <qti-choice-interaction max-choices="1" min-choices="1" response-identifier="RESPONSE">
            <qti-prompt>The letters on the man's sweatshirt are an acronym for which institution?</qti-prompt>
            <qti-simple-choice identifier="i1"><p>Question and Test Interoperability Standard</p></qti-simple-choice>
            <qti-simple-choice identifier="i2"><p>Rhode Island School of Design</p></qti-simple-choice>
            <qti-simple-choice identifier="i3"><p>Region 1 Storage Device</p></qti-simple-choice>
            <qti-simple-choice identifier="i4"><p>Learning Impact Leadership Institute</p></qti-simple-choice>
          </qti-choice-interaction>
        </div>
      </div>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "media-interaction-audio",
    "guid": "0000-0023-0002",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" adaptive="false" identifier="media-interaction-audio" time-dependent="false" title="Media Interaction - Audio" xml:lang="en-US" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd">
    <qti-response-declaration base-type="integer" cardinality="single" identifier="RESPONSE_AUDIO"/>
    <qti-response-declaration base-type="identifier" cardinality="single" identifier="RESPONSE">
      <qti-correct-response>
        <qti-value>i3</qti-value>
      </qti-correct-response>
    </qti-response-declaration>
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE">
      <qti-default-value>
        <qti-value>1</qti-value>
      </qti-default-value>
    </qti-outcome-declaration>
    <qti-item-body>
      <div class="qti-layout-row">
        <div class="qti-layout-col6">
          <qti-media-interaction response-identifier="RESPONSE_AUDIO" autostart="false" min-plays="1" max-plays="2" loop="false">
            <qti-prompt>
              <p>Listen to the Korean expression below before answering the question.  At most, you may listen to the expression twice.</p>
            </qti-prompt>
            <audio>
              <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_korean.ogg" type="audio/ogg"/>
              <source src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/395362d7-242f-421f-bbef-da3958d28497/sbac-200-51246/glossary/item_51246_skate-park_16_korean.m4a" type="audio/mp4"/>
            </audio>
          </qti-media-interaction>
        </div>
        <div class="qti-layout-col6">
          <qti-choice-interaction class="qti-labels-none" shuffle="true" max-choices="1" min-choices="1" response-identifier="RESPONSE">
            <qti-prompt>What is the English translation of the Korean expression?</qti-prompt>
            <qti-simple-choice identifier="i1">ramps</qti-simple-choice>
            <qti-simple-choice identifier="i2">chosen</qti-simple-choice>
            <qti-simple-choice identifier="i3">skate park</qti-simple-choice>
            <qti-simple-choice identifier="i4">requires</qti-simple-choice>
          </qti-choice-interaction>
        </div>
      </div>
    </qti-item-body>
    <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "select-point-1",
    "guid": "0000-0024-0001",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" adaptive="false" 
    identifier="select-point-1" time-dependent="false" title="Classic Where is Edinburgh Example"
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd">
      <qti-response-declaration base-type="point" cardinality="single" identifier="RESPONSE">
        <qti-correct-response>
          <qti-value>96 114</qti-value>
        </qti-correct-response>
        <qti-area-mapping default-value="0">
          <qti-area-map-entry coords="96,114,16" mapped-value="1" shape="circle"/>
        </qti-area-mapping>
      </qti-response-declaration>
      <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
      <qti-item-body>
        <p>
          The picture below illustrates four of the most popular destinations for air travelers arriving in the United Kingdom: London, Manchester, Edinburgh and Glasgow.
        </p>
        <qti-select-point-interaction max-choices="1" response-identifier="RESPONSE">
          <qti-prompt>
            <p>Mark Edinburgh on this map of the United Kingdom.</p>
          </qti-prompt>
          <img alt="Map of the United Kingdom" width="206" height="280" src="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/c73eca1b-59b4-4731-8ff7-3985cb8be19d/images/ukair.png"/>
        </qti-select-point-interaction>
      </qti-item-body>
      <qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/map_response_point.xml"/>
    </qti-assessment-item>`
  },
  {
    "identifier": "select-point-2",
    "guid": "0000-0024-0002",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" adaptive="false" 
    identifier="select-point-2" time-dependent="false" title="Select Point Interaction - shapes" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd">
    <qti-response-declaration base-type="point" cardinality="single" identifier="RESPONSE"/>
    <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-item-body>
      <p>In the following image, which part of the plant is the rhizome?</p>
      <p>Select a highlighted part of the image to indicate your answer.</p>
      <qti-select-point-interaction class="responsive" 
        max-choices="1" min-choices="1" 
        data-min-selections-message="You have not made a selection.  You must make one selection."
        data-max-selections-message="Only one selection.  Click your selection to remove it before adding a new selection."
        response-identifier="RESPONSE">
        <img alt="A diagram of a flowering water lily showing parts above the water, parts below the water, and parts under the ground." height="680" src="https://storage.googleapis.com/bank-dev-ampup/c/54393195-3146-417d-ba1f-eb80dc5a30e8/43894675-a8cb-4846-b594-29fcd130bc7f/e8390678-f4b7-4162-b3cc-37c3b9f261f9/images/plants.svg" width="680"/>
        </qti-select-point-interaction>
      </qti-item-body>
      <qti-response-processing>
        <qti-response-condition>
          <qti-response-if>
            <qti-inside coords="337,493,194,591,360,531,337,493" shape="poly">
              <qti-variable identifier="RESPONSE"/>
            </qti-inside>
            <qti-set-outcome-value identifier="SCORE">
              <qti-base-value base-type="float">1</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-if>
          <qti-response-else>
            <qti-set-outcome-value identifier="SCORE">
              <qti-base-value base-type="float">0</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-else>
        </qti-response-condition>
      </qti-response-processing>
    </qti-assessment-item>`
  },
  {
    "identifier": "shakespeare-biography",
    "guid": "0000-shake-bio1",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item 
      xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
      title="Shakespeare Biography" identifier="I17-Shakespeare-Biography" time-dependent="false" adaptive="false">
      <qti-response-declaration identifier="response_1" cardinality="single" base-type="identifier">
        <qti-correct-response>
          <qti-value>choice_1</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-response-declaration identifier="response_2" cardinality="single" base-type="identifier">
        <qti-correct-response>
          <qti-value>choice_4</qti-value>
        </qti-correct-response>
      </qti-response-declaration>
      <qti-response-declaration identifier="response_3" cardinality="single" base-type="string">
        <qti-correct-response>
          <qti-value>poet</qti-value>
        </qti-correct-response>
        <qti-mapping default-value="0">
          <qti-map-entry case-sensitive="false" map-key="poet" mapped-value="1"/>
          <qti-map-entry map-key="playwright" mapped-value="1"/>
          <qti-map-entry map-key="writer" mapped-value="0.5"/>
        </qti-mapping>
      </qti-response-declaration>
    
      <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
      <qti-outcome-declaration identifier="SCORE_1" cardinality="single" base-type="float"/>
      <qti-outcome-declaration identifier="SCORE_2" cardinality="single" base-type="float"/>
      <qti-outcome-declaration identifier="SCORE_3" cardinality="single" base-type="float"/>
    
      <qti-item-body>
        <p>
          <b>About William Shakespeare</b>
        </p>
        <p>
          Date of birth:
          <qti-inline-choice-interaction class="qti-input-width-10" response-identifier="response_1" shuffle="false">
            <qti-inline-choice identifier="choice_1">26 April 1564</qti-inline-choice>
            <qti-inline-choice identifier="choice_2">29 February 1664</qti-inline-choice>
            <qti-inline-choice identifier="choice_3">2 March 2010</qti-inline-choice>
          </qti-inline-choice-interaction>
        </p>
        <p>
          Date of death:
          <qti-inline-choice-interaction class="qti-input-width-10" response-identifier="response_2" shuffle="false">
            <qti-inline-choice identifier="choice_4">23 April 1616</qti-inline-choice>
            <qti-inline-choice identifier="choice_5">24 April 1616</qti-inline-choice>
            <qti-inline-choice identifier="choice_6">25 April 1616</qti-inline-choice>
          </qti-inline-choice-interaction>
        </p>
        <hr/>
        <p>
          <em>Shakespeare</em> was an English 
          <qti-text-entry-interaction response-identifier="response_3" expected-length="15"/>, 
          widely  regarded as the greatest writer in the English language and the 
          world's pre-eminent dramatist.  His surviving works, including some 
          collaborations, consist of about <strong>38</strong> plays, <strong>154</strong> sonnets, <strong>2</strong> 
          long poems, and several other poems.  His plays have been translated 
          into every major living language and are performed more often than those of 
          any other playwright.
        </p>
      </qti-item-body>
    
      <qti-response-processing>
        <qti-response-condition>
          <qti-response-if>
            <qti-match>
              <qti-variable identifier="response_1"/>
              <qti-correct identifier="response_1"/>
            </qti-match>
            <qti-set-outcome-value identifier="SCORE">
              <qti-sum>
                <qti-variable identifier="SCORE"/>
                <qti-base-value base-type="float">1</qti-base-value>
              </qti-sum>
            </qti-set-outcome-value>
            <qti-set-outcome-value identifier="SCORE_1">
              <qti-base-value base-type="float">1</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-if>
        </qti-response-condition>
        <qti-response-condition>
          <qti-response-if>
            <qti-match>
              <qti-variable identifier="response_2"/>
              <qti-correct identifier="response_2"/>
            </qti-match>
            <qti-set-outcome-value identifier="SCORE">
              <qti-sum>
                <qti-variable identifier="SCORE"/>
                <qti-base-value base-type="float">1</qti-base-value>
              </qti-sum>
            </qti-set-outcome-value>
            <qti-set-outcome-value identifier="SCORE_2">
              <qti-base-value base-type="float">1</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-if>
        </qti-response-condition>
        <qti-response-condition>
          <qti-response-if>
            <qti-not>
              <qti-is-null>
                <qti-variable identifier="response_3"/>
              </qti-is-null>
            </qti-not>
            <qti-set-outcome-value identifier="SCORE">
              <qti-sum>
                <qti-variable identifier="SCORE"/>
                <qti-map-response identifier="response_3"/>
              </qti-sum>
            </qti-set-outcome-value>
            <qti-set-outcome-value identifier="SCORE_3">
              <qti-map-response identifier="response_3"/>
            </qti-set-outcome-value>
          </qti-response-if>
        </qti-response-condition>
      </qti-response-processing>
    </qti-assessment-item>`
  },
  {
    "identifier": "stooges-match",
    "guid": "0000-stooges-0001",
    "submissionMode": "individual",    
    "xml": `<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd" 
    adaptive="false" identifier="match-stooges" time-dependent="false" title="Match Stooges">
<qti-response-declaration base-type="directedPair" cardinality="multiple" identifier="RESPONSE">
  <qti-correct-response>
    <qti-value>curly notsmart</qti-value>
  </qti-correct-response>
</qti-response-declaration>
<qti-item-body>
  <p>Categorize the Stooges!</p>
  <qti-match-interaction class="" min-associations="0" max-associations="0" response-identifier="RESPONSE" shuffle="false">
    <qti-simple-match-set>
        <qti-simple-associable-choice identifier="curly" match-max="0">Curly</qti-simple-associable-choice>
        <qti-simple-associable-choice identifier="moe" match-max="0">Moe</qti-simple-associable-choice>
        <qti-simple-associable-choice identifier="larry" match-max="0">Larry</qti-simple-associable-choice>
    </qti-simple-match-set>
    <qti-simple-match-set>
        <qti-simple-associable-choice identifier="bald" match-max="3">Bald</qti-simple-associable-choice>
        <qti-simple-associable-choice identifier="notsmart" match-max="3">Not Very Smart</qti-simple-associable-choice>
    </qti-simple-match-set>
  </qti-match-interaction>
</qti-item-body>
<qti-response-processing template="https://purl.imsglobal.org/spec/qti/v3p0/rptemplates/match_correct.xml"/>
</qti-assessment-item>`
  },
  {
    "identifier": "unattended-luggage-full",
    "guid": "0000-unattended-full",
    "submissionMode": "individual",    
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"identifier="q2-choice-interaction-single-sv-1" title="Choice Interaction - Single (SV 1)" adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE" cardinality="single" base-type="identifier">
      <qti-correct-response><qti-value>ChoiceA</qti-value></qti-correct-response>
    </qti-response-declaration>
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float">
      <qti-default-value><qti-value>0</qti-value></qti-default-value>
    </qti-outcome-declaration>
    <qti-item-body>
      <p>Look at the text in the picture.</p>
      <p>
        <img src="https://s3.amazonaws.com/grud-amp-bucket-1/items/1/a8c5bf34-f8fd-4a87-a098-0d7213292cb6/images/sign.png" alt="NEVER LEAVE LUGGAGE UNATTENDED"/>
      </p>

      <qti-choice-interaction max-choices="1" response-identifier="RESPONSE">
        <qti-prompt>What does it say?</qti-prompt>
        <qti-simple-choice identifier="ChoiceA">You must stay with your luggage at all times.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceB">Do not let someone else look after your luggage.</qti-simple-choice>
        <qti-simple-choice identifier="ChoiceC">Remember your luggage when you leave.</qti-simple-choice>
      </qti-choice-interaction>
    </qti-item-body>
    
    <!-- XML equivalent to match_correct RP template -->
    <qti-response-processing>
      <qti-response-condition>
        <qti-response-if>
          <qti-match>
            <qti-variable identifier="RESPONSE"/>
            <qti-correct identifier="RESPONSE"/>
          </qti-match>
          <qti-set-outcome-value identifier="SCORE">
            <qti-base-value base-type="float">1</qti-base-value>
          </qti-set-outcome-value>
        </qti-response-if>
        <qti-response-else>
          <qti-set-outcome-value identifier="SCORE">
            <qti-base-value base-type="float">0</qti-base-value>
          </qti-set-outcome-value>
        </qti-response-else>
      </qti-response-condition>
    </qti-response-processing>
  </qti-assessment-item>`
  },
  {
    "identifier": "composition-water-full",
    "guid": "0000-composition-full",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item 
    xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
    identifier="q2-choice-interaction-multiple-sv-1" title="Choice Interaction - Multiple (SV 1)" 
    adaptive="false" time-dependent="false">
    <qti-response-declaration identifier="RESPONSE" cardinality="multiple" base-type="identifier">
      <qti-correct-response>
        <qti-value>H</qti-value>
        <qti-value>O</qti-value>
      </qti-correct-response> 
      <qti-mapping lower-bound="0" upper-bound="2" default-value="-2">
        <qti-map-entry map-key="H" mapped-value="1"/>
        <qti-map-entry map-key="O" mapped-value="1"/>
        <qti-map-entry map-key="Cl" mapped-value="-1"/>
      </qti-mapping>
    </qti-response-declaration>
    <qti-outcome-declaration identifier="SCORE" cardinality="single" base-type="float"/>
    <qti-item-body>
      <qti-choice-interaction response-identifier="RESPONSE" max-choices="0">
        <qti-prompt>Which of the following elements are used to form water?</qti-prompt>
        <qti-simple-choice identifier="H" fixed="false">Hydrogen</qti-simple-choice>
        <qti-simple-choice identifier="He" fixed="false">Helium</qti-simple-choice>
        <qti-simple-choice identifier="C" fixed="false">Carbon</qti-simple-choice>
        <qti-simple-choice identifier="O" fixed="false">Oxygen</qti-simple-choice>
        <qti-simple-choice identifier="N" fixed="false">Nitrogen</qti-simple-choice>
        <qti-simple-choice identifier="Cl" fixed="false">Chlorine</qti-simple-choice>
      </qti-choice-interaction>
    </qti-item-body>

    <!-- XML equivalent to map_response RP template -->
    <qti-response-processing> 
      <qti-response-condition>
        <qti-response-if>
          <qti-is-null>
            <qti-variable identifier="RESPONSE"/>
          </qti-is-null>
          <qti-set-outcome-value identifier="SCORE">
            <qti-base-value base-type="float">0.0</qti-base-value>
          </qti-set-outcome-value>
        </qti-response-if>
        <qti-response-else>
          <qti-set-outcome-value identifier="SCORE">
            <qti-map-response identifier="RESPONSE"/>
          </qti-set-outcome-value>
        </qti-response-else>
      </qti-response-condition>
    </qti-response-processing>
  </qti-assessment-item>`
  },
  {
    "identifier": "feedback-solution-random",
    "guid": "0000-feedback-template",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" 
  xsi:schemaLocation="http://www.imsglobal.org/xsd/imsqtiasi_v3p0 https://purl.imsglobal.org/spec/qti/v3p0/schema/xsd/imsqti_asiv3p0_v1p0.xsd"
  adaptive="true" identifier="feedback-solution-random" time-dependent="false" title="Using qti-feedback-block to show a solution (random)" tool-name="Mathqurate" tool-version="0.9.7b">
  <qti-response-declaration base-type="float" cardinality="single" identifier="RESPONSE"/>
  <qti-response-declaration base-type="boolean" cardinality="single" identifier="SOLREQUEST"/>
  <qti-outcome-declaration base-type="identifier" cardinality="multiple" identifier="FEEDBACK"/>
  <qti-outcome-declaration base-type="identifier" cardinality="single" identifier="EMPTY"/>
  <qti-outcome-declaration base-type="float" cardinality="single" identifier="SCORE" normal-maximum="10.0" normal-minimum="0.0">
    <qti-default-value><qti-value>0.0</qti-value></qti-default-value>
  </qti-outcome-declaration>
  <qti-outcome-declaration base-type="boolean" cardinality="single" identifier="seenSolution">
    <qti-default-value><qti-value>false</qti-value></qti-default-value>
  </qti-outcome-declaration>
  <qti-outcome-declaration base-type="identifier" cardinality="single" identifier="ASKSOLUTION">
    <qti-default-value><qti-value>asksolution</qti-value></qti-default-value>
  </qti-outcome-declaration>
  <qti-template-declaration base-type="integer" cardinality="single" identifier="iA" math-variable="true" param-variable="false"/>
  <qti-template-declaration base-type="float" cardinality="single" identifier="fAns" math-variable="true" param-variable="false"/>
  <qti-template-declaration base-type="float" cardinality="single" identifier="fR" math-variable="true" param-variable="false"/>
  <qti-template-processing>
    <qti-set-template-value identifier="iA">
      <qti-random-integer max="4" min="1"/>
    </qti-set-template-value>
    <qti-set-template-value identifier="fAns">
      <qti-math-operator name="exp">
        <qti-variable identifier="iA"/>
      </qti-math-operator>
    </qti-set-template-value>
    <qti-set-template-value identifier="fR">
      <qti-round-to figures="3" rounding-mode="decimalPlaces">
        <qti-variable identifier="fAns"/>
      </qti-round-to>
    </qti-set-template-value>
  </qti-template-processing>
  <qti-item-body>
    <div class="qti-layout-row">
      <div class="qti-layout-col12">
        <p>Find the value of <math xmlns="http://www.w3.org/1998/Math/MathML" id="mathML0"><semantics><mrow><msup><mn>e</mn><mi>iA</mi></msup></mrow><annotation encoding="LaTeX">\\[\\e^\\qv{iA}\\]</annotation></semantics></math> to 3 decimal places.</p>
        <p class="qti-margin-b-2"><qti-text-entry-interaction class="qti-input-width-10" pattern-mask="([0-9.\\-]{0,10})" id="textEntryInteraction0" label="mathInput" response-identifier="RESPONSE"/>
          <qti-feedback-inline id="feedbackInline0" identifier="CORRECT" outcome-identifier="FEEDBACK" show-hide="show"> Correct </qti-feedback-inline>
          <qti-feedback-inline id="feedbackInline1" identifier="INCORRECT" outcome-identifier="FEEDBACK" show-hide="show"> No, that is not the correct answer</qti-feedback-inline>
        </p>
        <!-- this feedbackBlock contains the solution -->
        <qti-feedback-block class="" id="feedbackBlock2" identifier="SOLUTION" outcome-identifier="FEEDBACK" show-hide="show">
          <qti-content-body>
            <div class="qti-well"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block" id="mathML1"><semantics><mtable><mtr><mtd columnalign="right"><msup><mi>e</mi><mi>iA</mi></msup></mtd><mtd columnalign="center"><mo>=</mo></mtd><mtd columnalign="left"><mi>exp</mi><mfenced close=")" ><mi>iA</mi></mfenced></mtd></mtr><mtr><mtd columnalign="right"/><mtd columnalign="center"><mo>=</mo></mtd><mtd columnalign="left"><mi>fR</mi></mtd></mtr></mtable><annotation encoding="SnuggleTeX">\\begin{eqnarray*}e^\\qv{iA}         &amp;=&amp; \\exp(\\qv{iA})\\\\ &amp;=&amp;         \\qv{fR}\\end{eqnarray*}</annotation> </semantics></math></div>
          </qti-content-body>
        </qti-feedback-block>
        <!-- Explain why the score is zero (after viewing solution) -->
        <qti-feedback-block id="feedbackBlock4" identifier="SEEN-SOLUTION" outcome-identifier="FEEDBACK" show-hide="show">
          <qti-content-body>
            <p>Since you have viewed the solution, your score for this question will be 0.</p>
          </qti-content-body>
        </qti-feedback-block>
        <!-- show the solution button -->
        <qti-feedback-block id="feedbackBlock7" identifier="asksolution" outcome-identifier="ASKSOLUTION" show-hide="show">
          <qti-content-body>
            <p><qti-end-attempt-interaction id="endAttemptInteraction2" response-identifier="SOLREQUEST" title="Show Solution"/></p>
          </qti-content-body>
        </qti-feedback-block>
      </div>
    </div>
  </qti-item-body>
  <qti-response-processing>
    <qti-set-outcome-value identifier="FEEDBACK">
      <qti-multiple>
        <qti-variable identifier="EMPTY"/>
      </qti-multiple>
    </qti-set-outcome-value>
    <qti-response-condition>
      <qti-response-if>
        <qti-variable identifier="SOLREQUEST"/>
        <qti-set-outcome-value identifier="FEEDBACK">
          <qti-multiple>
            <qti-base-value base-type="identifier">SOLUTION</qti-base-value>
          </qti-multiple>
        </qti-set-outcome-value>
        <qti-set-outcome-value identifier="seenSolution">
          <qti-base-value base-type="boolean">true</qti-base-value>
        </qti-set-outcome-value>
        <qti-set-outcome-value identifier="completionStatus">
          <qti-base-value base-type="identifier">completed</qti-base-value>
        </qti-set-outcome-value>
        <qti-set-outcome-value identifier="ASKSOLUTION">
          <qti-base-value base-type="identifier">null</qti-base-value>
        </qti-set-outcome-value>
      </qti-response-if>
      <qti-response-else>
        <qti-response-condition>
          <qti-response-if>
            <qti-is-null>
              <qti-variable identifier="RESPONSE"/>
            </qti-is-null>
            <qti-set-outcome-value identifier="FEEDBACK">
              <qti-multiple>
                <qti-base-value base-type="identifier">INCORRECT</qti-base-value>
              </qti-multiple>
            </qti-set-outcome-value>
            <qti-set-outcome-value identifier="SCORE">
              <qti-base-value base-type="float">0</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-if>
          <qti-response-else>
            <qti-response-condition>
              <qti-response-if>
                <qti-equal-rounded figures="3" rounding-mode="decimalPlaces">
                  <qti-variable identifier="RESPONSE"/>
                  <qti-variable identifier="fAns"/>
                </qti-equal-rounded>
                <qti-set-outcome-value identifier="FEEDBACK">
                  <qti-multiple>
                    <qti-base-value base-type="identifier">CORRECT</qti-base-value>
                  </qti-multiple>
                </qti-set-outcome-value>
                <qti-set-outcome-value identifier="SCORE">
                  <qti-base-value base-type="float">2</qti-base-value>
                </qti-set-outcome-value>
              </qti-response-if>
              <qti-response-else>
                <qti-set-outcome-value identifier="FEEDBACK">
                  <qti-multiple>
                    <qti-base-value base-type="identifier">INCORRECT</qti-base-value>
                  </qti-multiple>
                </qti-set-outcome-value>
                <qti-set-outcome-value identifier="SCORE">
                  <qti-base-value base-type="float">0</qti-base-value>
                </qti-set-outcome-value>
              </qti-response-else>
            </qti-response-condition>
            <qti-set-outcome-value identifier="completionStatus">
              <qti-base-value base-type="identifier">completed</qti-base-value>
            </qti-set-outcome-value>
            <qti-set-outcome-value identifier="ASKSOLUTION">
              <qti-base-value base-type="identifier">null</qti-base-value>
            </qti-set-outcome-value>
          </qti-response-else>
        </qti-response-condition>
      </qti-response-else>
    </qti-response-condition>
    <!-- When an answer has been submitted, if the solution has been displayed, 
         the message about the score is added to the FEEDBACK, and SCORE is set to 0.0 -->
    <qti-response-condition>
      <qti-response-if>
        <qti-variable identifier="seenSolution"/>
        <qti-set-outcome-value identifier="FEEDBACK">
          <qti-multiple>
            <qti-variable identifier="FEEDBACK"/>
            <qti-base-value base-type="identifier">SEEN-SOLUTION</qti-base-value>
          </qti-multiple>
        </qti-set-outcome-value>
        <qti-set-outcome-value identifier="SCORE">
          <qti-base-value base-type="float">0.0</qti-base-value>
        </qti-set-outcome-value>
      </qti-response-if>
    </qti-response-condition>
  </qti-response-processing>
</qti-assessment-item>`
  },
  {
    "identifier": "murata-alice-1",
    "guid": "0000-0051-0001",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="itMfEWbRH_1" time-dependent="false" title="What was the main re">
    <qti-response-declaration xmlns="" base-type="identifier" cardinality="single" identifier="RESPONSE"><qti-correct-response><qti-value>choice_A</qti-value></qti-correct-response></qti-response-declaration>
    <qti-outcome-declaration xmlns="" base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-outcome-declaration xmlns="" base-type="identifier" cardinality="single" identifier="FEEDBACK"/>
    <qti-assessment-stimulus-ref xmlns="" href="../../stimuli/stimulus.xml" identifier="s08dpgsTz"/>
    <qti-item-body xmlns=""><div class="qti-shared-stimulus" data-stimulus-identifier="s08dpgsTz"><div class="qti-stimulus-body-element"><p><span>Read the following passage and answer the questions.</span></p><section aria-labelledby="h_1"><h2 id="h_1"><span>Down the Rabbit-Hole</span></h2><p><span>Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”</span></p><p><span>So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.</span></p><p><span>There was nothing so </span><em>very</em><span> remarkable in that; nor did Alice think it so </span><em>very</em><span> much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually </span><em>took a watch out of its waistcoat-pocket</em><span>, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.</span></p><p><span>In another moment down went Alice after it, never once considering how in the world she was to get out again.</span></p><p><span>The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.</span></p><p><span>Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled “ORANGE MARMALADE”, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody underneath, so managed to put it into one of the cupboards as she fell past it.</span></p><p><span>“Well!” thought Alice to herself, “after such a fall as this, I shall think nothing of tumbling down stairs! How brave they’ll all think me at home! Why, I wouldn’t say anything about it, even if I fell off the top of the house!” (Which was very likely true.)</span></p><p><span>Down, down, down. Would the fall </span><em>never</em><span> come to an end? “I wonder how many miles I’ve fallen by this time?” she said aloud. “I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think—” (for, you see, Alice had learnt several things of this sort in her lessons in the schoolroom, and though this was not a </span><em>very</em><span> good opportunity for showing off her knowledge, as there was no one to listen to her, still it was good practice to say it over) “—yes, that’s about the right distance—but then I wonder what Latitude or Longitude I’ve got to?” (Alice had no idea what Latitude was, or Longitude either, but thought they were nice grand words to say.)</span></p><p><span>Presently she began again. “I wonder if I shall fall right </span><em>through</em><span> the earth! How funny it’ll seem to come out among the people that walk with their heads downward! The Antipathies, I think—” (she was rather glad there </span><em>was</em><span> no one listening, this time, as it didn’t sound at all the right word) “—but I shall have to ask them what the name of the country is, you know. Please, Ma’am, is this New Zealand or Australia?” (and she tried to curtsey as she spoke—fancy </span><em>curtseying</em><span> as you’re falling through the air! Do you think you could manage it?) “And what an ignorant little girl she’ll think me for asking! No, it’ll never do to ask: perhaps I shall see it written up somewhere.”</span></p><p/></section></div></div>
    <p>What was the main reason Alice was getting bored by the river bank?</p>
    <qti-choice-interaction response-identifier="RESPONSE">
    <qti-simple-choice identifier="choice_A">It was too hot to do anything.</qti-simple-choice>
    <qti-simple-choice identifier="choice_B">The book her sister was reading had no pictures or conversations.</qti-simple-choice>
    <qti-simple-choice identifier="choice_C">A White Rabbit suddenly ran by her.</qti-simple-choice>
    <qti-simple-choice identifier="choice_D">She found making a daisy-chain too much trouble.</qti-simple-choice>
    </qti-choice-interaction>
    </qti-item-body>
    <qti-response-processing xmlns=""> <qti-response-condition> <qti-response-if> <qti-match> <qti-variable identifier="RESPONSE"/> <qti-correct identifier="RESPONSE"/> </qti-match> <qti-set-outcome-value identifier="SCORE"> <qti-base-value base-type="float">1</qti-base-value> </qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">correct</qti-base-value> </qti-set-outcome-value> </qti-response-if> <qti-response-else> <qti-set-outcome-value identifier="SCORE"> <qti-base-value base-type="float">0</qti-base-value> </qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">incorrect</qti-base-value> </qti-set-outcome-value> </qti-response-else> </qti-response-condition> </qti-response-processing>
    <qti-modal-feedback xmlns="" identifier="incorrect" outcome-identifier="FEEDBACK" show-hide="show"><qti-content-body><p>なし</p></qti-content-body></qti-modal-feedback>
    </qti-assessment-item>`
  },
  {
    "identifier": "murata-alice-2",
    "guid": "0000-0051-0002",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="itMfEWbRH_2" time-dependent="false" title="What items did Alice"><qti-response-declaration xmlns="" base-type="identifier" cardinality="multiple" identifier="RESPONSE"><qti-correct-response><qti-value>choice_A</qti-value></qti-correct-response></qti-response-declaration> <qti-outcome-declaration xmlns="" base-type="float" cardinality="single" identifier="SCORE"/> <qti-outcome-declaration xmlns="" base-type="identifier" cardinality="single" identifier="FEEDBACK"/> <qti-assessment-stimulus-ref xmlns="" href="../../stimuli/stimulus.xml" identifier="s08dpgsTz"/><qti-item-body xmlns=""><div class="qti-shared-stimulus" data-stimulus-identifier="s08dpgsTz"><div class="qti-stimulus-body-element"><p><span>Read the following passage and answer the questions.</span></p><section aria-labelledby="h_1"><h2 id="h_1"><span>Down the Rabbit-Hole</span></h2><p><span>Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”</span></p><p><span>So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.</span></p><p><span>There was nothing so </span><em>very</em><span> remarkable in that; nor did Alice think it so </span><em>very</em><span> much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually </span><em>took a watch out of its waistcoat-pocket</em><span>, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.</span></p><p><span>In another moment down went Alice after it, never once considering how in the world she was to get out again.</span></p><p><span>The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.</span></p><p><span>Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled “ORANGE MARMALADE”, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody underneath, so managed to put it into one of the cupboards as she fell past it.</span></p><p><span>“Well!” thought Alice to herself, “after such a fall as this, I shall think nothing of tumbling down stairs! How brave they’ll all think me at home! Why, I wouldn’t say anything about it, even if I fell off the top of the house!” (Which was very likely true.)</span></p><p><span>Down, down, down. Would the fall </span><em>never</em><span> come to an end? “I wonder how many miles I’ve fallen by this time?” she said aloud. “I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think—” (for, you see, Alice had learnt several things of this sort in her lessons in the schoolroom, and though this was not a </span><em>very</em><span> good opportunity for showing off her knowledge, as there was no one to listen to her, still it was good practice to say it over) “—yes, that’s about the right distance—but then I wonder what Latitude or Longitude I’ve got to?” (Alice had no idea what Latitude was, or Longitude either, but thought they were nice grand words to say.)</span></p><p><span>Presently she began again. “I wonder if I shall fall right </span><em>through</em><span> the earth! How funny it’ll seem to come out among the people that walk with their heads downward! The Antipathies, I think—” (she was rather glad there </span><em>was</em><span> no one listening, this time, as it didn’t sound at all the right word) “—but I shall have to ask them what the name of the country is, you know. Please, Ma’am, is this New Zealand or Australia?” (and she tried to curtsey as she spoke—fancy </span><em>curtseying</em><span> as you’re falling through the air! Do you think you could manage it?) “And what an ignorant little girl she’ll think me for asking! No, it’ll never do to ask: perhaps I shall see it written up somewhere.”</span></p><p/></section></div></div><p>What items did Alice see on the sides of the well as she was falling? (Select all that apply)</p><qti-choice-interaction max-choices="0" response-identifier="RESPONSE"><qti-simple-choice identifier="choice_A">Maps</qti-simple-choice><qti-simple-choice identifier="choice_B">Bookshelves</qti-simple-choice><qti-simple-choice identifier="choice_C">A watch</qti-simple-choice><qti-simple-choice identifier="choice_D">Cupboards</qti-simple-choice><qti-simple-choice identifier="choice_E">A jar of orange marmalade</qti-simple-choice></qti-choice-interaction></qti-item-body> <qti-response-processing xmlns=""> <qti-response-condition> <qti-response-if> <qti-match> <qti-variable identifier="RESPONSE"/> <qti-correct identifier="RESPONSE"/> </qti-match> <qti-set-outcome-value identifier="SCORE"> <qti-base-value base-type="float">1</qti-base-value> </qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">correct</qti-base-value> </qti-set-outcome-value> </qti-response-if> <qti-response-else> <qti-set-outcome-value identifier="SCORE"> <qti-base-value base-type="float">0</qti-base-value> </qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">incorrect</qti-base-value> </qti-set-outcome-value> </qti-response-else> </qti-response-condition> </qti-response-processing> <qti-modal-feedback xmlns="" identifier="incorrect" outcome-identifier="FEEDBACK" show-hide="show"><qti-content-body><p>なし</p></qti-content-body></qti-modal-feedback></qti-assessment-item>`
  },
  {
    "identifier": "murata-alice-3",
    "guid": "0000-0051-0003",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="itMfEWbRH_3" time-dependent="false" title="What did the Rabbit "><qti-response-declaration xmlns="" base-type="string" cardinality="single" identifier="RESPONSE"/> <qti-outcome-declaration xmlns="" base-type="float" cardinality="single" identifier="SCORE"/> <qti-assessment-stimulus-ref xmlns="" href="../../stimuli/stimulus.xml" identifier="s08dpgsTz"/><qti-item-body xmlns=""><div class="qti-shared-stimulus" data-stimulus-identifier="s08dpgsTz"><div class="qti-stimulus-body-element"><p><span>Read the following passage and answer the questions.</span></p><section aria-labelledby="h_1"><h2 id="h_1"><span>Down the Rabbit-Hole</span></h2><p><span>Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”</span></p><p><span>So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.</span></p><p><span>There was nothing so </span><em>very</em><span> remarkable in that; nor did Alice think it so </span><em>very</em><span> much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually </span><em>took a watch out of its waistcoat-pocket</em><span>, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.</span></p><p><span>In another moment down went Alice after it, never once considering how in the world she was to get out again.</span></p><p><span>The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.</span></p><p><span>Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled “ORANGE MARMALADE”, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody underneath, so managed to put it into one of the cupboards as she fell past it.</span></p><p><span>“Well!” thought Alice to herself, “after such a fall as this, I shall think nothing of tumbling down stairs! How brave they’ll all think me at home! Why, I wouldn’t say anything about it, even if I fell off the top of the house!” (Which was very likely true.)</span></p><p><span>Down, down, down. Would the fall </span><em>never</em><span> come to an end? “I wonder how many miles I’ve fallen by this time?” she said aloud. “I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think—” (for, you see, Alice had learnt several things of this sort in her lessons in the schoolroom, and though this was not a </span><em>very</em><span> good opportunity for showing off her knowledge, as there was no one to listen to her, still it was good practice to say it over) “—yes, that’s about the right distance—but then I wonder what Latitude or Longitude I’ve got to?” (Alice had no idea what Latitude was, or Longitude either, but thought they were nice grand words to say.)</span></p><p><span>Presently she began again. “I wonder if I shall fall right </span><em>through</em><span> the earth! How funny it’ll seem to come out among the people that walk with their heads downward! The Antipathies, I think—” (she was rather glad there </span><em>was</em><span> no one listening, this time, as it didn’t sound at all the right word) “—but I shall have to ask them what the name of the country is, you know. Please, Ma’am, is this New Zealand or Australia?” (and she tried to curtsey as she spoke—fancy </span><em>curtseying</em><span> as you’re falling through the air! Do you think you could manage it?) “And what an ignorant little girl she’ll think me for asking! No, it’ll never do to ask: perhaps I shall see it written up somewhere.”</span></p><p/></section></div></div><p>What did the Rabbit say to itself that Alice initially didn't find remarkable? (Quote the exact words the Rabbit said)</p><qti-extended-text-interaction class="" response-identifier="RESPONSE"/></qti-item-body></qti-assessment-item>`
  },
  {
    "identifier": "murata-alice-4",
    "guid": "0000-0051-0004",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="itMfEWbRH_4" time-dependent="false" title="As Alice was falling"><qti-response-declaration xmlns="" base-type="string" cardinality="single" identifier="RESPONSE"/> <qti-outcome-declaration xmlns="" base-type="float" cardinality="single" identifier="SCORE"/> <qti-assessment-stimulus-ref xmlns="" href="../../stimuli/stimulus.xml" identifier="s08dpgsTz"/><qti-item-body xmlns=""><div class="qti-shared-stimulus" data-stimulus-identifier="s08dpgsTz"><div class="qti-stimulus-body-element"><p><span>Read the following passage and answer the questions.</span></p><section aria-labelledby="h_1"><h2 id="h_1"><span>Down the Rabbit-Hole</span></h2><p><span>Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”</span></p><p><span>So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.</span></p><p><span>There was nothing so </span><em>very</em><span> remarkable in that; nor did Alice think it so </span><em>very</em><span> much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually </span><em>took a watch out of its waistcoat-pocket</em><span>, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.</span></p><p><span>In another moment down went Alice after it, never once considering how in the world she was to get out again.</span></p><p><span>The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.</span></p><p><span>Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled “ORANGE MARMALADE”, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody underneath, so managed to put it into one of the cupboards as she fell past it.</span></p><p><span>“Well!” thought Alice to herself, “after such a fall as this, I shall think nothing of tumbling down stairs! How brave they’ll all think me at home! Why, I wouldn’t say anything about it, even if I fell off the top of the house!” (Which was very likely true.)</span></p><p><span>Down, down, down. Would the fall </span><em>never</em><span> come to an end? “I wonder how many miles I’ve fallen by this time?” she said aloud. “I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think—” (for, you see, Alice had learnt several things of this sort in her lessons in the schoolroom, and though this was not a </span><em>very</em><span> good opportunity for showing off her knowledge, as there was no one to listen to her, still it was good practice to say it over) “—yes, that’s about the right distance—but then I wonder what Latitude or Longitude I’ve got to?” (Alice had no idea what Latitude was, or Longitude either, but thought they were nice grand words to say.)</span></p><p><span>Presently she began again. “I wonder if I shall fall right </span><em>through</em><span> the earth! How funny it’ll seem to come out among the people that walk with their heads downward! The Antipathies, I think—” (she was rather glad there </span><em>was</em><span> no one listening, this time, as it didn’t sound at all the right word) “—but I shall have to ask them what the name of the country is, you know. Please, Ma’am, is this New Zealand or Australia?” (and she tried to curtsey as she spoke—fancy </span><em>curtseying</em><span> as you’re falling through the air! Do you think you could manage it?) “And what an ignorant little girl she’ll think me for asking! No, it’ll never do to ask: perhaps I shall see it written up somewhere.”</span></p><p/></section></div></div><p>As Alice was falling down the rabbit-hole, she thought she must be getting somewhere near the center of the earth. She believed she had fallen approximately "<qti-text-entry-interaction response-identifier="RESPONSE"/>" down.</p></qti-item-body></qti-assessment-item>`
  },
  {
    "identifier": "murata-meta-1",
    "guid": "0000-0051-0005",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="i7MFS_cF6_1" time-dependent="false" title="Which of the followi"><qti-response-declaration xmlns="" base-type="identifier" cardinality="single" identifier="RESPONSE"><qti-correct-response><qti-value>choice_A</qti-value></qti-correct-response></qti-response-declaration> <qti-outcome-declaration xmlns="" base-type="float" cardinality="single" identifier="SCORE"/> <qti-outcome-declaration xmlns="" base-type="identifier" cardinality="single" identifier="FEEDBACK"/> <qti-assessment-stimulus-ref xmlns="" href="../../stimuli/stimulus.xml" identifier="sarRKDyHk"/><qti-item-body xmlns=""><div class="qti-shared-stimulus" data-stimulus-identifier="sarRKDyHk"><div class="qti-stimulus-body-element"><p><span>Read the following passage and answer the questions.</span></p><section aria-label="自動生成された階層"><section aria-labelledby="h_1_0"><h3 id="h_1_0"><span>Complete metamorphosis or </span><em>holometabolism</em></h3><p><span>Insects that have complete metamorphosis have four life stages. These insects start as eggs, which are very small. The egg hatches and a larva comes out. The larva looks like a worm and eats and eats so that it can grow much bigger. When the larva has grown it changes into a pupa. The pupa usually can not move or eat. The pupa is a special time when the insect is changing into an adult that will look very different from the larva or the pupa. Moth pupae (plural of pupa) are inside cocoons. When the pupa opens, the adult insect comes out.</span></p><p><span>Many insects have a life cycle of egg-larva-pupa-adult. Some of these insects are:</span></p><ol><li><span>Coleoptera: beetles</span><ol/></li><li><span>Hymenoptera: bees, wasps, ants, sawflies</span><ol/></li><li><span>Lepidoptera: butterflies, moths</span><ol/></li><li><span>Diptera: the flies</span><ol/></li></ol><p/><figure><figcaption><strong>Figure: </strong><strong>The monarch butterfly life cycle</strong></figcaption><img alt="The life cycle of a monarch butterfly, showing the stages: egg, caterpillar, chrysalis, and adult butterfly in a repeating cycle." src="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/d652e141-2152-4a38-806a-79e2a0435cae/media/image1.png" x="250" y="222"/></figure><p/><table><caption><strong>Table: </strong><strong>Metamorphosis: comparative lengths of life stage</strong></caption><colgroup><col style="width: 26.9%;"/><col style="width: 13.7%;"/><col style="width: 21.2%;"/><col style="width: 20.2%;"/><col style="width: 18.0%;"/></colgroup><thead><tr><th scope="col"><strong>Species</strong></th><th scope="col"><strong>Egg</strong></th><th scope="col"><strong>Larva/Nymph</strong></th><th scope="col"><strong>Pupa</strong></th><th scope="col"><strong>Adult</strong></th></tr></thead><tbody><tr><td><span>Housefly</span></td><td><span>1 day</span></td><td><span>2 weeks</span></td><td><span>1 week</span></td><td><span>2 weeks</span></td></tr></tbody><tbody><tr><td><span>Ladybird</span></td><td><span>4 days</span></td><td><span>2 weeks</span></td><td><span>2 weeks</span></td><td><span>3–9 months</span></td></tr></tbody><tbody><tr><td><span>Monarch Butterfly</span></td><td><span>4 days</span></td><td><span>2 weeks</span></td><td><span>10 days</span></td><td><span>2–6 weeks</span></td></tr></tbody><tbody><tr><td><span>Periodical </span><span>Cicada</span></td><td><span>1 month</span></td><td><span>13/17 years</span></td><td><span>no such stage</span></td><td><span>2 months</span></td></tr></tbody><tbody><tr><td><span>Mayfly</span></td><td><span>1 month</span></td><td><span>3 years</span></td><td><span>no such stage</span></td><td><span>1 day</span></td></tr></tbody><tbody><tr><td><span>Cockroach</span></td><td><span>1 month</span></td><td><span>3 months</span></td><td><span>no such stage</span></td><td><span>9 months</span></td></tr></tbody></table><p/><p/></section></section></div></div><p>Which of the following is the correct order of the four life stages in complete metamorphosis?</p><qti-choice-interaction response-identifier="RESPONSE"><qti-simple-choice identifier="choice_A">Egg → Pupa → Larva → Adult</qti-simple-choice><qti-simple-choice identifier="choice_B">Larva → Egg → Pupa → Adult</qti-simple-choice><qti-simple-choice identifier="choice_C">Egg → Larva → Pupa → Adult</qti-simple-choice><qti-simple-choice identifier="choice_D">Adult → Egg → Larva → Pupa</qti-simple-choice></qti-choice-interaction></qti-item-body> <qti-response-processing xmlns=""> <qti-response-condition> <qti-response-if> <qti-match> <qti-variable identifier="RESPONSE"/> <qti-correct identifier="RESPONSE"/> </qti-match> <qti-set-outcome-value identifier="SCORE"> <qti-base-value base-type="float">1</qti-base-value> </qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">correct</qti-base-value> </qti-set-outcome-value> </qti-response-if> <qti-response-else> <qti-set-outcome-value identifier="SCORE"> <qti-base-value base-type="float">0</qti-base-value> </qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">incorrect</qti-base-value> </qti-set-outcome-value> </qti-response-else> </qti-response-condition> </qti-response-processing> <qti-modal-feedback xmlns="" identifier="incorrect" outcome-identifier="FEEDBACK" show-hide="show"><qti-content-body><p>なし</p></qti-content-body></qti-modal-feedback></qti-assessment-item>`
  },
  {
    "identifier": "murata-meta-2",
    "guid": "0000-0051-0006",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="i7MFS_cF6_2" time-dependent="false" title="Which of the followi">
    <qti-response-declaration xmlns="" base-type="identifier" cardinality="multiple" identifier="RESPONSE"><qti-correct-response><qti-value>choice_A</qti-value></qti-correct-response></qti-response-declaration>
    <qti-outcome-declaration xmlns="" base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-outcome-declaration xmlns="" base-type="identifier" cardinality="single" identifier="FEEDBACK"/>
    <qti-assessment-stimulus-ref xmlns="" href="../../stimuli/stimulus.xml" identifier="sarRKDyHk"/>
    <qti-item-body xmlns=""><div class="qti-shared-stimulus" data-stimulus-identifier="sarRKDyHk"><div class="qti-stimulus-body-element"><p><span>Read the following passage and answer the questions.</span></p><section aria-label="自動生成された階層"><section aria-labelledby="h_1_0"><h3 id="h_1_0"><span>Complete metamorphosis or </span><em>holometabolism</em></h3><p><span>Insects that have complete metamorphosis have four life stages. These insects start as eggs, which are very small. The egg hatches and a larva comes out. The larva looks like a worm and eats and eats so that it can grow much bigger. When the larva has grown it changes into a pupa. The pupa usually can not move or eat. The pupa is a special time when the insect is changing into an adult that will look very different from the larva or the pupa. Moth pupae (plural of pupa) are inside cocoons. When the pupa opens, the adult insect comes out.</span></p><p><span>Many insects have a life cycle of egg-larva-pupa-adult. Some of these insects are:</span></p><ol><li><span>Coleoptera: beetles</span><ol/></li><li><span>Hymenoptera: bees, wasps, ants, sawflies</span><ol/></li><li><span>Lepidoptera: butterflies, moths</span><ol/></li><li><span>Diptera: the flies</span><ol/></li></ol><p/><figure><figcaption><strong>Figure: </strong><strong>The monarch butterfly life cycle</strong></figcaption><img alt="The life cycle of a monarch butterfly, showing the stages: egg, caterpillar, chrysalis, and adult butterfly in a repeating cycle." src="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/d652e141-2152-4a38-806a-79e2a0435cae/media/image1.png" x="250" y="222"/></figure><p/><table><caption><strong>Table: </strong><strong>Metamorphosis: comparative lengths of life stage</strong></caption><colgroup><col style="width: 26.9%;"/><col style="width: 13.7%;"/><col style="width: 21.2%;"/><col style="width: 20.2%;"/><col style="width: 18.0%;"/></colgroup><thead><tr><th scope="col"><strong>Species</strong></th><th scope="col"><strong>Egg</strong></th><th scope="col"><strong>Larva/Nymph</strong></th><th scope="col"><strong>Pupa</strong></th><th scope="col"><strong>Adult</strong></th></tr></thead><tbody><tr><td><span>Housefly</span></td><td><span>1 day</span></td><td><span>2 weeks</span></td><td><span>1 week</span></td><td><span>2 weeks</span></td></tr></tbody><tbody><tr><td><span>Ladybird</span></td><td><span>4 days</span></td><td><span>2 weeks</span></td><td><span>2 weeks</span></td><td><span>3–9 months</span></td></tr></tbody><tbody><tr><td><span>Monarch Butterfly</span></td><td><span>4 days</span></td><td><span>2 weeks</span></td><td><span>10 days</span></td><td><span>2–6 weeks</span></td></tr></tbody><tbody><tr><td><span>Periodical </span><span>Cicada</span></td><td><span>1 month</span></td><td><span>13/17 years</span></td><td><span>no such stage</span></td><td><span>2 months</span></td></tr></tbody><tbody><tr><td><span>Mayfly</span></td><td><span>1 month</span></td><td><span>3 years</span></td><td><span>no such stage</span></td><td><span>1 day</span></td></tr></tbody><tbody><tr><td><span>Cockroach</span></td><td><span>1 month</span></td><td><span>3 months</span></td><td><span>no such stage</span></td><td><span>9 months</span></td></tr></tbody></table><p/><p/></section></section></div></div>
    <p>Which of the following insect groups are examples of insects that undergo complete metamorphosis? (Select all that apply)</p>
    <qti-choice-interaction max-choices="0" response-identifier="RESPONSE">
    <qti-simple-choice identifier="choice_A">Beetles</qti-simple-choice>
    <qti-simple-choice identifier="choice_B">Butterflies</qti-simple-choice>
    <qti-simple-choice identifier="choice_C">Grasshoppers</qti-simple-choice>
    <qti-simple-choice identifier="choice_D">Bees</qti-simple-choice>
    <qti-simple-choice identifier="choice_E">Cockroaches</qti-simple-choice>
    </qti-choice-interaction>
    </qti-item-body>
    <qti-response-processing xmlns=""> <qti-response-condition> <qti-response-if> <qti-match> <qti-variable identifier="RESPONSE"/> <qti-correct identifier="RESPONSE"/> </qti-match> <qti-set-outcome-value identifier="SCORE"> <qti-base-value base-type="float">1</qti-base-value> </qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">correct</qti-base-value> </qti-set-outcome-value> </qti-response-if> <qti-response-else> <qti-set-outcome-value identifier="SCORE"> <qti-base-value base-type="float">0</qti-base-value> </qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">incorrect</qti-base-value> </qti-set-outcome-value> </qti-response-else> </qti-response-condition> </qti-response-processing> 
    <qti-modal-feedback xmlns="" identifier="incorrect" outcome-identifier="FEEDBACK" show-hide="show"><qti-content-body><p>なし</p></qti-content-body></qti-modal-feedback>
    </qti-assessment-item>`
  },
  {
    "identifier": "murata-meta-3",
    "guid": "0000-0051-0007",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="i7MFS_cF6_3" time-dependent="false" title="According to the tex"><qti-response-declaration xmlns="" base-type="string" cardinality="single" identifier="RESPONSE"/> <qti-outcome-declaration xmlns="" base-type="float" cardinality="single" identifier="SCORE"/> <qti-assessment-stimulus-ref xmlns="" href="../../stimuli/stimulus.xml" identifier="sarRKDyHk"/><qti-item-body xmlns=""><div class="qti-shared-stimulus" data-stimulus-identifier="sarRKDyHk"><div class="qti-stimulus-body-element"><p><span>Read the following passage and answer the questions.</span></p><section aria-label="自動生成された階層"><section aria-labelledby="h_1_0"><h3 id="h_1_0"><span>Complete metamorphosis or </span><em>holometabolism</em></h3><p><span>Insects that have complete metamorphosis have four life stages. These insects start as eggs, which are very small. The egg hatches and a larva comes out. The larva looks like a worm and eats and eats so that it can grow much bigger. When the larva has grown it changes into a pupa. The pupa usually can not move or eat. The pupa is a special time when the insect is changing into an adult that will look very different from the larva or the pupa. Moth pupae (plural of pupa) are inside cocoons. When the pupa opens, the adult insect comes out.</span></p><p><span>Many insects have a life cycle of egg-larva-pupa-adult. Some of these insects are:</span></p><ol><li><span>Coleoptera: beetles</span><ol/></li><li><span>Hymenoptera: bees, wasps, ants, sawflies</span><ol/></li><li><span>Lepidoptera: butterflies, moths</span><ol/></li><li><span>Diptera: the flies</span><ol/></li></ol><p/><figure><figcaption><strong>Figure: </strong><strong>The monarch butterfly life cycle</strong></figcaption><img alt="The life cycle of a monarch butterfly, showing the stages: egg, caterpillar, chrysalis, and adult butterfly in a repeating cycle." src="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/d652e141-2152-4a38-806a-79e2a0435cae/media/image1.png" x="250" y="222"/></figure><p/><table><caption><strong>Table: </strong><strong>Metamorphosis: comparative lengths of life stage</strong></caption><colgroup><col style="width: 26.9%;"/><col style="width: 13.7%;"/><col style="width: 21.2%;"/><col style="width: 20.2%;"/><col style="width: 18.0%;"/></colgroup><thead><tr><th scope="col"><strong>Species</strong></th><th scope="col"><strong>Egg</strong></th><th scope="col"><strong>Larva/Nymph</strong></th><th scope="col"><strong>Pupa</strong></th><th scope="col"><strong>Adult</strong></th></tr></thead><tbody><tr><td><span>Housefly</span></td><td><span>1 day</span></td><td><span>2 weeks</span></td><td><span>1 week</span></td><td><span>2 weeks</span></td></tr></tbody><tbody><tr><td><span>Ladybird</span></td><td><span>4 days</span></td><td><span>2 weeks</span></td><td><span>2 weeks</span></td><td><span>3–9 months</span></td></tr></tbody><tbody><tr><td><span>Monarch Butterfly</span></td><td><span>4 days</span></td><td><span>2 weeks</span></td><td><span>10 days</span></td><td><span>2–6 weeks</span></td></tr></tbody><tbody><tr><td><span>Periodical </span><span>Cicada</span></td><td><span>1 month</span></td><td><span>13/17 years</span></td><td><span>no such stage</span></td><td><span>2 months</span></td></tr></tbody><tbody><tr><td><span>Mayfly</span></td><td><span>1 month</span></td><td><span>3 years</span></td><td><span>no such stage</span></td><td><span>1 day</span></td></tr></tbody><tbody><tr><td><span>Cockroach</span></td><td><span>1 month</span></td><td><span>3 months</span></td><td><span>no such stage</span></td><td><span>9 months</span></td></tr></tbody></table><p/><p/></section></section></div></div><p>According to the text, what is the description of the pupa stage's main purpose or characteristic? (Provide the full sentence from the text that describes this.)</p><qti-extended-text-interaction class="" response-identifier="RESPONSE"/></qti-item-body></qti-assessment-item>`
  },
  {
    "identifier": "murata-meta-4",
    "guid": "0000-0051-0008",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="i7MFS_cF6_4" time-dependent="false" title="During its life cycl"><qti-response-declaration xmlns="" base-type="string" cardinality="single" identifier="RESPONSE"/> <qti-outcome-declaration xmlns="" base-type="float" cardinality="single" identifier="SCORE"/> <qti-assessment-stimulus-ref xmlns="" href="../../stimuli/stimulus.xml" identifier="sarRKDyHk"/><qti-item-body xmlns=""><div class="qti-shared-stimulus" data-stimulus-identifier="sarRKDyHk"><div class="qti-stimulus-body-element"><p><span>Read the following passage and answer the questions.</span></p><section aria-label="自動生成された階層"><section aria-labelledby="h_1_0"><h3 id="h_1_0"><span>Complete metamorphosis or </span><em>holometabolism</em></h3><p><span>Insects that have complete metamorphosis have four life stages. These insects start as eggs, which are very small. The egg hatches and a larva comes out. The larva looks like a worm and eats and eats so that it can grow much bigger. When the larva has grown it changes into a pupa. The pupa usually can not move or eat. The pupa is a special time when the insect is changing into an adult that will look very different from the larva or the pupa. Moth pupae (plural of pupa) are inside cocoons. When the pupa opens, the adult insect comes out.</span></p><p><span>Many insects have a life cycle of egg-larva-pupa-adult. Some of these insects are:</span></p><ol><li><span>Coleoptera: beetles</span><ol/></li><li><span>Hymenoptera: bees, wasps, ants, sawflies</span><ol/></li><li><span>Lepidoptera: butterflies, moths</span><ol/></li><li><span>Diptera: the flies</span><ol/></li></ol><p/><figure><figcaption><strong>Figure: </strong><strong>The monarch butterfly life cycle</strong></figcaption><img alt="The life cycle of a monarch butterfly, showing the stages: egg, caterpillar, chrysalis, and adult butterfly in a repeating cycle." src="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/d652e141-2152-4a38-806a-79e2a0435cae/media/image1.png" x="250" y="222"/></figure><p/><table><caption><strong>Table: </strong><strong>Metamorphosis: comparative lengths of life stage</strong></caption><colgroup><col style="width: 26.9%;"/><col style="width: 13.7%;"/><col style="width: 21.2%;"/><col style="width: 20.2%;"/><col style="width: 18.0%;"/></colgroup><thead><tr><th scope="col"><strong>Species</strong></th><th scope="col"><strong>Egg</strong></th><th scope="col"><strong>Larva/Nymph</strong></th><th scope="col"><strong>Pupa</strong></th><th scope="col"><strong>Adult</strong></th></tr></thead><tbody><tr><td><span>Housefly</span></td><td><span>1 day</span></td><td><span>2 weeks</span></td><td><span>1 week</span></td><td><span>2 weeks</span></td></tr></tbody><tbody><tr><td><span>Ladybird</span></td><td><span>4 days</span></td><td><span>2 weeks</span></td><td><span>2 weeks</span></td><td><span>3–9 months</span></td></tr></tbody><tbody><tr><td><span>Monarch Butterfly</span></td><td><span>4 days</span></td><td><span>2 weeks</span></td><td><span>10 days</span></td><td><span>2–6 weeks</span></td></tr></tbody><tbody><tr><td><span>Periodical </span><span>Cicada</span></td><td><span>1 month</span></td><td><span>13/17 years</span></td><td><span>no such stage</span></td><td><span>2 months</span></td></tr></tbody><tbody><tr><td><span>Mayfly</span></td><td><span>1 month</span></td><td><span>3 years</span></td><td><span>no such stage</span></td><td><span>1 day</span></td></tr></tbody><tbody><tr><td><span>Cockroach</span></td><td><span>1 month</span></td><td><span>3 months</span></td><td><span>no such stage</span></td><td><span>9 months</span></td></tr></tbody></table><p/><p/></section></section></div></div><p>During its life cycle, a caterpillar consumes a significant amount of food to facilitate its growth before it transforms into a <qti-text-entry-interaction response-identifier="RESPONSE"/>.</p></qti-item-body></qti-assessment-item>`
  },
  {
    "identifier": "murata-metajp-1",
    "guid": "0000-0051-0009",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="iVeUWJ11p_1" time-dependent="false" title="以下のうち、完全変態における4つの生活段">
    <qti-response-declaration xmlns="" base-type="identifier" cardinality="single" identifier="RESPONSE"><qti-correct-response><qti-value>choice_C</qti-value></qti-correct-response></qti-response-declaration>
    <qti-outcome-declaration xmlns="" base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-outcome-declaration xmlns="" base-type="identifier" cardinality="single" identifier="FEEDBACK"/>
    <qti-assessment-stimulus-ref xmlns="" href="../../stimuli/stimulus.xml" identifier="s2IewWZi1"/><qti-stylesheet xmlns="" href="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/c27f1eca-9eee-4396-83e1-b948fc9bea74/css/yasashiQTI.css" type="text/css"/><qti-stylesheet xmlns="" href="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/45d71282-0f92-4dd9-ad0d-7267feea00e2/css/yasashiQTI.css" type="text/css"/>
    <qti-item-body xmlns=""><div class="qti-shared-stimulus" data-stimulus-identifier="s2IewWZi1"><div class="qti-stimulus-body-element"><p><span>以下</span><span>の</span><span>文章を読んで設問に</span><span>答えなさ</span><span>い。</span></p><section aria-label="自動生成された階層"><section aria-labelledby="h_1_0"><h3 id="h_1_0"><span>完全変態</span></h3><p><span>完全変態をする昆虫には、4つの生活段階があります。これらの昆虫は、非常に小さな卵から始まります。卵がかえると、幼虫が出てきます。幼虫はミミズのような姿をしており、成長するためにひたすら食べ続けます。十分に成長すると、幼虫はさなぎになります。さなぎは通常、動くことも食べることもできません。さなぎの期間は、昆虫が成虫へと姿を変える特別な時期です。成虫は、幼虫やさなぎとはまったく異なる姿になります。ガのさなぎは繭の中にいます。さなぎが開くと、成虫の昆虫が出てきます。</span></p><p><span>多くの昆虫は、卵 → 幼虫 → さなぎ → 成虫というライフサイクルを持っています。これに該当する昆虫には、以下のようなものがあります：</span></p><ol><li><span>コウチュウ目：カブトムシやテントウムシなど</span><ol/></li><li><span>ハチ目：ミツバチ、スズメバチ、アリ、ハバチなど</span><ol/></li><li><span>チョウ目：チョウ、ガ</span><ol/></li><li><span>ハエ目：ハエ</span><ol/></li></ol><p/><figure><figcaption><strong>図：オオカバマダラのライフサイクル</strong></figcaption><img alt="オオカバマダラの一生を示す図: 卵、イモムシ（幼虫）、さなぎ、成虫のチョウの各段階が繰り返される。" src="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/45d71282-0f92-4dd9-ad0d-7267feea00e2/media/image1.png" x="250" y="222"/></figure><p/><table class="table table-bordered w-auto"><caption><strong>表: </strong><strong>変態における各成長段階の比較</strong></caption><colgroup><col style="width: 30.4%;"/><col style="width: 10.1%;"/><col style="width: 16.4%;"/><col style="width: 13.4%;"/><col style="width: 29.8%;"/></colgroup><thead><tr><th scope="col"><strong>種</strong></th><th scope="col"><strong>卵</strong></th><th scope="col"><strong>幼虫</strong></th><th scope="col"><strong>さなぎ</strong></th><th scope="col"><strong>成虫</strong></th></tr></thead><tbody><tr><td><span>イエバエ</span></td><td><span>1 </span><span>日</span></td><td><span>2</span><span>週</span><span>間</span></td><td><span>1</span><span>週間</span></td><td><span>2</span><span>週間</span></td></tr></tbody><tbody><tr><td><span>テントウムシ</span></td><td><span>4 </span><span>日</span></td><td><span>2</span><span>週間</span></td><td><span>2</span><span>週間</span></td><td><span>3</span><span>月から</span><span>9</span><span>月</span></td></tr></tbody><tbody><tr><td><span>オオカバマダラ</span></td><td><span>4 </span><span>日</span></td><td><span>2</span><span>週間</span></td><td><span>10</span><span>日</span></td><td><span>2</span><span>週</span><span>間</span><span>から</span><span>6</span><span>週</span><span>間</span></td></tr></tbody><tbody><tr><td><span>セミ（周期ゼミ）</span></td><td><span>1 </span><span>月</span></td><td><span>13/17</span><span>年</span></td><td><span>なし</span></td><td><span>2</span><span>月</span></td></tr></tbody><tbody><tr><td><span>カゲロウ</span></td><td><span>1</span><span>月</span></td><td><span>3</span><span>年</span></td><td><span>なし</span></td><td><span>1</span><span>日</span></td></tr></tbody><tbody><tr><td><span>ゴキブリ</span></td><td><span>1</span><span>月</span></td><td><span>3</span><span>月</span></td><td><span>なし</span></td><td><span>9</span><span>月</span></td></tr></tbody></table><p/><p/><p><strong>注:</strong><span> </span><span>この文章は</span><span>、</span><span>クリエイティブ・コモンズ 表示-継承 4.0 国際 パブリック・ライセ</span><span>ン</span><span>ス</span><span>のもとで公表された</span><span>Simple English </span><span>Wikipedia</span><span>の項目</span><span>Metamorphosis</span><span>を素材として二次利用しています。</span></p></section></section></div></div>
    <p>以下のうち、完全変態における4つの生活段階の正しい順序はどれですか？</p>
    <qti-choice-interaction response-identifier="RESPONSE">
    <qti-simple-choice identifier="choice_A">卵 → さなぎ → 幼虫 → Adult</qti-simple-choice>
    <qti-simple-choice identifier="choice_B">幼虫 → 卵 → さなぎ → Adult</qti-simple-choice>
    <qti-simple-choice identifier="choice_C">卵 → 幼虫 → さなぎ → Adult</qti-simple-choice>
    <qti-simple-choice identifier="choice_D">成虫 → 卵 → 幼虫 → さなぎ</qti-simple-choice>
    </qti-choice-interaction>
    </qti-item-body>
    <qti-response-processing xmlns=""><qti-response-condition><qti-response-if><qti-match><qti-variable identifier="RESPONSE"/><qti-correct identifier="RESPONSE"/></qti-match><qti-set-outcome-value identifier="SCORE"><qti-base-value base-type="float">1</qti-base-value></qti-set-outcome-value><qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">correct</qti-base-value></qti-set-outcome-value></qti-response-if> <qti-response-else> <qti-set-outcome-value identifier="SCORE"><qti-base-value base-type="float">0</qti-base-value></qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"><qti-base-value base-type="identifier">incorrect</qti-base-value> </qti-set-outcome-value></qti-response-else></qti-response-condition></qti-response-processing>
    <qti-modal-feedback xmlns="" identifier="incorrect" outcome-identifier="FEEDBACK" show-hide="show"><qti-content-body><p>なし</p></qti-content-body></qti-modal-feedback>
    </qti-assessment-item>`
  },
  {
    "identifier": "murata-metajp-2",
    "guid": "0000-0051-0010",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="iVeUWJ11p_2" time-dependent="false" title="以下の昆虫のグループのうち、完全変態を行">
    <qti-response-declaration xmlns="" base-type="identifier" cardinality="multiple" identifier="RESPONSE"><qti-correct-response><qti-value>choice_A</qti-value><qti-value>choice_B</qti-value><qti-value>choice_D</qti-value></qti-correct-response></qti-response-declaration>
    <qti-outcome-declaration xmlns="" base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-outcome-declaration xmlns="" base-type="identifier" cardinality="single" identifier="FEEDBACK"/>
    <qti-assessment-stimulus-ref xmlns="" href="../../stimuli/stimulus.xml" identifier="s2IewWZi1"/><qti-stylesheet xmlns="" href="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/37e6b5e1-acb7-4261-9bc5-e0201be9d4e7/css/yasashiQTI.css" type="text/css"/><qti-stylesheet xmlns="" href="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/45d71282-0f92-4dd9-ad0d-7267feea00e2/css/yasashiQTI.css" type="text/css"/>
    <qti-item-body xmlns=""><div class="qti-shared-stimulus" data-stimulus-identifier="s2IewWZi1"><div class="qti-stimulus-body-element"><p><span>以下</span><span>の</span><span>文章を読んで設問に</span><span>答えなさ</span><span>い。</span></p><section aria-label="自動生成された階層"><section aria-labelledby="h_1_0"><h3 id="h_1_0"><span>完全変態</span></h3><p><span>完全変態をする昆虫には、4つの生活段階があります。これらの昆虫は、非常に小さな卵から始まります。卵がかえると、幼虫が出てきます。幼虫はミミズのような姿をしており、成長するためにひたすら食べ続けます。十分に成長すると、幼虫はさなぎになります。さなぎは通常、動くことも食べることもできません。さなぎの期間は、昆虫が成虫へと姿を変える特別な時期です。成虫は、幼虫やさなぎとはまったく異なる姿になります。ガのさなぎは繭の中にいます。さなぎが開くと、成虫の昆虫が出てきます。</span></p><p><span>多くの昆虫は、卵 → 幼虫 → さなぎ → 成虫というライフサイクルを持っています。これに該当する昆虫には、以下のようなものがあります：</span></p><ol><li><span>コウチュウ目：カブトムシやテントウムシなど</span><ol/></li><li><span>ハチ目：ミツバチ、スズメバチ、アリ、ハバチなど</span><ol/></li><li><span>チョウ目：チョウ、ガ</span><ol/></li><li><span>ハエ目：ハエ</span><ol/></li></ol><p/><figure><figcaption><strong>図：オオカバマダラのライフサイクル</strong></figcaption><img alt="オオカバマダラの一生を示す図: 卵、イモムシ（幼虫）、さなぎ、成虫のチョウの各段階が繰り返される。" src="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/45d71282-0f92-4dd9-ad0d-7267feea00e2/media/image1.png" x="250" y="222"/></figure><p/><table class="table table-bordered w-auto"><caption><strong>表: </strong><strong>変態における各成長段階の比較</strong></caption><colgroup><col style="width: 30.4%;"/><col style="width: 10.1%;"/><col style="width: 16.4%;"/><col style="width: 13.4%;"/><col style="width: 29.8%;"/></colgroup><thead><tr><th scope="col"><strong>種</strong></th><th scope="col"><strong>卵</strong></th><th scope="col"><strong>幼虫</strong></th><th scope="col"><strong>さなぎ</strong></th><th scope="col"><strong>成虫</strong></th></tr></thead><tbody><tr><td><span>イエバエ</span></td><td><span>1 </span><span>日</span></td><td><span>2</span><span>週</span><span>間</span></td><td><span>1</span><span>週間</span></td><td><span>2</span><span>週間</span></td></tr></tbody><tbody><tr><td><span>テントウムシ</span></td><td><span>4 </span><span>日</span></td><td><span>2</span><span>週間</span></td><td><span>2</span><span>週間</span></td><td><span>3</span><span>月から</span><span>9</span><span>月</span></td></tr></tbody><tbody><tr><td><span>オオカバマダラ</span></td><td><span>4 </span><span>日</span></td><td><span>2</span><span>週間</span></td><td><span>10</span><span>日</span></td><td><span>2</span><span>週</span><span>間</span><span>から</span><span>6</span><span>週</span><span>間</span></td></tr></tbody><tbody><tr><td><span>セミ（周期ゼミ）</span></td><td><span>1 </span><span>月</span></td><td><span>13/17</span><span>年</span></td><td><span>なし</span></td><td><span>2</span><span>月</span></td></tr></tbody><tbody><tr><td><span>カゲロウ</span></td><td><span>1</span><span>月</span></td><td><span>3</span><span>年</span></td><td><span>なし</span></td><td><span>1</span><span>日</span></td></tr></tbody><tbody><tr><td><span>ゴキブリ</span></td><td><span>1</span><span>月</span></td><td><span>3</span><span>月</span></td><td><span>なし</span></td><td><span>9</span><span>月</span></td></tr></tbody></table><p/><p/><p><strong>注:</strong><span> </span><span>この文章は</span><span>、</span><span>クリエイティブ・コモンズ 表示-継承 4.0 国際 パブリック・ライセ</span><span>ン</span><span>ス</span><span>のもとで公表された</span><span>Simple English </span><span>Wikipedia</span><span>の項目</span><span>Metamorphosis</span><span>を素材として二次利用しています。</span></p></section></section></div></div>
    <p>以下の昆虫のグループのうち、完全変態を行う昆虫の例はどれですか？（該当するものすべてを選択）</p>
    <qti-choice-interaction max-choices="0" response-identifier="RESPONSE">
    <qti-simple-choice identifier="choice_A">カブトムシ</qti-simple-choice>
    <qti-simple-choice identifier="choice_B">チョウ</qti-simple-choice>
    <qti-simple-choice identifier="choice_C">バッタ</qti-simple-choice>
    <qti-simple-choice identifier="choice_D">ハチ</qti-simple-choice>
    <qti-simple-choice identifier="choice_E">ゴキブリ</qti-simple-choice>
    </qti-choice-interaction>
    </qti-item-body>
    <qti-response-processing xmlns=""> <qti-response-condition> <qti-response-if> <qti-match> <qti-variable identifier="RESPONSE"/> <qti-correct identifier="RESPONSE"/> </qti-match> <qti-set-outcome-value identifier="SCORE"> <qti-base-value base-type="float">1</qti-base-value> </qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">correct</qti-base-value> </qti-set-outcome-value> </qti-response-if> <qti-response-else> <qti-set-outcome-value identifier="SCORE"> <qti-base-value base-type="float">0</qti-base-value> </qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">incorrect</qti-base-value> </qti-set-outcome-value> </qti-response-else> </qti-response-condition> </qti-response-processing>
    <qti-modal-feedback xmlns="" identifier="incorrect" outcome-identifier="FEEDBACK" show-hide="show"><qti-content-body><p>なし</p></qti-content-body></qti-modal-feedback>
    </qti-assessment-item>`
  },
  {
    "identifier": "murata-metajp-3",
    "guid": "0000-0051-0011",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="iVeUWJ11p_3" time-dependent="false" title="本文において、さなぎの期間の主な目的につ"><qti-response-declaration xmlns="" base-type="string" cardinality="single" identifier="RESPONSE"/> <qti-outcome-declaration xmlns="" base-type="float" cardinality="single" identifier="SCORE"/> <qti-assessment-stimulus-ref xmlns="" href="../../stimuli/stimulus.xml" identifier="s2IewWZi1"/><qti-stylesheet xmlns="" href="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/ea2a90b4-bb10-4002-8f2b-ba9d09b417ca/css/yasashiQTI.css" type="text/css"/><qti-stylesheet xmlns="" href="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/45d71282-0f92-4dd9-ad0d-7267feea00e2/css/yasashiQTI.css" type="text/css"/><qti-item-body xmlns=""><div class="qti-shared-stimulus" data-stimulus-identifier="s2IewWZi1"><div class="qti-stimulus-body-element"><p><span>以下</span><span>の</span><span>文章を読んで設問に</span><span>答えなさ</span><span>い。</span></p><section aria-label="自動生成された階層"><section aria-labelledby="h_1_0"><h3 id="h_1_0"><span>完全変態</span></h3><p><span>完全変態をする昆虫には、4つの生活段階があります。これらの昆虫は、非常に小さな卵から始まります。卵がかえると、幼虫が出てきます。幼虫はミミズのような姿をしており、成長するためにひたすら食べ続けます。十分に成長すると、幼虫はさなぎになります。さなぎは通常、動くことも食べることもできません。さなぎの期間は、昆虫が成虫へと姿を変える特別な時期です。成虫は、幼虫やさなぎとはまったく異なる姿になります。ガのさなぎは繭の中にいます。さなぎが開くと、成虫の昆虫が出てきます。</span></p><p><span>多くの昆虫は、卵 → 幼虫 → さなぎ → 成虫というライフサイクルを持っています。これに該当する昆虫には、以下のようなものがあります：</span></p><ol><li><span>コウチュウ目：カブトムシやテントウムシなど</span><ol/></li><li><span>ハチ目：ミツバチ、スズメバチ、アリ、ハバチなど</span><ol/></li><li><span>チョウ目：チョウ、ガ</span><ol/></li><li><span>ハエ目：ハエ</span><ol/></li></ol><p/><figure><figcaption><strong>図：オオカバマダラのライフサイクル</strong></figcaption><img alt="オオカバマダラの一生を示す図: 卵、イモムシ（幼虫）、さなぎ、成虫のチョウの各段階が繰り返される。" src="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/45d71282-0f92-4dd9-ad0d-7267feea00e2/media/image1.png" x="250" y="222"/></figure><p/><table class="table table-bordered w-auto"><caption><strong>表: </strong><strong>変態における各成長段階の比較</strong></caption><colgroup><col style="width: 30.4%;"/><col style="width: 10.1%;"/><col style="width: 16.4%;"/><col style="width: 13.4%;"/><col style="width: 29.8%;"/></colgroup><thead><tr><th scope="col"><strong>種</strong></th><th scope="col"><strong>卵</strong></th><th scope="col"><strong>幼虫</strong></th><th scope="col"><strong>さなぎ</strong></th><th scope="col"><strong>成虫</strong></th></tr></thead><tbody><tr><td><span>イエバエ</span></td><td><span>1 </span><span>日</span></td><td><span>2</span><span>週</span><span>間</span></td><td><span>1</span><span>週間</span></td><td><span>2</span><span>週間</span></td></tr></tbody><tbody><tr><td><span>テントウムシ</span></td><td><span>4 </span><span>日</span></td><td><span>2</span><span>週間</span></td><td><span>2</span><span>週間</span></td><td><span>3</span><span>月から</span><span>9</span><span>月</span></td></tr></tbody><tbody><tr><td><span>オオカバマダラ</span></td><td><span>4 </span><span>日</span></td><td><span>2</span><span>週間</span></td><td><span>10</span><span>日</span></td><td><span>2</span><span>週</span><span>間</span><span>から</span><span>6</span><span>週</span><span>間</span></td></tr></tbody><tbody><tr><td><span>セミ（周期ゼミ）</span></td><td><span>1 </span><span>月</span></td><td><span>13/17</span><span>年</span></td><td><span>なし</span></td><td><span>2</span><span>月</span></td></tr></tbody><tbody><tr><td><span>カゲロウ</span></td><td><span>1</span><span>月</span></td><td><span>3</span><span>年</span></td><td><span>なし</span></td><td><span>1</span><span>日</span></td></tr></tbody><tbody><tr><td><span>ゴキブリ</span></td><td><span>1</span><span>月</span></td><td><span>3</span><span>月</span></td><td><span>なし</span></td><td><span>9</span><span>月</span></td></tr></tbody></table><p/><p/><p><strong>注:</strong><span> </span><span>この文章は</span><span>、</span><span>クリエイティブ・コモンズ 表示-継承 4.0 国際 パブリック・ライセ</span><span>ン</span><span>ス</span><span>のもとで公表された</span><span>Simple English </span><span>Wikipedia</span><span>の項目</span><span>Metamorphosis</span><span>を素材として二次利用しています。</span></p></section></section></div></div><p>本文において、さなぎの期間の主な目的についての説明した文があります。その全文を記載してください。</p><qti-extended-text-interaction class="" response-identifier="RESPONSE"/></qti-item-body></qti-assessment-item>`
  },
  {
    "identifier": "murata-metajp-4",
    "guid": "0000-0051-0012",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="iVeUWJ11p_4" time-dependent="false" title="幼虫は@@@に変態する前に大量の食物を摂"><qti-response-declaration xmlns="" base-type="string" cardinality="single" identifier="RESPONSE"/> <qti-outcome-declaration xmlns="" base-type="float" cardinality="single" identifier="SCORE"/> <qti-assessment-stimulus-ref xmlns="" href="../../stimuli/stimulus.xml" identifier="s2IewWZi1"/><qti-stylesheet xmlns="" href="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/0325266f-7561-4cbd-ac4b-b34ae49a32d5/css/yasashiQTI.css" type="text/css"/><qti-stylesheet xmlns="" href="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/45d71282-0f92-4dd9-ad0d-7267feea00e2/css/yasashiQTI.css" type="text/css"/><qti-item-body xmlns=""><div class="qti-shared-stimulus" data-stimulus-identifier="s2IewWZi1"><div class="qti-stimulus-body-element"><p><span>以下</span><span>の</span><span>文章を読んで設問に</span><span>答えなさ</span><span>い。</span></p><section aria-label="自動生成された階層"><section aria-labelledby="h_1_0"><h3 id="h_1_0"><span>完全変態</span></h3><p><span>完全変態をする昆虫には、4つの生活段階があります。これらの昆虫は、非常に小さな卵から始まります。卵がかえると、幼虫が出てきます。幼虫はミミズのような姿をしており、成長するためにひたすら食べ続けます。十分に成長すると、幼虫はさなぎになります。さなぎは通常、動くことも食べることもできません。さなぎの期間は、昆虫が成虫へと姿を変える特別な時期です。成虫は、幼虫やさなぎとはまったく異なる姿になります。ガのさなぎは繭の中にいます。さなぎが開くと、成虫の昆虫が出てきます。</span></p><p><span>多くの昆虫は、卵 → 幼虫 → さなぎ → 成虫というライフサイクルを持っています。これに該当する昆虫には、以下のようなものがあります：</span></p><ol><li><span>コウチュウ目：カブトムシやテントウムシなど</span><ol/></li><li><span>ハチ目：ミツバチ、スズメバチ、アリ、ハバチなど</span><ol/></li><li><span>チョウ目：チョウ、ガ</span><ol/></li><li><span>ハエ目：ハエ</span><ol/></li></ol><p/><figure><figcaption><strong>図：オオカバマダラのライフサイクル</strong></figcaption><img alt="オオカバマダラの一生を示す図: 卵、イモムシ（幼虫）、さなぎ、成虫のチョウの各段階が繰り返される。" src="https://storage.googleapis.com/bank-dev-ampup/c/ebdf326a-9895-4fd1-a046-24e667ed2d9e/a44680ae-3b00-4393-98ac-9a408c0e7236/45d71282-0f92-4dd9-ad0d-7267feea00e2/media/image1.png" x="250" y="222"/></figure><p/><table class="table table-bordered w-auto"><caption><strong>表: </strong><strong>変態における各成長段階の比較</strong></caption><colgroup><col style="width: 30.4%;"/><col style="width: 10.1%;"/><col style="width: 16.4%;"/><col style="width: 13.4%;"/><col style="width: 29.8%;"/></colgroup><thead><tr><th scope="col"><strong>種</strong></th><th scope="col"><strong>卵</strong></th><th scope="col"><strong>幼虫</strong></th><th scope="col"><strong>さなぎ</strong></th><th scope="col"><strong>成虫</strong></th></tr></thead><tbody><tr><td><span>イエバエ</span></td><td><span>1 </span><span>日</span></td><td><span>2</span><span>週</span><span>間</span></td><td><span>1</span><span>週間</span></td><td><span>2</span><span>週間</span></td></tr></tbody><tbody><tr><td><span>テントウムシ</span></td><td><span>4 </span><span>日</span></td><td><span>2</span><span>週間</span></td><td><span>2</span><span>週間</span></td><td><span>3</span><span>月から</span><span>9</span><span>月</span></td></tr></tbody><tbody><tr><td><span>オオカバマダラ</span></td><td><span>4 </span><span>日</span></td><td><span>2</span><span>週間</span></td><td><span>10</span><span>日</span></td><td><span>2</span><span>週</span><span>間</span><span>から</span><span>6</span><span>週</span><span>間</span></td></tr></tbody><tbody><tr><td><span>セミ（周期ゼミ）</span></td><td><span>1 </span><span>月</span></td><td><span>13/17</span><span>年</span></td><td><span>なし</span></td><td><span>2</span><span>月</span></td></tr></tbody><tbody><tr><td><span>カゲロウ</span></td><td><span>1</span><span>月</span></td><td><span>3</span><span>年</span></td><td><span>なし</span></td><td><span>1</span><span>日</span></td></tr></tbody><tbody><tr><td><span>ゴキブリ</span></td><td><span>1</span><span>月</span></td><td><span>3</span><span>月</span></td><td><span>なし</span></td><td><span>9</span><span>月</span></td></tr></tbody></table><p/><p/><p><strong>注:</strong><span> </span><span>この文章は</span><span>、</span><span>クリエイティブ・コモンズ 表示-継承 4.0 国際 パブリック・ライセ</span><span>ン</span><span>ス</span><span>のもとで公表された</span><span>Simple English </span><span>Wikipedia</span><span>の項目</span><span>Metamorphosis</span><span>を素材として二次利用しています。</span></p></section></section></div></div><p>幼虫は<qti-text-entry-interaction response-identifier="RESPONSE"/>に変態する前に大量の食物を摂取して、成長のための準備をします。</p></qti-item-body></qti-assessment-item>`
  },
  {
    "identifier": "murata-bronze-1",
    "guid": "0000-0051-0013",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="iVevAsnfp_1" time-dependent="false" title="設問　「月のさえた」とはどういう意味です">
    <qti-response-declaration xmlns="" base-type="identifier" cardinality="single" identifier="RESPONSE"><qti-correct-response><qti-value>choice_A</qti-value></qti-correct-response></qti-response-declaration> 
    <qti-outcome-declaration xmlns="" base-type="float" cardinality="single" identifier="SCORE"/>
    <qti-outcome-declaration xmlns="" base-type="identifier" cardinality="single" identifier="FEEDBACK"/>
    <qti-assessment-stimulus-ref xmlns="" href="../../stimuli/stimulus.xml" identifier="s0qU8fL7o"/>
    <qti-item-body xmlns="" class="qti-height-112 qti3-player-writing-mode-vertical-rl qti3-player-float-right">
    <div class="qti-shared-stimulus" data-stimulus-identifier="s0qU8fL7o"><div class="qti-stimulus-body-element"><p><span>以下の文章を読んで設問に答えなさい。なお、この文章は江戸川乱歩の「青銅の魔人」です。</span></p><section aria-label="自動生成された階層"><section aria-labelledby="h_1_0"><h3 id="h_1_0"><span>歯車の音</span></h3><p><span>　冬の夜、月のさえた晩、銀座通りに近い橋のたもとの交番に、ひとりの警官が夜の見はりについていました。一時をとっくにすぎた真夜中です。</span></p><p><span>　ひるまは電車やバスや自動車が、</span><span><ruby>縦横<rt>じゅうおう</rt></ruby></span><span>にはせちがう大通りも、まるでいなかの原っぱのようにさびしいのです。月の光に、四本の電車のレールがキラキラ光っているばかり、動くものは、何もありません。東京中の人が死にたえてしまったようなさびしさです。</span></p><p><span>　警官は、交番の赤い電灯の下に、じっと立って、注意ぶかくあたりを見まわしていました。濃い口ひげの下から、息をするたびに、白い煙のようなものが立ちのぼっています。寒さに息がこおるのです。</span></p><p><span>「オヤ、へんなやつだなあ。</span><span>よっぱらいかな</span><span>。」</span></p><p><span>　警官が思わずひとりごとをつぶやきました。</span></p><p><span>　キラキラ光った電車のレールのまんまん中を、ひとりの男が歩いてくるのです。青い色の背広に、青い色のソフトをかぶった大男です。この寒いのに</span><span><ruby>外套<rt>がいとう</rt></ruby></span><span>も着ていません。</span></p><p><span>　その男の歩きかたが、じつにへんなのです。お</span><span><ruby>巡<rt>まわ</rt></ruby></span><span>りさんが、よっぱらいかと思ったのも、むりはありません。しかし、よく見ると、よっぱらいともちがいます。右ひだりにヨロヨロするのではなくて、なんだか両足とも</span><span><ruby>義足<rt>ぎそく</rt></ruby></span><span>でもはめているような歩きかたなのです。人間の足で歩くのではなく、機械でできた足で歩いているような感じです。</span></p><p><span>　顔は帽子のかげになって、よく見えませんが、なんだかドス黒い顔で、それが少しもわき見をしないで、</span><span><ruby>夢遊病者<rt>むゆうびょうしゃ</rt></ruby></span><span>のように正面をむいたまま、ガックリガックリ歩いているのです。</span></p><p><span>　イヤ、それよりも、もっとへんなことがあります。その男の両手から銀色に光ったものが、ふさのようにさがっていて、歩くにつれて、ユラユラとゆれ、月の光に、まるで宝石のように美しくかがやくのです。</span></p><p><span>　両手ばかりではありません。男の青い洋服のポケットというポケットから、銀色のものがたれさがって、からだじゅうがチカチカと光りかがやいています。</span></p><p><span>　警官には、遠いので、その光るものがなんだかよくわかりません。銀紙のたばか、ガラス玉のついた、ひものたばでもさげているように見えたのです。それで、べつに呼びとめもしないで、見すごしてしまいましたが、あとになって、びっくりするようなことがわかってきました。</span></p><p><span>　男がさげていた光るものは、全部懐中時計だったのです。何十個という鎖くさりつきの時計を両手にさげ、ポケットにねじこんでいたのです。</span></p><p><span>　真夜中に、時計のたばをぶらさげて、交番の前を平気で歩く男、いったいこれは何者でしょう。ばかか、きちがいか、それとも、きちがいよりもっとおそろしいものか。</span></p><p><span>　あとになって、その警官は、へんなことを考えました。</span></p><p><span>「フン、いかにもあれは時計のたばだったにちがいない。どうりで歯車の音が、ここまで聞こえてきたからな。小さな時計でも、あれだけ数がそろうと、歯車の音もばかにでっかくなるものだて。」</span></p><p><span>　しかし、それははたして懐中時計の歯車の音だったのでしょうか。時計ならばカチカチと秒をきざむ音のほうが強いはずです。ところが、お巡りさんの聞いたのは、カチカチという音ではな</span><span>くて、ギリギリという、巨人の歯ぎしりのようなぶきみな歯車の音でした。</span></p></section></section></div></div>
    <p>設問　「月のさえた」とはどういう意味ですか。</p>
    <qti-choice-interaction response-identifier="RESPONSE">
    <qti-simple-choice identifier="choice_A">月の光が澄みきっている</qti-simple-choice>
    <qti-simple-choice identifier="choice_B">月は頭がよい</qti-simple-choice>
    <qti-simple-choice identifier="choice_C">月の温度が低い</qti-simple-choice>
    </qti-choice-interaction>
    </qti-item-body>
    
    <qti-response-processing xmlns=""> <qti-response-condition> <qti-response-if> <qti-match> <qti-variable identifier="RESPONSE"/> <qti-correct identifier="RESPONSE"/> </qti-match> <qti-set-outcome-value identifier="SCORE"> <qti-base-value base-type="float">1</qti-base-value> </qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">correct</qti-base-value> </qti-set-outcome-value> </qti-response-if> <qti-response-else> <qti-set-outcome-value identifier="SCORE"> <qti-base-value base-type="float">0</qti-base-value> </qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">incorrect</qti-base-value> </qti-set-outcome-value> </qti-response-else> </qti-response-condition> </qti-response-processing>
    
    <qti-modal-feedback xmlns="" identifier="incorrect" outcome-identifier="FEEDBACK" show-hide="show"><qti-content-body><p>なし</p></qti-content-body></qti-modal-feedback>
    </qti-assessment-item>`
  },
  {
    "identifier": "murata-bronze-2",
    "guid": "0000-0051-0014",
    "submissionMode": "individual",
    "xml": `<qti-assessment-item xmlns="http://www.imsglobal.org/xsd/imsqtiasi_v3p0" adaptive="false" identifier="iVevAsnfp_2" time-dependent="false" title="設問　「よっぱらいかな」と警官が思ったの"><qti-response-declaration xmlns="" base-type="identifier" cardinality="single" identifier="RESPONSE"><qti-correct-response><qti-value>choice_A</qti-value></qti-correct-response></qti-response-declaration> <qti-outcome-declaration xmlns="" base-type="float" cardinality="single" identifier="SCORE"/> <qti-outcome-declaration xmlns="" base-type="identifier" cardinality="single" identifier="FEEDBACK"/> <qti-assessment-stimulus-ref xmlns="" href="../../stimuli/stimulus.xml" identifier="s0qU8fL7o"/><qti-item-body xmlns="" class="qti-height-112 qti3-player-writing-mode-vertical-rl qti3-player-float-right"><div class="qti-shared-stimulus" data-stimulus-identifier="s0qU8fL7o"><div class="qti-stimulus-body-element"><p><span>以下の文章を読んで設問に答えなさい。なお、この文章は江戸川乱歩の「青銅の魔人」です。</span></p><section aria-label="自動生成された階層"><section aria-labelledby="h_1_0"><h3 id="h_1_0"><span>歯車の音</span></h3><p><span>　冬の夜、月のさえた晩、銀座通りに近い橋のたもとの交番に、ひとりの警官が夜の見はりについていました。一時をとっくにすぎた真夜中です。</span></p><p><span>　ひるまは電車やバスや自動車が、</span><span><ruby>縦横<rt>じゅうおう</rt></ruby></span><span>にはせちがう大通りも、まるでいなかの原っぱのようにさびしいのです。月の光に、四本の電車のレールがキラキラ光っているばかり、動くものは、何もありません。東京中の人が死にたえてしまったようなさびしさです。</span></p><p><span>　警官は、交番の赤い電灯の下に、じっと立って、注意ぶかくあたりを見まわしていました。濃い口ひげの下から、息をするたびに、白い煙のようなものが立ちのぼっています。寒さに息がこおるのです。</span></p><p><span>「オヤ、へんなやつだなあ。</span><span>よっぱらいかな</span><span>。」</span></p><p><span>　警官が思わずひとりごとをつぶやきました。</span></p><p><span>　キラキラ光った電車のレールのまんまん中を、ひとりの男が歩いてくるのです。青い色の背広に、青い色のソフトをかぶった大男です。この寒いのに</span><span><ruby>外套<rt>がいとう</rt></ruby></span><span>も着ていません。</span></p><p><span>　その男の歩きかたが、じつにへんなのです。お</span><span><ruby>巡<rt>まわ</rt></ruby></span><span>りさんが、よっぱらいかと思ったのも、むりはありません。しかし、よく見ると、よっぱらいともちがいます。右ひだりにヨロヨロするのではなくて、なんだか両足とも</span><span><ruby>義足<rt>ぎそく</rt></ruby></span><span>でもはめているような歩きかたなのです。人間の足で歩くのではなく、機械でできた足で歩いているような感じです。</span></p><p><span>　顔は帽子のかげになって、よく見えませんが、なんだかドス黒い顔で、それが少しもわき見をしないで、</span><span><ruby>夢遊病者<rt>むゆうびょうしゃ</rt></ruby></span><span>のように正面をむいたまま、ガックリガックリ歩いているのです。</span></p><p><span>　イヤ、それよりも、もっとへんなことがあります。その男の両手から銀色に光ったものが、ふさのようにさがっていて、歩くにつれて、ユラユラとゆれ、月の光に、まるで宝石のように美しくかがやくのです。</span></p><p><span>　両手ばかりではありません。男の青い洋服のポケットというポケットから、銀色のものがたれさがって、からだじゅうがチカチカと光りかがやいています。</span></p><p><span>　警官には、遠いので、その光るものがなんだかよくわかりません。銀紙のたばか、ガラス玉のついた、ひものたばでもさげているように見えたのです。それで、べつに呼びとめもしないで、見すごしてしまいましたが、あとになって、びっくりするようなことがわかってきました。</span></p><p><span>　男がさげていた光るものは、全部懐中時計だったのです。何十個という鎖くさりつきの時計を両手にさげ、ポケットにねじこんでいたのです。</span></p><p><span>　真夜中に、時計のたばをぶらさげて、交番の前を平気で歩く男、いったいこれは何者でしょう。ばかか、きちがいか、それとも、きちがいよりもっとおそろしいものか。</span></p><p><span>　あとになって、その警官は、へんなことを考えました。</span></p><p><span>「フン、いかにもあれは時計のたばだったにちがいない。どうりで歯車の音が、ここまで聞こえてきたからな。小さな時計でも、あれだけ数がそろうと、歯車の音もばかにでっかくなるものだて。」</span></p><p><span>　しかし、それははたして懐中時計の歯車の音だったのでしょうか。時計ならばカチカチと秒をきざむ音のほうが強いはずです。ところが、お巡りさんの聞いたのは、カチカチという音ではな</span><span>くて、ギリギリという、巨人の歯ぎしりのようなぶきみな歯車の音でした。</span></p></section></section></div></div><p>設問　「よっぱらいかな」と警官が思ったのはなぜでしょう。</p><qti-choice-interaction response-identifier="RESPONSE"><qti-simple-choice identifier="choice_A">歩き方が変だから</qti-simple-choice><qti-simple-choice identifier="choice_B">酒臭かったから</qti-simple-choice><qti-simple-choice identifier="choice_C">顔が赤かったから</qti-simple-choice></qti-choice-interaction></qti-item-body> <qti-response-processing xmlns=""> <qti-response-condition> <qti-response-if> <qti-match> <qti-variable identifier="RESPONSE"/> <qti-correct identifier="RESPONSE"/> </qti-match> <qti-set-outcome-value identifier="SCORE"> <qti-base-value base-type="float">1</qti-base-value> </qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">correct</qti-base-value> </qti-set-outcome-value> </qti-response-if> <qti-response-else> <qti-set-outcome-value identifier="SCORE"> <qti-base-value base-type="float">0</qti-base-value> </qti-set-outcome-value> <qti-set-outcome-value identifier="FEEDBACK"> <qti-base-value base-type="identifier">incorrect</qti-base-value> </qti-set-outcome-value> </qti-response-else> </qti-response-condition> </qti-response-processing> <qti-modal-feedback xmlns="" identifier="incorrect" outcome-identifier="FEEDBACK" show-hide="show"><qti-content-body><p>なし</p></qti-content-body></qti-modal-feedback></qti-assessment-item>`
  }
]

/* eslint-enable */
export class ItemFactory {

  constructor () {
    this.items = items
    return this
  }

  loadAll () {
    return this.items
  }

  /**
   * @description Fetch all the items in the itemList.
   * @param {Array} testItemList - array of objects.
   */
  loadItems (testItemList) {
    let items = []

    testItemList.forEach((testItemObject) => {
      let itemIndex = this.items.findIndex(item => item.identifier == testItemObject.identifier)

      if (itemIndex < 0) return

      // Found the item.
      // Add sessionControl from the testItemObject sessionControl prop.
      this.items[itemIndex].sessionControl = testItemObject.sessionControl
      //Add it to our result
      items.push(this.items[itemIndex])
    }, this)

    return items
  }

}
