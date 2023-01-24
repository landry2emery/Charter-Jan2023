export const GetAvailableMonths = (monthArray) => {
    const Jan = (
    <span>
      {monthArray["Jan"] !== undefined ? (
        <>
          January: {monthArray["Jan"]}{" "}
          {monthArray["Jan"] > 1 ? <>Points,</> : <>Point,</>}
        </>
      ) : (
        <></>
      )}
    </span>
  );
  const Feb = (
    <span>
      {monthArray["Feb"] !== undefined ? (
        <>
          February: {monthArray["Feb"]}{" "}
          {monthArray["Feb"] > 1 ? <>Points,</> : <>Point,</>}
        </>
      ) : (
        <></>
      )}
    </span>
  );
  const Mar = (
    <span>
      {monthArray["Mar"] !== undefined ? (
        <>
          March: {monthArray["Mar"]}{" "}
          {monthArray["Mar"] > 1 ? <>Points,</> : <>Point,</>}
        </>
      ) : (
        <></>
      )}
    </span>
  );
  const Apr = (
    <span>
      {monthArray["Apr"] !== undefined ? (
        <>
          April: {monthArray["Apr"]}{" "}
          {monthArray["Apr"] > 1 ? <>Points,</> : <>Point,</>}
        </>
      ) : (
        <></>
      )}
    </span>
  );
  const May = (
    <span>
      {monthArray["May"] !== undefined ? (
        <>
          May: {monthArray["May"]}{" "}
          {monthArray["May"] > 1 ? <>Points,</> : <>Point,</>}
        </>
      ) : (
        <></>
      )}
    </span>
  );
  const Jun = (
    <span>
      {monthArray["Jun"] !== undefined ? (
        <>
          June: {monthArray["Jun"]}{" "}
          {monthArray["Jun"] > 1 ? <>Points,</> : <>Point,</>}
        </>
      ) : (
        <></>
      )}
    </span>
  );
  const Jul = (
    <span>
      {monthArray["Jul"] !== undefined ? (
        <>
          July: {monthArray["Jul"]}{" "}
          {monthArray["Jul"] > 1 ? <>Points,</> : <>Point,</>}
        </>
      ) : (
        <></>
      )}
    </span>
  );
  const Aug = (
    <span>
      {monthArray["Aug"] !== undefined ? (
        <>
          August: {monthArray["Aug"]}{" "}
          {monthArray["Aug"] > 1 ? <>Points,</> : <>Point,</>}
        </>
      ) : (
        <></>
      )}
    </span>
  );
  const Sep = (
    <span>
      {monthArray["Sep"] !== undefined ? (
        <>
          September: {monthArray["Sep"]}{" "}
          {monthArray["Sep"] > 1 ? <>Points,</> : <>Point,</>}
        </>
      ) : (
        <></>
      )}
    </span>
  );
  
  const Oct = (
    <span>
      {monthArray["Oct"] !== undefined ? (
        <>
          October: {monthArray["Oct"]}{" "}
          {monthArray["Oct"] > 1 ? <>Points,</> : <>Point,</>}
        </>
      ) : (
        <></>
      )}
    </span>
  );

  const Nov = (
    <span>
      {monthArray["Nov"] !== undefined ? (
        <>
          November: {monthArray["Nov"]}{" "}
          {monthArray["Nov"] > 1 ? <>Points,</> : <>Point,</>}
        </>
      ) : (
        <></>
      )}
    </span>
  );

  const Dec = (
    <span>
      {monthArray["Dec"] !== undefined ? (
        <>
          December: {monthArray["Dec"]}{" "}
          {monthArray["Dec"] > 1 ? <>Points,</> : <>Point,</>}
        </>
      ) : (
        <></>
      )}
    </span>
  );

  return (
    <>
    {Jan} {Feb} {Mar} {Apr} {May} {Jun} {Jul} {Aug} {Sep} {Oct} {Nov} {Dec}
    </>
  );
};
