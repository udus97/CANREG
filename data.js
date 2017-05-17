var topography = ['00  LIP', '01  TONGUE-BASE', '02  TONGUE-OTHER', '03  GUM', '04  MOUTH-FLOOR', '05  MOUTH-PALATE', '06  MOUTH-OTHER', '07  MOUTH-PAROTID', '08  MOUTH-GLANDS', '09  TONSILS', '10  OROPHARYNX', '11  NASOPHARYNX', '12  SINUS-PYRIFORM', '13  HYPOPHARYNX', '14  PHARYNX', '15  ESOPHAGUS', '16  STOMACH', '17  SMALL-INTESTINE', '18  COLON', '19  RECTOSIGMOID', '20  RECTUM', '21  ANUS', '22  LIVER', '23  GALL-BLADDER', '24  BILE-TRACT', '25  PANCREAS', '26  GASTROINTESTINAL', '30  EAR/NOSE', '31  ACCESSORY-SINUSES', '32  GLOTTIS', '33  TRACHEA', '34  BRONCHUS', '37  THYMUS', '38  HEART', '39  RESPIRATORY-TRACT', '40  BONES-LIMBS', '41  BONES-SKULL', '42  BLOOD', '44  SKIN', '47  NERVES', '48  PERITONEUM', '49  SOFT-TISSUES', '50  BREAST', '51  VULVA', '52  VAGINA', '53  CERVIX', '54  UTERI', '55  UTERUS', '56  OVARY', '57  FEMALE-GEN-OTHER', '58  PLACENTA', '60  PENIS', '61  PROSTATE', '62  TESTIS', '63  MALE-GEN-OTHER', '64  KIDNEY', '65  PELVIS', '66  URETER', '67  BLADDER', '68  URETHRA', '69  EYE', '70  MENINGES', '71  BRAIN', '72  NERVOUS-SYSTEM', '73  THYROID', '74  ADRENAL-GLAND', '75  GLANDS-OTHER', '76  NOS', '77  LYMPH-NODES', '80  UNKNOWN'];


