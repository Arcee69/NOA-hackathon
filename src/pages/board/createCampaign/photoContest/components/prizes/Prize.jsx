import SearchableSelect from "../../../../../../components/CustomSelect";
import uploadLogo from "../../../../../../assets/icons/uploadLogo.svg"
import { useFormikContext} from 'formik';

export function Prize ({ index, handleChange, prize, setFieldValue, errors, touched}) {
  const { values } = useFormikContext();
    return (
        <div className='grid xs:grid-cols-1 lg:grid-cols-2 mt-5 xs:gap-4 md:gap-8'>
            <div className='w-full flex flex-col'>
              <h2 className="font-medium text-sm text-NEUTRAL-_200">
                Prize Name
              </h2>
              <div className="xs:w-full lg:w-[400px] mt-1 rounded-md h-[44px]">
                <input
                  name={`prize[${index}].name`}
                  value={prize.name}
                  placeholder='Amazon Gift Card'
                  onChange={handleChange}
                  className='w-full outline-none rounded-md p-2.5'
                />
              </div>
              {errors.name && touched.name ? 
                <div className='text-RED-_100'>{errors.name}</div> 
                : null
              }
        </div>

          <div className='w-full flex flex-col '>
            <h2 className="font-medium text-sm text-NEUTRAL-_200">
              Winners (1/10)
            </h2>
            <div className='xs:w-full h-[44px]'>
                <SearchableSelect
                    name={`prize[${index}].winners`}
                    placeholder='1'
                    options={[{ label: "1", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }, { label: "4", value: 4 }, { label: "5", value: 5 } ]}
                    setFieldValue={setFieldValue}
                    value={prize.winners}
                    className="rounded-md outline-none lg:w-[450px]"
                />
                {errors.winners && touched.winners ? 
                  <div className='text-RED-_100'>{errors.winners}</div> 
                  : null
                }
            </div>
          </div>

          <div className='flex xs:flex-col mt-3 md:flex-row gap-4 w-12/12'>
            <div className="flex flex-col xs:w-full md:w-4/12">
              {values?.imageDoc
                ? 
                  <div className="pt-0 " >
                      <img alt="upload" width={"300px"} height={"100px"} src={URL.createObjectURL(values?.imageDoc)} />
                  </div>
                
                :
                <label className="flex flex-col xs:w-full lg:w-[244px] h-56 py-4 px-6  border-2 bg-BLUE-_300 border-BLUE-_200 border-dashed">
                <div className="flex flex-col my-auto items-center">
                    <img src={uploadLogo} alt="upload" />
                    <div className="text-center font-medium text-sm text-primary">
                        Click to upload <span className='block text-primary'>PNG or JPG (max 5mb)</span>
                    </div>   
                </div>
                <input
                  type="file"
                  name={`prize[${index}].imageDoc`}
                  value={values?.imageDoc}
                  className="opacity-0"
                  onChange={(e) => {setFieldValue("imageDoc", e.target.files[0])}}
                  id="upload"
                  accept={"image/*"}
                  multiple={false}
                />
              </label>
              }
            </div>     

          </div>
      </div>
    )
  }