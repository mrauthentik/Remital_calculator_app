import React from "react";
import jsPDF from 'jspdf'

    const Modal = ({ onClose, data}) =>{
        const downloadPDF = () =>{
            const doc = new jsPDF()

            doc.setTextColor(0, 0, 255);
            doc.setFontSize(16)
            doc.setFont("helvetica", "bold")
            const title =  `Finacial Report for ${data.selectOption}`
            const percentage = `${data.selectOption} Balance Carry Forward: ${data.expenditures}`
            const titleWidth = doc.getTextWidth(title)
            const percentageWidth = doc.getTextWidth(percentage)
            doc.text(title, (doc.internal.pageSize.width - titleWidth) / 2, 10);

            doc.setTextColor(0, 0, 0);
            doc.setFontSize(12)
            doc.setFont("helvetica", "normal")
            doc.text(`Offering: ${data.offering ?? 'N/A'}`, 10,20)
            doc.text(`Tithe: ${data.tithe ?? 'N/A'}`, 10,30)
            doc.text(`Expenditures: ${data.expenditures ?? 'N/A'}`, 10, 40)
            
            doc.setTextColor(0, 0, 255);
            doc.setFontSize(16)
            doc.setFont("helvetica", 'bold')
            doc.text(percentage, (doc.internal.pageSize.width - percentageWidth))
            
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(12)
            doc.setFont('helvetica', 'normal')
            doc.text(`Total Income: ${data.totalIncome }`, 10, 60)
            doc.text(`Balance: ${data.unitExpen ?? 'N/A'}`, 10,70)
            doc.text(`Precentage Sharing ?? 'N/A'}`, 10,80)
            doc.text(`Unit: ${data.unit ?? 'N/A'}`, 10,90)
            doc.text(`Chapter: ${data.chapter ?? 'N/A'}`, 10,100)
            doc.text(`Zone: ${data.zone ?? 'N/A'}`, 10,110)
            doc.text(`Head Quarters: ${data.headquarters ?? 'N/A'}`, 10,120)
            doc.save('Financial_Report.pdf')
        }
        return(
            <div className="modal-background">
                <div className="modal">
                    <h2>Financial Summary for {data.selectOption}</h2>
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