function selected(id) {
	document.getElementById(id).style.opacity = 1;
	document.getElementById("p1").innerHTML = p1[0];
	document.getElementById("p2").innerHTML = p2[0];
	document.getElementById("p3").innerHTML = p3[0];
	document.getElementById("p4").innerHTML = p4[0];
	document.getElementById("p5").innerHTML = p5[0];
	document.getElementById("p6").innerHTML = p6[0];
}

function switch_to(id) {
	var pic = document.getElementById(id);
	var idx = sites.indexOf(id);
	var article_1 = document.getElementById("p1");
	var article_2 = document.getElementById("p2");
	var article_3 = document.getElementById("p3");
	var article_4 = document.getElementById("p4");
	var article_5 = document.getElementById("p5");
	var article_6 = document.getElementById("p6");
	//change focus
	pic.style.opacity = 1;
	for (i = 0; i < sites.length; i ++) {
		if (sites[i] != id) {
			document.getElementById(sites[i]).style.opacity = 0.5;
		}
	}
	//change article contents
	article_1.innerHTML = p1[idx];
	article_2.innerHTML = p2[idx];
	article_3.innerHTML = p3[idx];
	article_4.innerHTML = p4[idx];
	article_5.innerHTML = p5[idx];
	article_6.innerHTML = p6[idx];
}

var sites = new Array("cell", "mayo", "ut", "lancet", "NEJM", "scientist");

var p1 = new Array("<b>Modeling Multi-organ Infection by SARS-CoV-2 Using Stem Cell Technology</b> \
	<a href='https://www.cell.com/cell-stem-cell/fulltext/S1934-5909(20)30550-6' target='_blank'>Read more</a>", 

	"<b>COVID-19 Experimental Antibody Treatment Reaches Patients.</b><br>On Thursday, Nov. 19, Mayo Clinic began offering an experimental therapy to patients who test positive\
	for COVID-19 and are at high risk for serious illness. The therapy uses a type of drug called a monoclonal \
	antibody. But what are monoclonal antibodies? ... \
	<a href='https://discoverysedge.mayo.edu/2020/11/19/covid-19-experimental-antibody-treatment-reaches-patients/' target='_blank'>Read more</a>", 

	"<b>Vaccines Without Vials, Fridges, or Needles</b><br>\
	LCID Researcher Dr. Maria Croyle and her team have developed a vaccine preparation technique that both imparts \
	temperature stability and allows easy administration... \
	<a href='https://cid.utexas.edu/news/vaccines-without-vials-fridges-or-needles' target='_blank'>Read more</a>", 

	"<b>Performance and operational feasibility of two diagnostic tests for cryptosporidiosis in children (CRYPTO-POC): \
	a clinical, prospective, diagnostic accuracy study</b> \
	<a href='https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30556-9/fulltext' target='_blank'>Read more</a>", 

	"<b>Repurposed Antiviral Drugs for Covid-19 — Interim WHO Solidarity Trial Results</b><br>World Health Organization expert\
	 groups recommended mortality trials of four repurposed antiviral drugs — remdesivir, hydroxychloroquine, lopinavir, and \
	 interferon beta-1a — in patients hospitalized with coronavirus disease 2019 (Covid-19). \
	 <a href='https://www.nejm.org/doi/full/10.1056/NEJMoa2023184?query-featured_coronavirus=' target='_blank'>Read more</a>", 

	"<b>The Promise of mRNA Vaccines</b><br>\
	Long before Moderna’s and Pfizer’s COVID-19 shots, scientists had been considering the use of genetically encoded vaccines\
	 in the fight against infectious diseases, cancer, and more. \
	 <a href='https://www.the-scientist.com/news-opinion/the-promise-of-mrna-vaccines-68202' target='_blank'>Read more</a>"
	);