var morphology = ['8000  Neoplasm, malignant', '8001  Tumor cells, malignant', '8002  Malignant tumor, small cell type', '8003  Malignant tumor, giant cell type', '8004  Malignant tumor, spindle cell type', '8005  Malignant tumor, clear cell type', '8010  Carcinoma, NOS', '8011  Epithelioma, malignant', '8012  Large cell carcinoma, NOS', '8013  Large cell neuroendocrine carcinoma', '8014  Large cell carcinoma with rhabdoid phenotype', '8015  Glassy cell carcinoma', '8020  Carcinoma, undifferentiated, NOS', '8021  Carcinoma, anaplastic, NOS', '8022  Pleomorphic carcinoma', '8030  Giant cell and spindle cell carcinoma', '8031  Giant cell carcinoma', '8032  Spindle cell carcinoma, NOS', '8033  Pseudosarcomatous carcinoma', '8034  Polygonal cell carcinoma', '8035  Carcinoma with osteoclast-like giant cells', '8041  Small cell carcinoma, NOS', '8042  Oat cell carcinoma', '8043  Small cell carcinoma, fusiform cell', '8044  Small cell carcinoma, intermediate cell', '8045  Combined small cell carcinoma', '8046  Non-small cell carcinoma', '8050  Papillary carcinoma, NOS', '8051  Verrucous carcinoma, NOS', '8052  Papillary squamous cell carcinoma', '8070  Squamous cell carcinoma, NOS', '8071  Squamous cell carcinoma, keratinizing, NOS', '8072  Squamous cell carcinoma, large cell, nonkeratinizing, NOS', '8073  Squamous cell carcinoma, small cell, nonkeratinizing', '8074  Squamous cell carcinoma, spindle cell', '8075  Squamous cell carcinoma, adenoid', '8076  Squamous cell carcinoma, microinvasive', '8078  Squamous cell carcinoma with horn formation', '8082  Lymphoepithelial carcinoma', '8083  Basaloid squamous cell carcinoma', '8084  Squamous cell carcinoma, clear cell type', '8090  Basal cell carcinoma, NOS', '8091  Multifocal superficial basal cell carcinoma', '8092  Infiltrating basal cell carcinoma, NOS', '8093  Basal cell carcinoma, fibroepithelial', '8094  Basosquamous carcinoma', '8095  Metatypical carcinoma', '8097  Basal cell carcinoma, nodular', '8098  Adenoid basal carcinoma', '8102  Trichilemmocarcinoma', '8110  Pilomatrix carcinoma', '8120  Transitional cell carcinoma, NOS', '8121  Schneiderian carcinoma', '8122  Transitional cell carcinoma, spindle cell', '8123  Basaloid carcinoma', '8124  Cloacogenic carcinoma', '8130  Papillary transitional cell carcinoma', '8131  Transitional cell carcinoma, micropapillary', '8140  Adenocarcinoma, NOS', '8141  Scirrhous adenocarcinoma', '8142  Linitis plastica', '8143  Superficial spreading adenocarcinoma', '8144  Adenocarcinoma, intestinal type', '8145  Carcinoma, diffuse type', '8147  Basal cell adenocarcinoma', '8150  Islet cell carcinoma', '8151  Insulinoma, malignant', '8152  Glucagonoma, malignant', '8153  Gastrinoma, malignant', '8154  Mixed islet cell and exocrine adenocarcinoma', '8155  Vipoma, malignant', '8156  Somatostatinoma, malignant', '8157  Enteroglucagonoma, malignant', '8160  Cholangiocarcinoma', '8161  Bile duct cystadenocarcinoma', '8162  Klatskin tumor', '8170  Hepatocellular carcinoma, NOS', '8171  Hepatocellular carcinoma, fibrolamellar', '8172  Hepatocellular carcinoma, scirrhous', '8173  Hepatocellular carcinoma, spindle cell  variant', '8174  Hepatocellular carcinoma, clear cell type', '8175  Hepatocellular carcinoma, pleomorphic type', '8180  Combined hepatocellular carcinoma and cholangiocarcinoma', '8190  Trabecular adenocarcinoma', '8200  Adenoid cystic carcinoma', '8201  Cribriform carcinoma, NOS', '8210  Adenocarcinoma in adenomatous polyp', '8211  Tubular adenocarcinoma', '8214  Parietal cell carcinoma', '8215  Adenocarcinoma of anal glands', '8220  Adenocarcinoma in adenomatous polyposis  coli', '8221  Adenocarcinoma in multiple adenomatous  polyps', '8230  Solid carcinoma, NOS', '8231  Carcinoma simplex', '8240  Carcinoid tumor, NOS', '8241  Enterochromaffin cell carcinoid', '8242  Enterochromaffin-like cell tumor, malignant', '8243  Goblet cell carcinoid', '8244  Composite carcinoid', '8245  Adenocarcinoid tumor', '8246  Neuroendocrine carcinoma, NOS', '8247  Merkel cell carcinoma', '8249  A typical carcinoid tumor', '8250  Bronchiolo-alveolar adenocarcinoma, NOS', '8251  Alveolar adenocarcinoma', '8252  Bronchiolo-alveolar carcinoma, non-  mucinous', '8253  Bronchiolo-alveolar carcinoma, mucinous', '8254  Bronchiolo-alveolar carcinoma, mixed  mucinous / non-mucinous', '8255  Adenocarcinoma with mixed subtypes', '8260  Papillary adenocarcinoma, NOS', '8261  Adenocarcinoma in villous adenoma', '8262  Villous adenocarcinoma', '8263  Adenocarcinoma in tubulovillous adenoma', '8270  Chromophobe carcinoma', '8272  Pituitary carcinoma, NOS', '8280  Acidophil carcinoma', '8281  Mixed acidophil-basophil carcinoma', '8290  Oxyphilic adenocarcinoma', '8300  Basophil carcinoma', '8310  Clear cell adenocarcinoma, NOS', '8312  Renal cell carcinoma, NOS', '8313  Clear cell adenocarcinofibroma', '8314  Lipid-rich carcinoma', '8315  Glycogen-rich carcinoma', '8316  Cyst-associated renal cell carcinoma', '8317  Renal cell carcinoma, chromophobe type', '8318  Renal cell carcinoma, sarcomatoid', '8319  Collecting duct carcinoma', '8320  Granular cell carcinoma', '8322  Water-clear cell adenocarcinoma', '8323  Mixed cell adenocarcinoma', '8330  Follicular adenocarcinoma, NOS', '8331  Follicular adenocarcinoma, well differentiated', '8332  Follicular adenocarcinoma, trabecular', '8333  Fetal adenocarcinoma', '8335  Follicular carcinoma, minimally invasive', '8337  Insular carcinoma', '8340  Papillary carcinoma, follicular variant', '8341  Papillary microcarcinoma', '8342  Papillary carcinoma, oxyphilic cell', '8343  Papillary carcinoma, encapsulated', '8344  Papillary carcinoma, columnar cell', '8345  Medullary carcinoma with amyloid stroma', '8346  Mixed medullary-follicular carcinoma', '8347  Mixed medullary-papillary carcinoma', '8350  Nonencapsulated sclerosing carcinoma', '8370  Adrenal cortical carcinoma', '8380  Endometrioid adenocarcinoma, NOS', '8381  Endometrioid adenofibroma, malignant', '8382  Endometrioid adenocarcinoma, secretory variant', '8383  Endometrioid adenocarcinoma, ciliated cell variant', '8384  Adenocarcinoma, endocervical type', '8390  Skin appendage carcinoma', '8400  Sweat gland adenocarcinoma', '8401  Apocrine adenocarcinoma', '8402  Nodular hidradenoma, malignant', '8403  Malignant eccrine spiradenoma', '8407  Sclerosing sweat duct carcinoma', '8408  Eccrine papillary adenocarcinoma', '8409  Eccrine poroma, malignant', '8410  Sebaceous adenocarcinoma', '8413  Eccrine adenocarcinoma', '8420  Ceruminous adenocarcinoma', '8430  Mucoepidermoid carcinoma', '8440  Cystadenocarcinoma, NOS', '8441  Serous cystadenocarcinoma, NOS', '8450  Papillary cystadenocarcinoma, NOS', '8452  Solid pseudopapillary carcinoma', '8453  Intraductal papillary-mucinous carcinoma,  invasive', '8460  Papillary serous cystadenocarcinoma', '8461  Serous surface papillary carcinoma', '8470  Mucinous cystadenocarcinoma, NOS', '8471  Papillary mucinous cystadenocarcinoma', '8480  Mucinous adenocarcinoma', '8481  Mucin-producing adenocarcinoma', '8482  Mucinous adenocarcinoma, endocervical type', '8490  Signet ring cell carcinoma', '8500  Infiltrating duct carcinoma, NOS', '8501  Comedocarcinoma, NOS', '8502  Secretory carcinoma of breast', '8503  Intraductal papillary adenocarcinoma with invasion', '8504  Intracystic carcinoma, NOS', '8508  Cystic hypersecretory carcinoma', '8510  Medullary carcinoma, NOS', '8512  Medullary carcinoma with lymphoid stroma', '8513  Atypical medullary carcinoma', '8514  Duct carcinoma, desmoplastic type', '8520  Lobular carcinoma, NOS', '8521  Infiltrating ductular carcinoma', '8522  Infiltrating duct and lobular carcinoma', '8523  Infiltrating duct mixed with other types of carcinoma', '8524  Infiltrating lobular mixed with other types of carcinoma', '8525  Polymorphous low grade adenocarcinoma', '8530  Inflammatory carcinoma', '8540  Paget disease, mammary', '8541  Paget disease and infiltrating duct carcinoma of breast', '8542  Paget disease, extramammary (except Paget disease of bone)', '8543  Paget disease and intraductal carcinoma of breast', '8550  Acinar cell carcinoma', '8551  Acinar cell cystadenocarcinoma', '8560  Adenosquamous carcinoma', '8562  Epithelial-myoepithelial carcinoma', '8570  Adenocarcinoma with squamous metaplasia', '8571  Adenocarcinoma with cartilaginous and osseous metaplasia', '8572  Adenocarcinoma with spindle cell metaplasia', '8573  Adenocarcinoma with apocrine metaplasia', '8574  Adenocarcinoma with neuroendocrine differentiation', '8575  Metaplastic carcinoma, NOS', '8576  Hepatoid adenocarcinoma', '8580  Thymoma, malignant, NOS', '8581  Thymoma, type A, malignant', '8582  Thymoma, type AB, malignant', '8583  Thymoma, type B1, malignant', '8584  Thymoma, type B2, malignant', '8585  Thymoma, type B3, malignant', '8586  Thymic carcinoma, NOS', '8588  Spindle epithelial tumor with thymus-like element', '8589  Carcinoma showing thymus-like element', '8600  Thecoma, malignant', '8620  Granulosa cell tumor, malignant', '8630  Androblastoma, malignant', '8631  Sertoli-Leydig cell tumor, poorly differentiated', '8634  Sertoli-Leydig cell, poorly diffn, with heterologous elements', '8640  Sertoli cell carcinoma', '8650  Leydig cell tumor, malignant', '8670  Steroid cell tumor, malignant', '8680  Paraganglioma, malignant', '8693  Extra-adrenal paraganglioma, malignant', '8700  Pheochromocytoma, malignant', '8710  Glomangiosarcoma', '8711  Glomus tumor, malignant', '8720  Malignant melanoma, NOS (except juvenile melanoma)', '8721  Nodular melanoma', '8722  Balloon cell melanoma', '8723  Malignant melanoma, regressing', '8728  Meningeal melanomatosis', '8730  Amelanotic melanoma', '8740  Malignant melanoma in junctional nevus', '8741  Malignant melanoma in precancerous  melanosis', '8742  Lentigo maligna melanoma', '8743  Superficial spreading melanoma', '8744  Acral lentiginous melanoma, malignant', '8745  Desmoplastic melanoma, malignant', '8746  Mucosal lentiginous melanoma', '8761  Malignant melanoma in giant pigmented nevus', '8770  Mixed epithelioid and spindle cell melanoma', '8771  Epithelioid cell melanoma', '8772  Spindle cell melanoma, NOS', '8773  Spindle cell melanoma, type A', '8774  Spindle cell melanoma, type B', '8780  Blue nevus, malignant', '8800  Sarcoma, NOS', '8801  Spindle cell sarcoma', '8802  Giant cell sarcoma (except of bone)', '8803  Small cell sarcoma', '8804  Epithelioid sarcoma', '8805  Undifferentiated sarcoma', '8806  Desmoplastic small round cell tumor', '8810  Fibrosarcoma, NOS', '8811  Fibromyxosarcoma', '8812  Periosteal fibrosarcoma', '8813  Fascial fibrosarcoma', '8814  Infantile fibrosarcoma', '8815  Solitary fibrous tumor, malignant', '8830  Malignant fibrous histiocytoma', '8832  Dermatofibrosarcoma, NOS', '8833  Pigmented dermatofibrosarcoma protuberans', '8840  Myxosarcoma', '8850  Liposarcoma, NOS', '8851  Liposarcoma, well differentiated', '8852  Myxoid liposarcoma', '8853  Round cell liposarcoma', '8854  Pleomorphic liposarcoma', '8855  Mixed liposarcoma', '8857  Fibroblastic liposarcoma', '8858  Dedifferentiated liposarcoma', '8890  Leiomyosarcoma, NOS', '8891  Epithelioid leiomyosarcoma', '8894  Angiomyosarcoma', '8895  Myosarcoma', '8896  Myxoid leiomyosarcoma', '8900  Rhabdomyosarcoma, NOS', '8901  Pleomorphic rhabdomyosarcoma, adult type', '8902  Mixed type rhabdomyosarcoma', '8910  Embryonal rhabdomyosarcoma, NOS', '8912  Spindle cell rhabdomyosarcoma', '8920  Alveolar rhabdomyosarcoma', '8921  Rhabdomyosarcoma with ganglionic differentiation', '8930  Endometrial stromal sarcoma, NOS', '8931  Endometrial stromal sarcoma, low grade', '8933  Adenosarcoma', '8934  Carcinofibroma', '8935  Stromal sarcoma, NOS', '8936  Gastrointestinal stromal sarcoma', '8940  Mixed tumor, malignant, NOS', '8941  Carcinoma in pleomorphic adenoma', '8950  Mullerian mixed tumor', '8951  Mesodermal mixed tumor', '8959  Malignant cystic nephroma', '8960  Nephroblastoma, NOS', '8963  Malignant rhabdoid tumor', '8964  Clear cell sarcoma of kidney', '8970  Hepatoblastoma', '8971  Pancreatoblastoma', '8972  Pulmonary blastoma', '8973  Pleuropulmonary blastoma', '8980  Carcinosarcoma, NOS', '8981  Carcinosarcoma, embryonal', '8982  Malignant myoepithelioma', '8990  Mesenchymoma, malignant', '8991  Embryonal sarcoma', '9000  Brenner tumor, malignant', '9014  Serous adenocarcinofibroma', '9015  Mucinous adenocarcinofibroma', '9020  Phyllodes tumor, malignant', '9040  Synovial sarcoma, NOS', '9041  Synovial sarcoma, spindle cell', '9042  Synovial sarcoma, epithelioid cell', '9043  Synovial sarcoma, biphasic', '9044  Clear cell sarcoma, NOS (except of kidney)', '9050  Mesothelioma, malignant', '9051  Fibrous mesothelioma, malignant', '9052  Epithelioid mesothelioma, malignant', '9053  Mesothelioma, biphasic, malignant', '9060  Dysgerminoma', '9061  Seminoma, NOS', '9062  Seminoma, anaplastic', '9063  Spermatocytic seminoma', '9064  Germinoma', '9065  Germ cell tumor, nonseminomatous', '9070  Embryonal carcinoma, NOS', '9071  Yolk sac tumor', '9072  Polyembryoma', '9080  Teratoma, malignant, NOS', '9081  Teratocarcinoma', '9082  Malignant teratoma, undifferentiated', '9083  Malignant teratoma, intermediate', '9084  Teratoma with malignant transformation', '9085  Mixed germ cell tumor', '9090  Struma ovarii, malignant', '9100  Choriocarcinoma, NOS', '9101  Choriocarcinoma combined with other germ cell elements', '9102  Malignant teratoma, trophoblastic', '9105  Trophoblastic tumor, epithelioid', '9110  Mesonephroma, malignant', '9120  Hemangiosarcoma', '9124  Kupffer cell sarcoma', '9130  Hemangioendothelioma, malignant', '9133  Epithelioid hemangioendothelioma, malignant', '9140  Kaposi sarcoma', '9150  Hemangiopericytoma, malignant', '9170  Lymphangiosarcoma', '9180  Osteosarcoma, NOS', '9181  Chondroblastic osteosarcoma', '9182  Fibroblastic osteosarcoma', '9183  Telangiectatic osteosarcoma', '9184  Osteosarcoma in Paget disease of bone', '9185  Small cell osteosarcoma', '9186  Central osteosarcoma', '9187  Intraosseous well differentiated osteosarcoma', '9192  Parosteal osteosarcoma', '9193  Periosteal osteosarcoma', '9194  High grade surface osteosarcoma', '9195  Intracortical osteosarcoma', '9220  Chondrosarcoma, NOS', '9221  Juxtacortical chondrosarcoma', '9230  Chondroblastoma, malignant', '9231  Myxoid chondrosarcoma', '9240  Mesenchymal chondrosarcoma', '9242  Clear cell chondrosarcoma', '9243  Dedifferentiated chondrosarcoma', '9250  Giant cell tumor of bone, malignant', '9251  Malignant giant cell tumor of soft parts', '9252  Malignant tenosynovial giant cell tumor', '9260  Ewing sarcoma', '9261  Adamantinoma of long bones', '9270  Odontogenic tumor, malignant', '9290  Ameloblastic odontosarcoma', '9310  Ameloblastoma, malignant', '9330  Ameloblastic fibrosarcoma', '9342  Odontogenic carcinosarcoma', '9362  Pineoblastoma', '9364  Peripheral neuroectodermal tumor', '9365  Askin tumor', '9370  Chordoma, NOS', '9371  Chondroid chordoma', '9372  Dedifferentiated chordoma', '9380  Glioma, malignant', '9381  Gliomatosis cerebri', '9382  Mixed glioma', '9390  Choroid plexus carcinoma', '9391  Ependymoma, NOS', '9392  Ependymoma, anaplastic', '9393  Papillary ependymoma', '9400  Astrocytoma, NOS', '9401  Astrocytoma, anaplastic', '9410  Protoplasmic astrocytoma', '9411  Gemistocytic astrocytoma', '9420  Fibrillary astrocytoma', '9423  Polar spongioblastoma', '9424  Pleomorphic xanthoastrocytoma', '9430  Astroblastoma', '9440  Glioblastoma, NOS', '9441  Giant cell glioblastoma', '9442  Gliosarcoma', '9450  Oligodendroglioma, NOS', '9451  Oligodendroglioma, anaplastic', '9460  Oligodendroblastoma', '9470  Medulloblastoma, NOS', '9471  Desmoplastic nodular medulloblastoma', '9472  Medullomyoblastoma', '9473  Primitive neuroectodermal tumor, NOS', '9474  Large cell medulloblastoma', '9480  Cerebellar sarcoma, NOS', '9490  Ganglioneuroblastoma', '9500  Neuroblastoma, NOS', '9501  Medulloepithelioma, NOS', '9502  Teratoid medulloepithelioma', '9503  Neuroepithelioma, NOS', '9504  Spongioneuroblastoma', '9505  Ganglioglioma, anaplastic', '9508  Atypical teratoid/rhabdoid tumor', '9510  Retinoblastoma, NOS', '9511  Retinoblastoma, differentiated', '9512  Retinoblastoma, undifferentiated', '9513  Retinoblastoma, diffuse', '9520  Olfactory neurogenic tumor', '9521  Olfactory neurocytoma', '9522  Olfactory neuroblastoma', '9523  Olfactory neuroepithelioma', '9530  Meningioma, malignant', '9538  Papillary meningioma', '9539  Meningeal sarcomatosis', '9540  Malignant peripheral nerve sheath tumor', '9560  Neurilemoma, malignant', '9561  Malig. peripheral nerve sheath tumor, rhabdomyoblastic difftn.', '9571  Perineurioma, malignant', '9580  Granular cell tumor, malignant', '9581  Alveolar soft part sarcoma', '9590  Malignant lymphoma, NOS', '9591  Malignant lymphoma, non-Hodgkin, NOS', '9596  Composite Hodgkin and non-Hodgkin lymphoma', '9650  Hodgkin lymphoma, NOS', '9651  Hodgkin lymphoma, lymphocyte-rich', '9652  Hodgkin lymphoma, mixed cellularity, NOS', '9653  Hodgkin lymphoma, lymphocyte depletion, NOS', '9654  Hodgkin lymphoma, lymphocyte depletion, diffuse fibrosis', '9655  Hodgkin lymphoma, lymphocyte depletion, reticular', '9659  Hodgkin lymphoma, nodular lymphocyte predominance', '9661  Hodgkin granuloma', '9662  Hodgkin sarcoma', '9663  Hodgkin lymphoma, nodular sclerosis, NOS', '9664  Hodgkin lymphoma, nodular sclerosis, cellular phase', '9665  Hodgkin lymphoma, nodular sclerosis, grade 1', '9667  Hodgkin lymphoma, nodular sclerosis, grade 2', '9670  Malignant lymphoma, small B lymphocytic, NOS', '9671  Malignant lymphoma, lymphoplasmacytic', '9673  Mantle cell lymphoma', '9675  Malignant lymphoma, mixed small and large cell, diffuse', '9678  Primary effusion lymphoma', '9679  Mediastinal large B-cell lymphoma', '9680  Malignant lymphoma, large B-cell, diffuse, NOS', '9684  Malignant lymphoma, large B-cell, diffuse, immunoblastic, NOS', '9687  Burkitt lymphoma, NOS', '9689  Splenic marginal zone B-cell lymphoma', '9690  Follicular lymphoma, NOS', '9691  Follicular lymphoma, grade 2', '9695  Follicular lymphoma, grade 1', '9698  Follicular lymphoma, grade 3', '9699  Marginal zone B-cell lymphoma, NOS', '9700  Mycosis fungoides', '9701  Sezary syndrome', '9702  Mature T-cell lymphoma, NOS', '9705  Angioimmunoblastic T-cell lymphoma', '9708  Subcutaneous panniculitis-like T-cell lymphoma', '9709  Cutaneous T-cell lymphoma, NOS', '9714  Anaplastic large cell lymphoma, T cell and  Null cell type', '9716  Hepatosplenic (gamma-delta) cell  lymphoma', '9717  Intestinal T-cell lymphoma', '9718  Primary cutaneous CD30+ T-cell lymphoproliferative disorder', '9719  NK/T-cell lymphoma, nasal and nasal-type', '9727  Precursor cell lymphoblastic lymphoma, NOS', '9728  Precursor B-cell lymphoblastic lymphoma', '9729  Precursor T-cell lymphoblastic lymphoma', '9731  Plasmacytoma, NOS', '9732  Multiple myeloma', '9733  Plasma cell leukemia', '9734  Plasmacytoma, extramedullary (not occurring in bone)', '9740  Mast cell sarcoma', '9741  Malignant mastocytosis', '9742  Mast cell leukemia', '9750  Malignant histiocytosis', '9754  Langerhans cell histiocytosis, disseminated', '9755  Histiocytic sarcoma', '9756  Langerhans cell sarcoma', '9757  Interdigitating dendritic cell sarcoma', '9758  Follicular dendritic cell sarcoma', '9760  Immunoproliferative disease, NOS', '9761  Waldenstrom macroglobulinemia', '9762  Heavy chain disease, NOS', '9764  Immunoproliferative small intestinal disease', '9800  Leukemia, NOS', '9801  Acute leukemia, NOS', '9805  Acute biphenotypic leukemia', '9820  Lymphoid leukemia, NOS', '9823  B-cell chronic lymphocytic leukemia/small lymphocytic lymphoma', '9826  Burkitt cell leukemia', '9827  Adult T-cell leukemia/lymphoma (HTLV-1 positive)', '9832  Prolymphocytic leukemia, NOS', '9833  Prolymphocytic leukemia, B-cell type', '9834  Prolymphocytic leukemia, T-cell type', '9835  Precursor cell lymphoblastic leukemia, NOS', '9836  Precursor B-cell lymphoblastic leukemia', '9837  Precursor T-cell lymphoblastic leukemia', '9840  Acute myeloid leukemia, M6 type', '9860  Myeloid leukemia, NOS', '9861  Acute myeloid leukemia, NOS', '9863  Chronic myeloid leukemia, NOS', '9866  Acute promyelocytic leukemia, t(15;17)(q22;q11-12)', '9867  Acute myelomonocytic leukemia', '9870  Acute basophilic leukemia', '9871  Acute myeloid leukemia with abnormal marrow eosinophils', '9872  Acute myeloid leukemia, minimal differentiation', '9873  Acute myeloid leukemia without maturation', '9874  Acute myeloid leukemia with maturation', '9875  Chronic myelogenous leukemia, BCR/ABL  positive', '9876  Atypical chronic myeloid leukemia,  BCR/ABL negative', '9891  Acute monocytic leukemia', '9895  Acute myeloid leukemia with multilineage dysplasia', '9896  Acute myeloid leukemia, t(8;21)(q22;q22)', '9897  Acute myeloid leukemia, 11q23 abnormalities', '9910  Acute megakaryoblastic leukemia', '9920  Therapy-related acute myeloid leukemia,  NOS', '9930  Myeloid sarcoma', '9931  Acute panmyelosis with myelofibrosis', '9940  Hairy cell leukemia', '9945  Chronic myelomonocytic leukemia, NOS', '9946  Juvenile myelomonocytic leukemia', '9948  Aggressive NK-cell leukemia', '9950  Polycythemia vera', '9960  Chronic myeloproliferative disease, NOS', '9961  Myelosclerosis with myeloid metaplasia', '9962  Essential thrombocythemia', '9963  Chronic neutrophilic leukemia', '9964  Hypereosinophilic syndrome', '9980  Refractory anemia', '9982  Refractory anemia with sideroblasts', '9983  Refractory anemia with excess blasts', '9984  Refractory anemia with excess blasts in transformation', '9985  Refractory cytopenia with multilineage dysplasia', '9986  Myelodysplastic syndrome with 5q- syndrome', '9987  Therapy-related myelodysplastic syndrome,  NOS', '9989  Myelodysplastic syndrome, NOS']
