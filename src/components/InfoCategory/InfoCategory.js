import "./InfoCategory.css"

const InfoCategory = ({
  eventData,
  category,
  dataCategory,
  infoCategoryClose,
  setInfoCategoryClose,
}) => {
  const catSelected = dataCategory.filter((f) => {
    return f.value === category
  })

  const isNotAllValue = catSelected[0]?.value !== "All"

  const handleClick = () => {
    if (isNotAllValue) {
      setInfoCategoryClose(!infoCategoryClose)
    }
  }

  return (
    <div className={`infoCategory ${!infoCategoryClose && "close"}`}>
      <div className="infoCategory__header" style={{ display: "flex" }} onClick={handleClick}>
        <h5>Total: {eventData.length}</h5>
        {isNotAllValue && (
          <svg
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
            className="infoCategory__close"
            style={{ transition: "all .5s", transform: infoCategoryClose && "rotate(180deg)" }}
          >
            <path
              d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
              fill="currentColor"
            />
          </svg>
        )}
      </div>
      <p
        style={{
          transition: "all .5s",
          opacity: !infoCategoryClose ? 0 : 1,
          marginTop: isNotAllValue ? 10 : 0,
        }}
      >
        {catSelected[0]?.description}
      </p>
    </div>
  )
}

export default InfoCategory