var p2 = new Array("<b>COVID-19 and Cancer: Current Challenges and Perspectives.</b> \
	<a href='https://www.cell.com/cancer-cell/fulltext/S1535-6108(20)30492-X' target='_blank'>Read more</a>", 

	"<b>Toxic Cellular Ooze Linked to Biological Age, Disease and Disability</b><br>Cells in the body usually do what they’re told. In response to cues, cells divide, grow, shrink or die as needed. \
	But there are some cells that start to ignore the body’s order to expire: senescent cells. Sometimes called \
	'zombie cells' for ... \
	<a href='https://discoverysedge.mayo.edu/2020/10/20/zombie-cells-toxic-ooze-linked-to-disease-disability-biological-age/' target='_blank'>Read more</a>",

	"<b>How helpful can herd immunity be in ending the coronavirus pandemic?</b><br>\
	When asked about factors that affect viral infectiousness in a recent PolitiFact email interview, Dr. Jaquelin P. Dudley, \
	Associate Director of the LaMontagne Center for Infectious Disease states: 'Viruses, particularly ones with a fatty layer \
	called an envelope, are largely transmitted from person-to-person and not through touching objects.'... \
	<a href='https://cid.utexas.edu/news/how-helpful-can-herd-immunity-be-ending-coronavirus-pandemic', target='_blank'>Read more</a>", 

	"<b>Immunogenicity of a single-dose compared with a two-dose primary series followed by a booster dose of ten-valent or \
	13-valent pneumococcal conjugate vaccine in South African children: an open-label, randomised, non-inferiority trial </b> \
	<a href='https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30289-9/fulltext' target='_blank'>Read more</a>",

	"<b>Remdesivir for the Treatment of Covid-19 — Final Report</b><br>Although several therapeutic agents have been evaluated \
	for the treatment of coronavirus disease 2019 (Covid-19), no antiviral agents have yet been shown to be efficacious. \
	<a href='https://www.nejm.org/doi/full/10.1056/NEJMoa2007764?query-featured_coronavirus=' target='_blank'>Read more</a>",

	"<b>SARS-CoV-2 Genetic Variant May Be More Transmissible</b><br>The so-called 614G mutation in the viral spike \
	protein does not appear to cause more severe cases of COVID-19, but multiple studies indicate that it could be more contagious. \
	<a href='https://www.the-scientist.com/news-opinion/sars-cov-2-genetic-variant-may-be-more-transmissible-68201' target='_blank'>Read more</a>"
	);

var p3 = new Array("<b>Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging</b> \
	<a href='https://www.cell.com/immunity/fulltext/S1074-7613(20)30492-1' target='_blank'>Read more</a>", 

	"<b>Vaccines 101 – The Basics, and COVID-19</b>...<a href='https://discoverysedge.mayo.edu/2020/10/02/vaccines-101-the-basics-and-covid-19/' target='_blank'>Read more</a>",

	"An improved and readily available version of Bst DNA Polymerase for LAMP, and applications to COVID-19 diagnostics. \
	<a href='https://www.medrxiv.org/content/10.1101/2020.10.02.20203356v1.full.pdf' target='_blank'>Read full PDF</a>",

	"<b>The complexities of SARS-CoV-2 serology</b><br>Diagnosing previous infection with respiratory viruses is challenging. \
	Our understanding of individual and population-level immunity to severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) \
	remains incomplete and developing reliable serological assays to detect previous infection has been an intense focus of the \
	global scientific effort... <a href='https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30699-X/fulltext' target='_blank'>Read more</a>",

	"<b>Mapping Racial and Ethnic Inequities in Health and Opportunity</b><br>\
	Throughout the United States, health status and outcomes, access to care, and socioeconomic status vary by race and ethnic group. \
	This Interactive Perspective, which uses data aggregated by the Health Opportunity and Equity (HOPE) Initiative, allows readers \
	to view and compare data on a range of indicators for each state and for six racial and ethnic groups. \
	<a href='https://www.nejm.org/doi/full/10.1056/NEJMp2029139?query=featured_medicine-society' target='_blank'>Read more</a>",

	"<b>Opinion: Anticipating the Next Pandemic</b><br>\
	Our experience with COVID-19 has already shone a light on how (and how not) to address future outbreaks.\
	 <a href='https://www.the-scientist.com/reading-frames/anticipating-the-next-pandemic-67672' target='_blank'>Read more</a>"
	);

var p4 = new Array("<b>SARS-CoV-2 Viral Load Predicts Mortality in Patients with and without Cancer Who Are Hospitalized with COVID-19.</b> \
	<a href='https://www.cell.com/cancer-cell/fulltext/S1535-6108(20)30481-5' target='_blank'>Read more</a>",

	"<b>Research into Experimental COVID-19 Therapeutics Explained</b> \
	<a href='https://discoverysedge.mayo.edu/2020/10/03/research-into-experimental-covid-19-therapeutics-explained/' target='_blank'>Read more</a>",

	"<b>Misleading article warns against face masks during COVID-19 pandemic</b><br>\
	Dr. Shelley Payne, director of the LaMontagne Center for Infectious Disease at the University of Texas at Austin, said that by the article’s \
	own admission, an unusual characteristic of COVID-19 is that many carriers are asymptomatic...\
	<a href='https://cid.utexas.edu/news/misleading-article-warns-against-face-masks-during-covid-19-pandemic' target='_blank'>Read more</a>",

	"<b>Assessing reduced-dose pneumococcal vaccine schedules in South Africa</b><br>\
	Pneumococcal conjugate vaccines (PCVs) provide direct protection against disease caused by vaccine-serotype Streptococcus \
	pneumoniae and indirect protection by reducing nasopharyngeal colonisation and subsequent transmission of vaccine-type strains \
	to unvaccinated individuals. <a href='https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30577-6/fulltext' target='_blank'>Read more</a>", 

	"<b>Prevention of Opioid Overdose</b> <a href='https://www.nejm.org/doi/full/10.1056/NEJMra1807054?query=featured_paincmecollection' target='_blank'>Read more</a>",

	"<b>First Alzheimer’s Blood Test Rolled Out for Clinical Use in US</b><br>\
	The test will be a cheaper and more accessible alternative to currently available diagnostic tools, researchers say. \
	<a href='https://www.the-scientist.com/news-opinion/first-alzheimers-blood-test-rolled-out-for-clinical-use-in-us-68117' target='_blank'>Read more</a>"
	);

