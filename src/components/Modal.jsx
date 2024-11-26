import React from "react";
import jsPDF from 'jspdf'

    const Modal = ({ onClose, data}) =>{
        const downloadPDF = () =>{
            const doc = new jsPDF()
            doc.text("Financial Report", 10,10)
            doc.text(`Offering: ${data.offering ?? 'N/A'}`, 10,20)
            doc.text(`Tithe: ${data.tithe ?? 'N/A'}`, 10,30)
            doc.text(`Tithe: ${data.unitExpen ?? 'N/A'}`, 10, 40)
            doc.text(`Total Income: ${data.totalIncome ?? 'N/A'}`, 10, 50)
            doc.text(`Balance: ${data.expenditures ?? 'N/A'}`, 10,60)
            // doc.text(`Tithe: ${data.tithe}, 10, 30`)
            doc.save('Financial_Report.pdf')
        }
        return(
            <div className="modal-background">
                <div className="modal">
                    <h2>Financial Summary</h2>
                    <p>Offering: <span>{data.offering}</span> </p>
                    <p>Tithe: <span>{data.tithe}</span> </p>
                    <p>Total Income: <span>{data.totalIncome}</span> </p>
                    <p>Expenditures: <span>{data.expenditures}</span> </p>
                    <p>Balance: <span>{data.unitExpen}</span> </p>
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                     <h2>Percentage Sharing</h2>
                    <p>Unit: <span>{data.unit}</span> </p>
                    <p>Chapter: <span>{data.chapter}</span> </p>
                    <p>Zone: <span>{data.zone}</span> </p>
                    <p>HeadQuaters: <span>{data.headquarters}</span> </p>
                    <button onClick={downloadPDF}>Download as PDF</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        )
    }
    
export default Modal