var p5 = new Array("<b>Inflammatory Biomarker Trends Predict Respiratory Decline in COVID-19 Patients.</b> \
	<a href='https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(20)30188-9' target='_blank'>Read more</a>",
	
	"<b>Interpreting the News: COVID-19 Experimental Vaccines</b><br>Clinical trial data for COVID-19 vaccine candidates \
	were released this week. Currently named BNT162b2 and mRNA-1273, these genetic vaccine use our cell’s ability to read 'instructions' \
	for building proteins to introduce a viral protein snippet into the body, and... \
	<a href='https://discoverysedge.mayo.edu/2020/11/11/interpreting-the-news-covid-19-experimental-vaccine/' target='_blank'>Read more</a>",

	"<b> Texas Trauma Service Area (TSA) COVID-19 transmission estimates and healthcare projections - Updated Oct. 20, 2020.</b>\
	<a href='https://cid.utexas.edu/sites/default/files/cid/files/texas_covid_healthcare_projections_october.pdf?m=1603227061' target='_blank'>Read full PDF</a>",

	"<b>Comparison of molecular testing strategies for COVID-19 control: a mathematical modelling study</b> \
	<a href='https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30630-7/fulltext' target='_blank'>Read more</a>",

	"<b>Delirium in Hospitalized Older Adults</b><br> \
	This Journal feature begins with a case vignette highlighting a common clinical problem. Evidence supporting various strategies \
	is then presented, followed by a review of formal guidelines, when they exist. The article ends with the author’s clinical \
	recommendations. <a href='https://www.nejm.org/doi/full/10.1056/NEJMcp1605501?query=featured_paincmecollection' target='_blank'>Read more</a>",

	"<b>Infographic: Deciphering Diet from Blood and Urine Samples</b><br>\
	Nutrition researchers are beginning to use metabolomics to determine how healthy subjects’ diets are, and even to reveal specific properties of the foods they eat. \
	<a href='https://www.the-scientist.com/infographics/infographic-deciphering-diet-from-blood-and-urine-samples-68174' target='_blank'>Read more</a>"
	);

var p6 = new Array("<b>A High-Content Screen for Mucin-1-Reducing Compounds Identifies Fostamatinib as a Candidate for Rapid \
	Repurposing for Acute Lung Injury.</b> \
	<a href='https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(20)30181-6' target='_blank'>Read more</a>",

	"<b>Aging and Immune Decline: Destiny or Dynamic?</b><br>Aging is typically linked with the point in time when it causes problems. \
	But there are many types of aging. There’s chronological age, which we celebrate each year, sometimes with cake; biological aging, \
	which is less celebrated but certainly tracked. \
	<a href='https://discoverysedge.mayo.edu/2020/10/20/aging-and-immune-decline-destiny-or-dynamic/' target='_blank'>Read more</a>",

	"<b> Effects of Cocooning on Coronavirus Disease Rates after Relaxing Social Distancing. </b>\
	<a href='https://wwwnc.cdc.gov/eid/article/26/12/20-1930_article' target='_blank'>Read more</a>",

	"<b>Performance characteristics of five immunoassays for SARS-CoV-2: a head-to-head benchmark comparison</b> \
	<a href='https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30634-4/fulltext' target='_blank'>Read more</a>",

	"<b>Remdesivir for 5 or 10 Days in Patients with Severe Covid-19</b><br>\
	Remdesivir is an RNA polymerase inhibitor with potent antiviral activity in vitro and efficacy in animal models of coronavirus disease 2019 (Covid-19). \
	<a href='https://www.nejm.org/doi/full/10.1056/NEJMoa2015301?query=featured_coronavirus' target='_blank'>Read more</a>", 

	"<b>Blood MicroRNA Patterns Linked to Chronic Fatigue Syndrome</b><br>\
	A finding of distinct patterns of gene-regulating RNA snippets in the blood of ME/CFS patients in response to a stress test \
	could pave the way for a diagnostic tool for the condition and help untangle its underlying mechanisms. \
	<a href='https://www.the-scientist.com/news-opinion/blood-microrna-patterns-linked-to-chronic-fatigue-syndrome-68213' target='_blank'>Read more</a>"
	);

